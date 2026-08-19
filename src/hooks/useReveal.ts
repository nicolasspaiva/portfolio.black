import { useEffect, useRef, useState } from 'react';

/**
 * Revelação na entrada do viewport via IntersectionObserver.
 * Nunca listener de scroll: aquele dispara reflow contínuo e derruba o mobile.
 */
export const useReveal = <T extends HTMLElement = HTMLDivElement>(delay = 0) => {
    const ref = useRef<T>(null);
    /* Sem IntersectionObserver o conteúdo já nasce visível — nunca escondido. */
    const [shown, setShown] = useState(() => typeof IntersectionObserver === 'undefined');

    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === 'undefined') return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    io.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    return {
        ref,
        className: shown ? 'reveal reveal-in' : 'reveal',
        style: { '--d': `${delay}ms` } as React.CSSProperties,
    };
};
