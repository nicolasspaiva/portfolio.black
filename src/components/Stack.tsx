import { useLanguage } from '../context/LanguageContext';
import { STACK, resolve } from '../constants/data';
import Reveal from './Reveal';
import TechIcon from './TechIcon';

const Stack = () => {
    const { language, t } = useLanguage();
    const count = STACK.reduce((n, g) => n + g.items.length, 0);

    return (
        <section id="stack" className="shell sec">
            <Reveal>
                <div className="sec-head">
                    <div>
                        <span className="eyebrow">{t('stack.eyebrow')}</span>
                        <h2 className="sec-title">{t('stack.title')}</h2>
                    </div>
                    <span className="sec-read">
                        {STACK.length} {t('stack.read.a')} · {count} {t('stack.read.b')}
                    </span>
                </div>
            </Reveal>

            <div className="stack-grid">
                {STACK.map((group, i) => (
                    <Reveal key={group.label.en} delay={i * 70} className="card stack-card bezel">
                        <div className="core">
                            <span className="chan chan-accent stack-card-label">
                                {group.label[language]}
                            </span>
                            <ul className="stack-list">
                                {group.items.map((item) => {
                                    /* O rótulo em inglês é a chave canônica do
                                       item — a marca não muda com o idioma. */
                                    const key = resolve(item, 'en');
                                    return (
                                        <li key={key}>
                                            <TechIcon tech={key} />
                                            {resolve(item, language)}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Stack;
