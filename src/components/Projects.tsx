
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();
    const projects = [
        { id: 1, title: t('projects.1.title'), desc: t('projects.1.desc') },
        { id: 2, title: t('projects.2.title'), desc: t('projects.2.desc') },
        { id: 3, title: t('projects.3.title'), desc: t('projects.3.desc') },
    ];

    return (
        <section id="projects" style={{
            padding: '8rem 2rem',
            maxWidth: 'var(--container-width)',
            margin: '0 auto',
            marginBottom: '4rem'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem' }}>{t('projects.title')}</h2>
                <a href="#" style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    {t('projects.view_all')} <span>→</span>
                </a>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((project) => (
                    <div key={project.id} style={{
                        borderRadius: 'var(--radius-card)',
                        overflow: 'hidden',
                        backgroundColor: 'var(--bg-card)',
                        transition: 'var(--transition-soft)',
                    }}>
                        <div style={{
                            height: '200px',
                            background: `linear-gradient(45deg, ${['#1e3a8a', '#064e3b', '#4c1d95'][project.id - 1]
                                }, #0a0a0a)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {/* Abstract image placeholder */}
                        </div>

                        <div style={{ padding: '2rem' }}>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{project.title}</h3>
                            <p style={{
                                color: 'var(--text-muted)',
                                marginBottom: '1.5rem',
                                fontSize: '0.95rem'
                            }}>
                                {project.desc}
                            </p>

                            <button style={{
                                color: 'var(--text-main)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '0.9rem',
                                padding: 0
                            }}>
                                {t('projects.read_more')} <span>→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
