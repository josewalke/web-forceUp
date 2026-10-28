import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="logo" role="banner">
          <div className="logo-main" aria-label="Force Up! Logo">
            <span className="logo-text" aria-hidden="true">Force</span>
            <span className="logo-text" aria-hidden="true">Up!</span>
          </div>
          <div className="logo-tagline" aria-label="Formation & Events">Formation & Events</div>
        </div>
        <nav className="nav" role="navigation" aria-label="Navegación principal">
          <a href="#inicio" aria-label={`Ir a sección ${t('header.nav.inicio')}`}>{t('header.nav.inicio')}</a>
          <a href="#servicios" aria-label={`Ir a sección ${t('header.nav.servicios')}`}>{t('header.nav.servicios')}</a>
          <a href="#contacto" aria-label={`Ir a sección ${t('header.nav.contacto')}`}>{t('header.nav.contacto')}</a>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header; 