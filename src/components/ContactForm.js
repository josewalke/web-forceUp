import React from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const ContactForm = React.memo(({ formData, handleInputChange, handleSubmit, formSubmitted }) => {
  const { t } = useLanguage();

  if (formSubmitted) {
    return (
      <div className="success-message">
        <FiCheckCircle />
        <h3>{t('contact.success.title')}</h3>
        <p>{t('contact.success.message')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {[
        { name: 'nombre', type: 'text', placeholder: t('contact.form.name'), required: true },
        { name: 'empresa', type: 'text', placeholder: t('contact.form.company'), required: true },
        { name: 'email', type: 'email', placeholder: t('contact.form.email'), required: true },
        { name: 'telefono', type: 'tel', placeholder: t('contact.form.phone'), required: false }
      ].map(field => (
        <div key={field.name} className="form-group">
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleInputChange}
            required={field.required}
          />
        </div>
      ))}
      <div className="form-group">
        <textarea
          name="mensaje"
          placeholder={t('contact.form.message')}
          value={formData.mensaje}
          onChange={handleInputChange}
          rows="4"
        />
      </div>
      <button type="submit" className="submit-button">
        <FiSend />
        {t('contact.form.submit')}
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm; 