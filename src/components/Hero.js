import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="hero" role="banner" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-content">
          <h1 id="hero-title">{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
          <a 
            href="#contacto" 
            className="cta-button"
            aria-label={`${t('hero.cta')} - Ir a sección de contacto`}
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 