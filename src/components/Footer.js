import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer" role="contentinfo" aria-label="Pie de página">
      <div className="container">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer; 