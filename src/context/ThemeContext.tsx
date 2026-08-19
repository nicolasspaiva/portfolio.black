import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/** Escuro é o padrão. O claro só entra por escolha explícita — nunca pelo sistema. */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('theme');
        return saved === 'light' ? 'light' : 'dark';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.dataset.theme = theme;
        document
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute('content', theme === 'light' ? '#f6f7fb' : '#0a0b0e');
    }, [theme]);

    const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (ctx === undefined) throw new Error('useTheme must be used within a ThemeProvider');
    return ctx;
};
