import React from 'react';

const ServiceCard = React.memo(({ icon: Icon, title, description, benefits, index }) => (
  <div 
    className="service-card" 
    role="listitem"
    aria-labelledby={`service-title-${index}`}
  >
    <div className="service-icon" aria-hidden="true">
      <Icon />
    </div>
    <h3 id={`service-title-${index}`}>{title}</h3>
    <p>{description}</p>
    <div className="service-benefits" role="list" aria-label={`Beneficios de ${title}`}>
      {benefits.map((benefit, benefitIndex) => (
        <div 
          key={benefitIndex} 
          className="benefit-item"
          role="listitem"
        >
          <span aria-hidden="true">{benefit.icon}</span>
          <span>{benefit.text}</span>
        </div>
      ))}
    </div>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard; 