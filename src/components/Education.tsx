import { useLanguage } from '../context/LanguageContext';
import { EDUCATION } from '../constants/data';
import Reveal from './Reveal';

const Education = () => {
    const { language, t } = useLanguage();

    return (
        <section id="education" className="shell sec">
            <Reveal>
                <div className="sec-head">
                    <div>
                        <span className="eyebrow">{t('edu.eyebrow')}</span>
                        <h2 className="sec-title">{t('edu.title')}</h2>
                    </div>
                    <span className="sec-read">
                        {EDUCATION.length} {t('edu.read')}
                    </span>
                </div>
            </Reveal>

            <div className="edu-grid">
                {EDUCATION.map((c, i) => (
                    <Reveal key={c.title.en} delay={i * 90} className="card edu-card bezel">
                        <div className="core">
                            <span className="chan chan-accent">{c.period}</span>
                            <h3 className="edu-title">{c.title[language]}</h3>
                            <span className="edu-org">{c.org}</span>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Education;
