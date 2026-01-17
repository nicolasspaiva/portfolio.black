import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 2rem',
            maxWidth: 'var(--container-width)',
            margin: '0 auto',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                    lineHeight: 1.1,
                    marginBottom: '1.5rem',
                    fontFamily: 'var(--font-mono)'
                }}>
                    Full-stack<br />
                    <span style={{ color: 'var(--text-muted)' }}>Developer</span>
                </h1>

                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    color: 'var(--text-muted)',
                    maxWidth: '500px',
                    marginBottom: '3rem',
                    lineHeight: 1.6
                }}>
                    Building digital experiences with improved performance and aesthetics.
                    Focusing on minimalism and functionality.
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <button style={{
                        padding: '1rem 2rem',
                        backgroundColor: 'var(--text-main)',
                        color: 'var(--bg-dark)',
                        borderRadius: 'var(--radius-button)',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'var(--transition-soft)'
                    }}>
                        Projects <span>→</span>
                    </button>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/nicolasspaiva"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: '0.5rem 1.5rem',
                            borderRadius: 'var(--radius-button)', // rounded-full
                            border: '1px solid var(--bg-card-hover)', // border-zinc-800
                            color: 'var(--text-muted)', // text-zinc-400
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'var(--transition-soft)',
                            fontSize: '0.875rem',
                            fontWeight: 500
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--text-main)';
                            e.currentTarget.style.borderColor = 'var(--text-main)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--text-muted)';
                            e.currentTarget.style.borderColor = 'var(--bg-card-hover)';
                        }}
                    >
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                    </a>

                    {/* Github Placeholder */}
                    <a
                        href="https://github.com/nicolasspaiva"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: '0.5rem 1.5rem',
                            borderRadius: 'var(--radius-button)',
                            border: '1px solid var(--bg-card-hover)',
                            color: 'var(--text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'var(--transition-soft)',
                            fontSize: '0.875rem',
                            fontWeight: 500
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--text-main)';
                            e.currentTarget.style.borderColor = 'var(--text-main)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--text-muted)';
                            e.currentTarget.style.borderColor = 'var(--bg-card-hover)';
                        }}
                    >
                        <Github size={18} />
                        <span>GitHub</span>
                    </a>

                    {/* Email Placeholder */}
                    <a
                        href="mailto:nicolastesla24@gmail.com"
                        style={{
                            padding: '0.5rem 1.5rem',
                            borderRadius: 'var(--radius-button)',
                            border: '1px solid var(--bg-card-hover)',
                            color: 'var(--text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'var(--transition-soft)',
                            fontSize: '0.875rem',
                            fontWeight: 500
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--text-main)';
                            e.currentTarget.style.borderColor = 'var(--text-main)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--text-muted)';
                            e.currentTarget.style.borderColor = 'var(--bg-card-hover)';
                        }}
                    >
                        <Mail size={18} />
                        <span>Email</span>
                    </a>
                </div>
            </div>

            {/* Decorative gradient blob */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(10,10,10,0) 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: -1
            }} />
        </section>
    );
};

export default Hero;
