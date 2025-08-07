import React, { useState, useCallback, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { availableLanguages } from '../locales';
import { FiGlobe, FiChevronDown } from 'react-icons/fi';

const LanguageSwitcher = React.memo(() => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = useMemo(() => 
    availableLanguages.find(lang => lang.code === currentLanguage), 
    [currentLanguage]
  );

  const handleLanguageChange = useCallback((languageCode) => {
    changeLanguage(languageCode);
    setIsOpen(false);
  }, [changeLanguage]);

  const toggleDropdown = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  const languageOptions = useMemo(() => 
    availableLanguages.map(lang => (
      <div
        key={lang.code}
        className={`language-option ${lang.code === currentLanguage ? 'active' : ''}`}
        onClick={() => handleLanguageChange(lang.code)}
      >
        <span className="language-flag">
          {lang.code === 'es' ? '🇪🇸' : '🇺🇸'}
        </span>
        <span className="language-name">{lang.name}</span>
      </div>
    )), [currentLanguage, handleLanguageChange]
  );

  return (
    <div className="language-switcher">
      <div className="language-selector" onClick={toggleDropdown}>
        <FiGlobe className="language-icon" />
        <span className="language-text">{currentLang?.name}</span>
        <FiChevronDown className={`chevron-icon ${isOpen ? 'rotated' : ''}`} />
      </div>
      
      {isOpen && (
        <>
          <div className="language-dropdown">
            {languageOptions}
          </div>
          <div className="dropdown-overlay" onClick={closeDropdown} />
        </>
      )}
    </div>
  );
});

LanguageSwitcher.displayName = 'LanguageSwitcher';

export default LanguageSwitcher; 