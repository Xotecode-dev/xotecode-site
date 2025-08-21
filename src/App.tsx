import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import MethodologySection from './components/MethodologySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <MethodologySection />
      <ContactSection />
      <Footer />
    </>
  );
}