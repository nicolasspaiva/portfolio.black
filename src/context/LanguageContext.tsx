import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Language } from '../constants/translations';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>(() => {
        const saved = localStorage.getItem('language');
        if (saved === 'en' || saved === 'pt') return saved;
        return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    }, [language]);

    const toggleLanguage = () => setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'));

    const t = (key: string) => translations[language][key] ?? key;

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
