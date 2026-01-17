
const Projects = () => {
    const projects = [
        { id: 1, title: 'E-Commerce Platform', desc: 'A full-featured online store with payments.' },
        { id: 2, title: 'Task Management', desc: 'Productivity tool for remote teams.' },
        { id: 3, title: 'Financial Dashboard', desc: 'Real-time data visualization and analytics.' },
    ];

    return (
        <section id="projects" style={{
            padding: '8rem 2rem',
            maxWidth: 'var(--container-width)',
            margin: '0 auto',
            marginBottom: '4rem'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem' }}>Selected Projects</h2>
                <a href="#" style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    View all <span>→</span>
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
                                Read more <span>→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
