#!/usr/bin/env python3
"""
Gera as derivadas do retrato do hero a partir do original.

    python3 scripts/portrait.py assets-source/portrait.jpeg

Produz em public/: nicolas-560.webp e nicolas-1120.webp (2×).

O original fica versionado em assets-source/ — são 154 KB e é o que torna as
derivadas reproduzíveis. Ele não vai para public/, ou o build o serviria.

Existe como script, e não como passo manual, porque o recorte é opinado: 4:5
com o rosto acima do centro geométrico. Trocar a foto depois é rodar de novo,
não redescobrir os números.
"""
import sys
from pathlib import Path

from PIL import Image, ImageOps

ASPECT = 4 / 5
"""Retrato. A moldura do cartão usa a mesma proporção via `aspect-ratio`."""

FOCAL_Y = 0.42
"""
Centro vertical do recorte, 0 = topo. Abaixo de 0.5 porque em retrato o rosto
fica acima do centro geométrico — cortar simétrico deixa testa de menos e
ombro de mais.
"""

WIDTHS = (560, 1120)
QUALITY = 82


def crop_to_aspect(im: Image.Image) -> Image.Image:
    """Maior recorte 4:5 possível, centrado em x e ancorado em FOCAL_Y."""
    w, h = im.size
    if w / h > ASPECT:
        new_w, new_h = int(round(h * ASPECT)), h
    else:
        new_w, new_h = w, int(round(w / ASPECT))

    left = (w - new_w) // 2
    top = int(round(h * FOCAL_Y - new_h / 2))
    top = max(0, min(top, h - new_h))  # nunca sai da imagem
    return im.crop((left, top, left + new_w, top + new_h))


def main() -> int:
    if len(sys.argv) != 2:
        print(__doc__.strip())
        return 2

    src = Path(sys.argv[1])
    if not src.is_file():
        print(f"não encontrei o original: {src}")
        return 1

    out_dir = Path("public")
    out_dir.mkdir(exist_ok=True)

    # exif_transpose: foto de celular costuma vir deitada com a rotação só na
    # EXIF. Sem isto o recorte acerta os pixels errados.
    im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    print(f"original      {im.width}×{im.height}")

    base = crop_to_aspect(im)
    print(f"recorte 4:5   {base.width}×{base.height}  (foco y={FOCAL_Y})")

    # Ampliar não cria detalhe: gera peso e borrão. Se o original não tem
    # pixels para uma das larguras, o certo é falhar aqui e pedir arquivo
    # maior — não entregar um 2x macio que só se percebe em tela retina.
    if base.width < max(WIDTHS):
        print(
            f"ERRO: recorte tem {base.width}px de largura, "
            f"o derivado 2x precisa de {max(WIDTHS)}px.\n"
            f"      Use um original com pelo menos "
            f"{int(round(max(WIDTHS) / ASPECT * (im.width / im.height) if im.width / im.height > ASPECT else max(WIDTHS)))}px "
            f"no lado menor."
        )
        return 1

    for w in WIDTHS:
        h = int(round(w / ASPECT))
        resized = base.resize((w, h), Image.LANCZOS)
        dest = out_dir / f"nicolas-{w}.webp"
        resized.save(dest, "WEBP", quality=QUALITY, method=6)
        print(f"{dest}  {dest.stat().st_size // 1024} KB")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
