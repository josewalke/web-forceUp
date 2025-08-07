import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { translations, defaultLanguage } from '../locales';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Optimización: cargar idioma preferido solo una vez
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return savedLanguage || defaultLanguage;
  });

  const changeLanguage = useCallback((language) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferredLanguage', language);
  }, []);

  // Optimización: memoizar la función de traducción
  const t = useCallback((key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        console.warn(`Translation key "${key}" not found for language "${currentLanguage}"`);
        return key;
      }
    }
    
    return value;
  }, [currentLanguage]);

  // Optimización: memoizar el valor del contexto
  const value = useMemo(() => ({
    currentLanguage,
    changeLanguage,
    t
  }), [currentLanguage, changeLanguage, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 