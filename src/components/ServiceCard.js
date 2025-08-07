import React from 'react';

const ServiceCard = React.memo(({ icon: Icon, title, description, benefits }) => (
  <div className="service-card">
    <div className="service-icon">
      <Icon />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="service-benefits">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefit-item">
          {benefit.icon}
          <span>{benefit.text}</span>
        </div>
      ))}
    </div>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard; 