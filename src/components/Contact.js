import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import ContactForm from './ContactForm';
import ContactItem from './ContactItem';

const Contact = ({ formData, handleInputChange, handleSubmit, formSubmitted }) => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.subtitle')}</p>
            
            <div className="contact-details">
              <ContactItem icon={FiPhone}>
                {t('contact.contactInfo.phone')}
              </ContactItem>
              <ContactItem icon={FiMail}>
                {t('contact.contactInfo.email')}
              </ContactItem>
              <ContactItem icon={FiMapPin}>
                {t('contact.contactInfo.address').replace('\n', '<br />')}
              </ContactItem>
            </div>
          </div>

          <div className="contact-form">
            <ContactForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              formSubmitted={formSubmitted}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 