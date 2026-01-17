
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
    const { t } = useLanguage();
    const categories = [
        { title: t('skills.frontend.title'), skills: t('skills.frontend.items') },
        { title: t('skills.styles.title'), skills: t('skills.styles.items') },
        { title: t('skills.backend.title'), skills: t('skills.backend.items') },
        { title: t('skills.devops.title'), skills: t('skills.devops.items') },
    ];

    return (
        <section id="skills" style={{
            padding: '8rem 2rem',
            maxWidth: 'var(--container-width)',
            margin: '0 auto'
        }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>{t('skills.title')}</h2>

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
