import { ArrowUpRight } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS } from '../constants/data';
import { ICON } from '../constants/ui';
import Reveal from './Reveal';

const Projects = () => {
    const { language, t } = useLanguage();

    return (
        <section id="projects" className="shell sec">
            <Reveal>
                <div className="sec-head">
                    <div>
                        <span className="eyebrow">{t('proj.eyebrow')}</span>
                        <h2 className="sec-title">{t('proj.title')}</h2>
                    </div>
                    <span className="sec-read">
                        {PROJECTS.length} {t('proj.read')}
                    </span>
                </div>
            </Reveal>

            <div className="proj-grid">
                {PROJECTS.map((p, i) => (
                    <Reveal key={p.name} delay={i * 110} className="card proj-card bezel" as="article">
                        <div className="core">
                            <div className="proj-meta">
                                <span>{p.kind[language]}</span>
                                <span aria-hidden="true">·</span>
                                <span>{p.period[language]}</span>
                            </div>

                            <h3 className="proj-name">{p.name}</h3>
                            <p className="proj-sum">{p.summary[language]}</p>

                            <ul className="tl-list">
                                {p.bullets.map((b) => (
                                    <li key={b.en}>{b[language]}</li>
                                ))}
                            </ul>

                            <div className="proj-foot">
                                <span className="badge">
                                    {p.status === 'live' && (
                                        <span className="dot dot-live" aria-hidden="true" />
                                    )}
                                    {t(`proj.status.${p.status}`)}
                                </span>

                                <div className="chip-row">
                                    {p.tech.map((tech) => (
                                        <span key={tech} className="chip">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {p.href && (
                                    <a
                                        href={p.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-more"
                                        style={{ marginTop: '1.35rem' }}
                                    >
                                        {t('proj.link')}
                                        <ArrowUpRight size={ICON.sm} weight="light" aria-hidden="true" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Projects;
