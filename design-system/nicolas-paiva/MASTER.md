# Nicolas Paiva — Sistema de Design "Editorial Instrument"

Fonte única de verdade do visual do portfólio. Regras de página, se
existirem, ficam em `pages/` e sobrescrevem este arquivo.

Gerado a partir das skills `high-end-visual-design` e `ui-ux-pro-max`,
com as decisões de direção tomadas pelo Nicolas em 18/08/2026.

---

## 1. Decisões de direção

| Eixo | Escolha | Referência |
|---|---|---|
| Tipografia | Serifada display + sans de leitura | imagem 2 |
| Acento | Azul, sinal único | imagem 4 |
| Tema claro | Estrutura e sombras da imagem 4, **mesmo acento do escuro** | imagem 4 |

O princípio que amarra os dois temas: **os papéis dos tokens não invertem,
só os valores**. Escuro e claro são a mesma marca sob luzes diferentes, não
dois designs.

---

## 2. Tipografia

Três vozes com papel fixo. Nenhuma delas invade o território da outra.

| Papel | Fonte | Uso | Pesos |
|---|---|---|---|
| Display | **Playfair Display** | h1, h2, h3, nome no rodapé, frase-manifesto | 600, 700 |
| Corpo | **Plus Jakarta Sans** | parágrafos, listas, leitura | 400, 500, 600 |
| Dado | **JetBrains Mono** | etiquetas, nav, chips, números, uptime | 400, 500 |

- Título hero: `clamp(2.6rem, 6.5vw, 5.4rem)`, peso 700, `letter-spacing: -0.028em`, `line-height: 0.98`.
- Assinatura do rodapé: `clamp(2.4rem, 6vw, 4.9rem)`. A regra de ela ficar abaixo
  do H1 vale **em toda a curva**, não só nos extremos: o coeficiente `vw` também
  precisa ser menor. Com `7vw` contra `6.5vw` a assinatura ultrapassava o título
  entre ~640px e ~830px, mesmo com os dois `clamp` corretos nas pontas.
- Largura do título em **`em`, nunca `ch`**. O algarismo da Playfair é largo:
  `15ch` dava ~918px, o bastante para "Full Stack Developer" caber numa linha só
  e atravessar a página, enquanto o português quebrava em duas. Em `7em` os dois
  idiomas quebram na mesma forma (nome / função em duas linhas) e o título para
  na metade esquerda, deixando a coluna da direita livre para a imagem.
  Piso da medida: "Desenvolvedor", a palavra mais larga, ocupa ~6.4em.
- Assinatura do rodapé: `clamp(2.9rem, 8vw, 5.6rem)` — logo **abaixo** do H1 na escala.
  A assinatura nunca pode ser a maior tipografia da página; se o display encolher,
  ela encolhe junto. Um tamanho fixo aqui desanda em silêncio quando a escala muda.
- O tom apagado (`--txt-mid`) num título marca **a função**, nunca parte do nome.
- **Playfair só na romana.** A itálica é caligráfica demais e briga com a mono
  e a sans geométrica do resto do sistema. Vale para o hero e para a assinatura
  do rodapé.
- Hierarquia dentro de um mesmo título (nome × função) sai por **tom**, não por
  peso: 500/`--txt-mid` contra 700/`--txt-hi`. A distância entre 500 e 700 na
  Playfair quase não se lê em tamanho de display.
- O título grande não leva sublinhado nem régua: o contraste de tom já resolve,
  e um traço sob três linhas de serifada em corpo de display pesa demais.
  Se algum dia voltar, tem de ser `text-decoration` com
  `text-decoration-skip-ink: auto` — uma régua feita com `background-image`
  não contorna descendente, e ou corta a haste do `p` ou invade a linha de baixo.
- `line-height: 0.98` no display. Só afrouxe se algo precisar de espaço entre
  as linhas; sem isso, a entrelinha apertada é o que faz a serifada parecer cara.
- Etiquetas mono: `0.6875rem`, `letter-spacing: 0.2em`, caixa alta.
- Números sempre com `font-variant-numeric: tabular-nums` — uptime não pode dançar.

Fontes banidas neste projeto: Inter, Roboto, Arial, Open Sans, Helvetica.

---

## 3. Cor

Acento azul único. **Nada mais no layout tem cor** além do verde de estado,
reservado exclusivamente para "no ar" / "em curso".

### Escuro (padrão)

| Token | Valor | Papel |
|---|---|---|
| `--bg` | `#0a0b0e` | fundo |
| `--panel` | `#101319` | cartão |
| `--panel-2` | `#151922` | cartão em hover, cabeçalho de painel |
| `--txt-hi` | `#f2f5f9` | texto forte |
| `--txt-mid` | `#a2adbc` | parágrafo |
| `--txt-lo` | `#7c8797` | etiqueta |
| `--accent` | `#2e6bf0` | preenchimento de botão |
| `--accent-txt` | `#7facff` | texto e link sobre o fundo |
| `--ok` | `#3ecf8e` | estado ativo |

### Claro

