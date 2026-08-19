import { useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EDUCATION, LANGUAGES, PROFILE, currentRoleStart, tenures } from '../constants/data';
import { accumulatedMonths, useUptime } from '../hooks/useUptime';
import Reveal from './Reveal';

const About = () => {
    const { language, t } = useLanguage();
    const up = useUptime(useMemo(() => currentRoleStart(), []));

    const total = accumulatedMonths(tenures());
    const totalLabel = `${Math.floor(total / 12)}${t('unit.y')} ${total % 12}${t('unit.mo')}`;
    const uptimeLabel =
        `${up.years}${t('unit.y')} ${up.months}${t('unit.mo')} ${up.days}${t('unit.d')} · ${up.clock}`;

    /* Medidas correndo primeiro, fatos estáticos depois. A localização cobre o
       que antes era a linha "Base" do painel — era o mesmo dado duas vezes. */
    const rows = [
        { k: t('gauge.uptime'), v: uptimeLabel, live: true },
        { k: t('gauge.total'), v: totalLabel, live: false },
        { k: t('about.row.location'), v: PROFILE.location[language], live: false },
        {
            k: t('about.row.education'),
            v: `${EDUCATION[0].org} · ${EDUCATION[0].period}`,
            live: false,
        },
        { k: t('about.row.focus'), v: t('about.row.focus.v'), live: false },
        {
            k: t('about.row.langs'),
            v: LANGUAGES.map((l) => `${l.name[language]} (${l.level[language]})`).join(' · '),
            live: false,
        },
    ];

    return (
        <section id="about" className="shell sec">
            <Reveal>
                <div className="sec-head">
                    <div>
                        <span className="eyebrow">{t('about.read')}</span>
                        <h2 className="sec-title">{t('about.title')}</h2>
                    </div>
                </div>
            </Reveal>

            <div className="about-grid">
                <Reveal className="about-body">
                    <p className="about-lede">{t('about.lede')}</p>
                    <p>{t('about.p1')}</p>
                    <p>{t('about.p2')}</p>
                </Reveal>

                <Reveal delay={120}>
                    <div className="bezel">
                        <div className="core">
                            <div className="panel-head">
                                <span className="chan">{t('hero.panel')}</span>
                                <span className="badge">
                                    <span className="dot dot-live" aria-hidden="true" />
                                    {t('hero.panel.live')}
                                </span>
                            </div>

                            {rows.map((r) => (
                                <div key={r.k} className="about-row">
                                    <span className="chan">{r.k}</span>
                                    <span
                                        className={
                                            r.live ? 'about-row-v about-row-live' : 'about-row-v'
                                        }
                                    >
                                        {r.v}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default About;
