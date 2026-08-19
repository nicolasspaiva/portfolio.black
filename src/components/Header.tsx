import { useEffect, useRef, useState } from 'react';
import { MoonStars, Sun } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { ICON } from '../constants/ui';

const SECTIONS = ['about', 'stack', 'experience', 'projects', 'contact'] as const;

const Header = () => {
    const { language, toggleLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [hidden, setHidden] = useState(false);
    const [active, setActive] = useState<string>('');
    const lastY = useRef(0);

    /* A ilha recolhe ao descer e volta ao subir — libera a tela na leitura. */
    useEffect(() => {
        let frame = 0;
        const onScroll = () => {
            if (frame) return;
            frame = requestAnimationFrame(() => {
                const y = window.scrollY;
                setHidden(y > 220 && y > lastY.current);
                lastY.current = y;
                frame = 0;
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    /* Seção corrente por IntersectionObserver — nunca por listener de scroll,
       que dispararia reflow a cada quadro. */
    useEffect(() => {
        const targets = SECTIONS.map((id) => document.getElementById(id)).filter(
            (el): el is HTMLElement => el !== null,
        );
        if (targets.length === 0 || typeof IntersectionObserver === 'undefined') return;

        const io = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible) setActive(visible.target.id);
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
        );

        targets.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <header className="hdr">
            <div className={hidden ? 'hdr-island hdr-hidden' : 'hdr-island'}>
                <a href="#top" className="hdr-mark">
                    <span className="dot dot-live" aria-hidden="true" />
                    Nicolas Paiva
                </a>

                <nav className="hdr-nav" aria-label={t('a11y.nav')}>
                    {SECTIONS.map((id) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={active === id ? 'hdr-link hdr-link-on' : 'hdr-link'}
                            aria-current={active === id ? 'true' : undefined}
                        >
                            {t(`nav.${id}`)}
                        </a>
                    ))}
                </nav>

                <div className="hdr-controls">
                    <button
                        className="hdr-lang"
                        onClick={toggleLanguage}
                        aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para português'}
                    >
                        {language === 'pt' ? 'EN' : 'PT-BR'}
                    </button>

                    <button
                        className="hdr-theme"
                        onClick={toggleTheme}
                        aria-label={t(theme === 'dark' ? 'theme.toLight' : 'theme.toDark')}
                        aria-pressed={theme === 'light'}
                    >
                        {theme === 'dark' ? (
                            <Sun size={ICON.sm} weight="light" />
                        ) : (
                            <MoonStars size={ICON.sm} weight="light" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
