import React, { useMemo } from 'react';
import { FiTrendingUp, FiUsers, FiTarget, FiBarChart, FiClock, FiAward } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from './ServiceCard';

const Services = () => {
  const { t } = useLanguage();

  const servicesData = useMemo(() => [
    {
      icon: FiTrendingUp,
      title: t('services.boosters.title'),
      description: t('services.boosters.description'),
      benefits: [
        { icon: <FiBarChart />, text: t('services.boosters.benefits.sales') },
        { icon: <FiClock />, text: t('services.boosters.benefits.time') }
      ]
    },
    {
      icon: FiUsers,
      title: t('services.formation.title'),
      description: t('services.formation.description'),
      benefits: [
        { icon: <FiAward />, text: t('services.formation.benefits.certification') },
        { icon: <FiUsers />, text: t('services.formation.benefits.coaching') }
      ]
    },
    {
      icon: FiTarget,
      title: t('services.afterSales.title'),
      description: t('services.afterSales.description'),
      benefits: [
        { icon: <FiBarChart />, text: t('services.afterSales.benefits.retention') },
        { icon: <FiTrendingUp />, text: t('services.afterSales.benefits.roi') }
      ]
    }
  ], [t]);

  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2>{t('services.title')}</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 