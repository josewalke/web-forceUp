import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>{t('header.logo')}</h2>
        </div>
        <nav className="nav">
          <a href="#inicio">{t('header.nav.inicio')}</a>
          <a href="#servicios">{t('header.nav.servicios')}</a>
          <a href="#contacto">{t('header.nav.contacto')}</a>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header; 