
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();
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
                {t('about.breadcrumb')}
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                alignItems: 'center'
            }}>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>{t('about.title')}</h2>
                    <p style={{
                        color: 'var(--text-muted)',
                        marginBottom: '1.5rem',
                        fontSize: '1.1rem'
                    }}>
                        {t('about.intro.1')} <span style={{ color: 'var(--text-main)', fontStyle: 'italic', fontWeight: 'bold' }}>{t('about.intro.role')}</span> {t('about.intro.2')}
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        {t('about.description')}
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
                        <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{t('about.photo_placeholder')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
