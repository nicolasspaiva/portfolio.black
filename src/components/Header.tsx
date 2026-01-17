
import { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'var(--transition-soft)',
            backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
        }}>
            <div style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '-0.05em'
            }}>
                PAIVA
            </div>

            <nav style={{ display: 'flex', alignItems: 'center' }}>
                {/* Note: In real CSS we'd use media queries. For inline styles, we need a CSS file or styled-components. 
            Since I'm using vanilla CSS with inline strictly for layout, I should move these to a CSS file for responsiveness.
            But for now, I'll mix inline for structure and classNames for responsiveness if I had the CSS.
            Wait, the prompt says "Vanilla CSS". Best practice is to use classes.
            I will use BEM-like classes and add them to index.css later or now.
            Let's stick to inline for quick scaffolding but classes are better.
            I'll use inline styles for the main look and feel as requested, but responsiveness needs classes.
        */}
                <ul className="nav-links" style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                    {['About', 'Projects', `Skills`,].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-muted)',
                                transition: 'var(--transition-soft)'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-main)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button style={{
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-button)',
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-main)',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    transition: 'var(--transition-soft)'
                }}>
                    En / Pt
                </button>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
        </header>
    );
};

export default Header;
