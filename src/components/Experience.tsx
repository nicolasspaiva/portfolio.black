import { useLanguage } from '../context/LanguageContext';
import { EXPERIENCE, tenures } from '../constants/data';
import { accumulatedMonths, splitSpan } from '../hooks/useUptime';
import Reveal from './Reveal';

const Experience = () => {
    const { language, t } = useLanguage();

    const total = accumulatedMonths(tenures());
    const totalLabel = `${Math.floor(total / 12)}${t('unit.y')} ${total % 12}${t('unit.mo')}`;

    return (
        <section id="experience" className="shell sec">
            <Reveal>
                <div className="sec-head">
                    <div>
                        <span className="eyebrow">{t('exp.eyebrow')}</span>
                        <h2 className="sec-title">{t('exp.title')}</h2>
                    </div>
                    <span className="sec-read">
                        {EXPERIENCE.length} {t('exp.read.a')} · {totalLabel} {t('exp.read.b')}
                    </span>
                </div>
            </Reveal>

            <Reveal delay={100}>
                <div className="bezel">
                    <div className="core">
                        {EXPERIENCE.map((job) => {
                            const span = splitSpan(
                                new Date(job.start),
                                job.end ? new Date(job.end) : new Date(),
                            );
                            const dur = `${span.years > 0 ? `${span.years}${t('unit.y')} ` : ''}${span.months}${t('unit.mo')}`;

                            return (
                                <article key={job.company} className="tl-item">
                                    <div className="tl-when">
                                        <span className="tl-range">
                                            {job.from[language]} — {job.to[language]}
                                        </span>
                                        <span className="tl-dur">{dur}</span>
                                        {job.current && (
                                            <span className="badge">
                                                <span className="dot dot-live" aria-hidden="true" />
                                                {t('exp.current')}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="tl-role">{job.role[language]}</h3>
                                        <p className="tl-org">
                                            {job.company} · {job.place}
                                        </p>
                                        <ul className="tl-list">
                                            {job.bullets.map((b) => (
                                                <li key={b.en}>{b[language]}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default Experience;
