import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AdditionalInfo from './components/AdditionalInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Optimización: useCallback para evitar recrear funciones
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    setFormSubmitted(true);
    setFormData({ nombre: '', email: '', telefono: '', empresa: '', mensaje: '' });
  }, [formData]);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <AdditionalInfo />
      <Contact
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        formSubmitted={formSubmitted}
      />
      <Footer />
    </div>
  );
}

export default App;