| Token | Valor | Papel |
|---|---|---|
| `--bg` | `#f6f7fb` | fundo, levemente azulado |
| `--panel` | `#ffffff` | cartão |
| `--panel-2` | `#f4f6fb` | cartão em hover |
| `--txt-hi` | `#0a0c10` | texto forte |
| `--txt-mid` | `#4b5565` | parágrafo |
| `--txt-lo` | `#5d6879` | etiqueta |
| `--accent` | `#2563eb` | preenchimento de botão |
| `--accent-txt` | `#1d4ed8` | texto e link sobre o fundo |
| `--ok` | `#0f7a4d` | estado ativo |

**Preenchimento e texto são tokens separados de propósito.** O azul que
carrega texto branco não é o mesmo azul legível sobre fundo escuro; juntar os
dois num token só reprova contraste em uma das pontas.

### Contraste verificado

18 pares medidos, os 18 acima de 4.5:1 nos dois temas. Piores casos:
texto do botão primário (4.69:1 no escuro) e etiqueta mono sobre `--panel-2`
(4.83:1 no escuro). Qualquer token novo passa pela mesma medição antes de entrar.

---

## 4. Arquitetura de componente

### Bisel duplo (obrigatório em todo cartão)

Nada é colado no fundo. Todo cartão é casca externa + núcleo interno:

```
.bezel   padding: 6px, raio 24px, gradiente sutil, sombra de ambiente
  .core  raio calc(24px - 6px) = 18px, fundo --panel, hairline interno
```

Os raios são concêntricos — a curva de dentro acompanha a de fora. Hairline
sempre por `box-shadow: inset 0 0 0 1px`, **nunca** `border: 1px solid` cinza.

### Botão

Pílula (`border-radius: 999px`). O ícone nunca fica nu ao lado do texto: mora
no próprio círculo (`.btn-orb`, 30px), encostado na borda interna direita.
No hover o orbe desloca na diagonal e cresce — tensão cinética interna.
No `:active` o botão inteiro encolhe para `0.978`.

### Sombra

Difusa e ampla, nunca dura. No claro a opacidade é baixíssima e o raio grande
— o cartão flutua em vez de ser recortado. É essa diferença que separa
"premium" de "bootstrap".

---

## 5. Ritmo e movimento

- Seção: `--sec-y: clamp(5.5rem, 11vw, 9.5rem)`. O layout respira pesado.
- Curvas: `--ease-fluid: cubic-bezier(0.32, 0.72, 0, 1)`. Nada de `linear` ou `ease-in-out`.
- Entrada por scroll: `translateY(48px) + blur(8px) + opacity 0` → estado final em 950ms, com atraso escalonado por índice.
- Revelação por **IntersectionObserver**, nunca por listener de scroll — este último dispara reflow contínuo e derruba o mobile.
- Só `transform`, `opacity` e `filter` são animados. Nenhuma propriedade de layout.
- `backdrop-filter` existe em um único lugar: a ilha do header, que é `position: fixed`.
- Grão e halo vivem em pseudo-elementos `fixed` + `pointer-events: none`.

---

## 6. Regras invioláveis

1. Tema aplicado por script inline **antes da primeira pintura**. Se ficar só no
   `useEffect` do React, o modo claro pisca escuro a cada load.
2. Todo par de cor novo é medido antes de entrar. Mínimo 4.5:1.
3. `prefers-reduced-motion: reduce` entrega o estado final direto, sem animação.
4. Alvo de toque mínimo 44×44 sob `@media (pointer: coarse)`.
5. Abaixo de 768px tudo colapsa para coluna única. Zero scroll horizontal.
6. Ícones de interface: Phosphor peso `light`. Nunca emoji como ícone.
7. **Marca de tecnologia entra só se passar em dois testes:** distinguir-se a
   16px e ser única na lista. O polvo do Testing Library e o logo do GitHub
   Actions viram borrão nesse tamanho; Cloud Functions e Vertex AI repetiriam
   a marca do GCP. Todos esses usam ícone semântico do Phosphor.
   Marcas sempre monocromáticas — azul é o sinal único, e 27 logos coloridos
   viram confete. Os caminhos vivem em `src/constants/brandIcons.ts`
   (simple-icons, CC0), copiados para não carregar dependência de runtime.
8. Chip retangular é informação; pílula redonda é interativo. A forma comunica o papel.
9. **Imagem responsiva com `srcset` num `<img>`, nunca `<picture>` com `<source type>`
   por formato.** Uma vez que o `<picture>` escolhe um `<source>`, ele não recua se
   o arquivo faltar: um AVIF ausente apaga a imagem em vez de cair para o webp.
   Com `srcset` o navegador troca de candidato dentro do mesmo formato, e webp já
   é universal. Retrato do hero: `width`/`height` explícitos e `fetchpriority="high"`,
   nunca `loading="lazy"` — é o LCP da página.

## 7. Retrato do hero

- Recorte **4:5**, gerado por `scripts/portrait.py` a partir do original.
  O foco vertical fica em `0.42` (acima do centro geométrico): em retrato,
  cortar simétrico deixa testa de menos e ombro de mais.
- A proporção vive no CSS (`aspect-ratio: 4 / 5`), não só no arquivo — o
  navegador reserva a caixa antes do download e o CLS fica em zero.
- Filtro `grayscale(1) contrast(1.15) brightness(0.9)`, **idêntico nos dois
  temas** por decisão: no claro o retrato é um bloco escuro deliberado.
- Vinheta por gradiente em `::after`, não gravada no arquivo — o mesmo asset
  serve os dois temas e o ajuste fica em CSS, sem reexportar imagem.
