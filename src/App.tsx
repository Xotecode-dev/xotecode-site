import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import MethodologySection from './components/MethodologySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhoAreWe from './components/WhoAreWe';

export default function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <WhoAreWe />
      <MethodologySection />
      <ContactSection />
      <Footer />
    </>
  );
}