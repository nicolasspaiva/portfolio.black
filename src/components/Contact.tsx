import { ArrowUpRight, EnvelopeSimple, GithubLogo, LinkedinLogo, Phone } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { PROFILE } from '../constants/data';
import { ICON } from '../constants/ui';
import Reveal from './Reveal';

const Contact = () => {
    const { t } = useLanguage();

    const links = [
        { icon: EnvelopeSimple, label: PROFILE.email, href: `mailto:${PROFILE.email}` },
        { icon: Phone, label: PROFILE.phone, href: 'tel:+5542999736262' },
        { icon: GithubLogo, label: 'github.com/nicolasspaiva', href: PROFILE.github },
        { icon: LinkedinLogo, label: 'linkedin.com/in/nicolasspaiva', href: PROFILE.linkedin },
    ];

    return (
        <footer id="contact" className="shell foot">
            <Reveal>
                <div className="sec-head">
                    <div>
                        <span className="eyebrow">{t('foot.read')}</span>
                        <h2 className="sec-title">{t('foot.title')}</h2>
                    </div>
                </div>
            </Reveal>

            <div className="foot-grid">
                <Reveal>
                    <p className="foot-name">
                        Nicolas
                        <br />
                        Paiva
                    </p>
                    <p className="chan" style={{ marginTop: '1.25rem' }}>
                        {t('foot.role')}
                    </p>
                </Reveal>

                <Reveal delay={120}>
                    <div className="bezel">
                        <div className="core">
                            {links.map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="foot-link"
                                >
                                    <span>
                                        <Icon size={ICON.md} weight="light" />
                                        {label}
                                    </span>
                                    <ArrowUpRight
                                        size={ICON.sm}
                                        weight="light"
                                        className="foot-link-arrow"
                                        aria-hidden="true"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="foot-bar">
                <span className="chan">
                    © {new Date().getFullYear()} Nicolas Paiva · {t('foot.rights')}
                </span>
                <span className="chan">{t('foot.built')}</span>
            </div>
        </footer>
    );
};

export default Contact;
