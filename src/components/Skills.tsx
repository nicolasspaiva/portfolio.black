
const Skills = () => {
    const categories = [
        { title: 'Front-end', skills: 'React / TypeScript / Next.js / Tailwind' },
        { title: 'Styles', skills: 'CSS3 / SASS / Styled-Components / Framer Motion' },
        { title: 'Back-end', skills: 'Node.js / Python / C# / PostgreSQL' },
        { title: 'DevOps', skills: 'Docker / AWS / CI/CD / Linux' },
    ];

    return (
        <section id="skills" style={{
            padding: '8rem 2rem',
            maxWidth: 'var(--container-width)',
            margin: '0 auto'
        }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Technical Skills</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem'
            }}>
                {categories.map((cat, index) => (
                    <div key={index} style={{
                        padding: '2rem',
                        backgroundColor: 'var(--bg-card)',
                        borderRadius: 'var(--radius-card)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        transition: 'var(--transition-soft)',
                        cursor: 'default'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                        }}
                    >
                        <h3 style={{
                            marginBottom: '1rem',
                            color: 'var(--text-muted)',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase'
                        }}>
                            {cat.title}
                        </h3>
                        <p style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1rem',
                            lineHeight: 1.6
                        }}>
                            {cat.skills}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
