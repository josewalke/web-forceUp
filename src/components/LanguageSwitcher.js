import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { availableLanguages } from '../locales';
import { FiGlobe, FiChevronDown } from 'react-icons/fi';

const LanguageSwitcher = React.memo(() => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const currentLang = useMemo(() => 
    availableLanguages.find(lang => lang.code === currentLanguage) || availableLanguages[0], 
    [currentLanguage]
  );

  const handleLanguageChange = useCallback((languageCode) => {
    changeLanguage(languageCode);
    setIsOpen(false);
    buttonRef.current?.focus();
  }, [changeLanguage]);

  const toggleDropdown = useCallback((e) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      closeDropdown();
      buttonRef.current?.focus();
    }
  }, [closeDropdown]);

  // Cerrar dropdown cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.language-switcher')) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, closeDropdown, handleKeyDown]);

  const languageOptions = useMemo(() => 
    availableLanguages.map(lang => (
      <div
        key={lang.code}
        className={`language-option ${lang.code === currentLanguage ? 'active' : ''}`}
        onClick={() => handleLanguageChange(lang.code)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleLanguageChange(lang.code);
          }
        }}
        role="option"
        aria-selected={lang.code === currentLanguage}
        tabIndex={0}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.75rem 1rem',
          cursor: 'pointer',
          color: '#ffffff',
          backgroundColor: '#000000',
          borderBottom: '1px solid rgba(249, 115, 22, 0.3)'
        }}
      >
        <span className="language-flag" aria-hidden="true">
          {lang.code === 'es' ? '🇪🇸' : '🇺🇸'}
        </span>
        <span className="language-name">{lang.name}</span>
      </div>
    )), [currentLanguage, handleLanguageChange]
  );

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <div 
        className="language-selector" 
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown(e);
          }
        }}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="language-dropdown"
        aria-label="Seleccionar idioma"
        tabIndex={0}
        ref={buttonRef}
      >
        <FiGlobe className="language-icon" aria-hidden="true" />
        <span className="language-text">{currentLang?.name || 'Español'}</span>
        <FiChevronDown className={`chevron-icon ${isOpen ? 'rotated' : ''}`} aria-hidden="true" />
      </div>
      
      {isOpen && (
        <div 
          id="language-dropdown"
          className="language-dropdown" 
          role="listbox"
          aria-label="Opciones de idioma"
          style={{ 
            position: 'absolute',
            top: 'calc(100% + 5px)',
            left: '0',
            right: '0',
            backgroundColor: '#000000',
            border: '2px solid #f97316',
            borderRadius: '12px',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
            zIndex: 1005,
            minWidth: '140px',
            display: 'block',
            visibility: 'visible',
            opacity: 1
          }}
        >
          {languageOptions}
        </div>
      )}
    </div>
  );
});

LanguageSwitcher.displayName = 'LanguageSwitcher';

export default LanguageSwitcher; 