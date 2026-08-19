import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { useLanguage } from './context/LanguageContext';
import './index.css';

function App() {
    const { t } = useLanguage();

    return (
        <>
            <a href="#main" className="skip">
                {t('a11y.skip')}
            </a>

            <Header />

            <main id="main">
                <Hero />
                <About />
                <Stack />
                <Experience />
                <Projects />
                <Education />
            </main>

            <Contact />
        </>
    );
}

export default App;
