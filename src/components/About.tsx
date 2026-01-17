
const About = () => {
    return (
        <section id="about" style={{
            padding: '8rem 2rem',
            maxWidth: 'var(--container-width)',
            margin: '0 auto'
        }}>
            <div style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                marginBottom: '4rem',
                fontSize: '0.9rem'
            }}>
                home / user / <span style={{ color: 'var(--text-main)' }}>about</span>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                alignItems: 'center'
            }}>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>About Me</h2>
                    <p style={{
                        color: 'var(--text-muted)',
                        marginBottom: '1.5rem',
                        fontSize: '1.1rem'
                    }}>
                        I am <span style={{ color: 'var(--text-main)', fontStyle: 'italic', fontWeight: 'bold' }}>software engineer</span> developing robust solutions.
                        My philosophy revolves around clean code, user-centric design, and continuous learning.
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        I specialize in building scalable web applications that prioritize performance and accessibility.
                    </p>
                </div>

                <div style={{
                    position: 'relative',
                    padding: '1rem',
                    borderRadius: 'var(--radius-card)',
                    background: 'var(--bg-card)',
                    justifySelf: 'center'
                }}>
                    {/* Placeholder for user photo */}
                    <div style={{
                        width: '300px',
                        height: '350px',
                        backgroundColor: '#2a2a2a',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>[Photo]</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
