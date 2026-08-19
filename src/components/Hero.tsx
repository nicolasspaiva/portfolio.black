import { ArrowDown, EnvelopeSimple, GithubLogo } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { PROFILE } from '../constants/data';
import { ICON } from '../constants/ui';
import Reveal from './Reveal';

const Hero = () => {
    const { language, t } = useLanguage();

    return (
        <section id="top" className="shell hero">
            <div className="hero-grid">
                <div>
                    <Reveal>
                        <span className="eyebrow">
                            <span className="dot dot-live" aria-hidden="true" />
                            {t('status.available')}
                        </span>
                    </Reveal>

                    <Reveal delay={90}>
                        <h1 className="hero-title">
                            <span className="hero-title-name">{PROFILE.name}</span>
                            <em>{PROFILE.role[language]}</em>
                        </h1>
                    </Reveal>

                    <Reveal delay={180}>
                        <p className="hero-lede">{t('hero.lede')}</p>
                    </Reveal>

                    <Reveal delay={270}>
                        <div className="hero-acts">
                            <a href="#projects" className="btn btn-primary">
                                {t('hero.cta.projects')}
                                <span className="btn-orb" aria-hidden="true">
                                    <ArrowDown size={ICON.sm} weight="light" />
                                </span>
                            </a>
                            <a href={`mailto:${PROFILE.email}`} className="btn btn-ghost">
                                {t('hero.cta.email')}
                                <span className="btn-orb" aria-hidden="true">
                                    <EnvelopeSimple size={ICON.sm} weight="light" />
                                </span>
                            </a>
                            <a
                                href={PROFILE.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ghost"
                            >
                                {t('hero.cta.cv')}
                                <span className="btn-orb" aria-hidden="true">
                                    <GithubLogo size={ICON.sm} weight="light" />
                                </span>
                            </a>
                        </div>
                    </Reveal>
                </div>

                {/* <img> puro, sem <picture>: uma vez que o <picture> escolhe um
                    <source>, ele não recua se o arquivo faltar — um AVIF ausente
                    apagaria o retrato em vez de cair para o webp. Com srcset o
                    navegador só troca de candidato dentro do mesmo formato, e
                    webp já é universal. */}
                <Reveal delay={360} className="hero-photo bezel">
                    <div className="core">
                        {/* Sem lazy e com prioridade alta: é o LCP do hero.
                            width/height reservam a caixa e matam o CLS. */}
                        <img
                            src="/nicolas-560.webp"
                            srcSet="/nicolas-560.webp 1x, /nicolas-1120.webp 2x"
                            alt={t('hero.photo.alt')}
                            width={560}
                            height={700}
                            fetchPriority="high"
                            decoding="async"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Hero;
