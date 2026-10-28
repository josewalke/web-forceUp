import React from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const ContactForm = React.memo(({ formData, handleInputChange, handleSubmit, formSubmitted }) => {
  const { t } = useLanguage();

  if (formSubmitted) {
    return (
      <div className="success-message" role="alert" aria-live="polite">
        <FiCheckCircle aria-hidden="true" />
        <h3>{t('contact.success.title')}</h3>
        <p>{t('contact.success.message')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-labelledby="contact-form-title">
      <h3 id="contact-form-title" className="sr-only">{t('contact.title')}</h3>
      {[
        { name: 'nombre', type: 'text', placeholder: t('contact.form.name'), required: true, label: 'Nombre' },
        { name: 'empresa', type: 'text', placeholder: t('contact.form.company'), required: true, label: 'Empresa' },
        { name: 'email', type: 'email', placeholder: t('contact.form.email'), required: true, label: 'Email' },
        { name: 'telefono', type: 'tel', placeholder: t('contact.form.phone'), required: false, label: 'Teléfono' }
      ].map(field => (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name} className="sr-only">
            {field.label}
          </label>
          <input
            id={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleInputChange}
            required={field.required}
            aria-required={field.required}
            aria-describedby={`${field.name}-error`}
          />
          <div id={`${field.name}-error`} className="sr-only" role="alert"></div>
        </div>
      ))}
      <div className="form-group">
        <label htmlFor="mensaje" className="sr-only">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder={t('contact.form.message')}
          value={formData.mensaje}
          onChange={handleInputChange}
          rows="4"
          aria-describedby="mensaje-error"
        />
        <div id="mensaje-error" className="sr-only" role="alert"></div>
      </div>
      <button type="submit" className="submit-button" aria-label={`${t('contact.form.submit')} - Enviar formulario`}>
        <FiSend aria-hidden="true" />
        {t('contact.form.submit')}
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm; 