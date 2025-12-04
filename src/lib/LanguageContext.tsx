"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { dictionary, Language } from "@/data/dictionary";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof dictionary.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("ja");

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("telab-lang", lang);
        document.documentElement.lang = lang;
    };

    // Also update on initial load if saved language exists
    useEffect(() => {
        const saved = localStorage.getItem("telab-lang") as Language;
        if (saved && (saved === "ja" || saved === "en")) {
            setLanguage(saved);
            document.documentElement.lang = saved;
        }
    }, []);

    const t = dictionary[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
