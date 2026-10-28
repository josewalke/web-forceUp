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
      <div key={index} className="step" role="listitem">
        <span className="step-number" aria-label={`Paso ${index + 1}`}>{index + 1}</span>
        <span>{step}</span>
      </div>
    )), [t]);

  return (
    <section className="additional-info" aria-labelledby="additional-info-title">
      <div className="container">
        <h2 id="additional-info-title" className="sr-only">Información adicional</h2>
        <div className="info-grid">
          <div className="info-card" role="article" aria-labelledby="why-choose-title">
            <h3 id="why-choose-title">{t('additionalInfo.whyChoose.title')}</h3>
            <ul aria-label="Razones para elegirnos">{whyChooseItems}</ul>
          </div>
          <div className="info-card" role="article" aria-labelledby="process-title">
            <h3 id="process-title">{t('additionalInfo.process.title')}</h3>
            <div className="process-steps" role="list" aria-label="Nuestro proceso">{processSteps}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo; 