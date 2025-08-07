import React, { useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

const AdditionalInfo = () => {
  const { t } = useLanguage();

  const whyChooseItems = useMemo(() => 
    t('additionalInfo.whyChoose.items').map((item, index) => (
      <li key={index}>{item}</li>
    )), [t]);

  const processSteps = useMemo(() => 
    t('additionalInfo.process.steps').map((step, index) => (
      <div key={index} className="step">
        <span className="step-number">{index + 1}</span>
        <span>{step}</span>
      </div>
    )), [t]);

  return (
    <section className="additional-info">
      <div className="container">
        <div className="info-grid">
          <div className="info-card">
            <h3>{t('additionalInfo.whyChoose.title')}</h3>
            <ul>{whyChooseItems}</ul>
          </div>
          <div className="info-card">
            <h3>{t('additionalInfo.process.title')}</h3>
            <div className="process-steps">{processSteps}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo; 