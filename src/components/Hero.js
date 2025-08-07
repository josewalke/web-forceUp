import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
          <a href="#contacto" className="cta-button">{t('hero.cta')}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 