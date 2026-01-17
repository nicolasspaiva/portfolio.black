
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './index.css';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.875rem'
      }}>
        <p>&copy; {new Date().getFullYear()} Developer Portfolio. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
