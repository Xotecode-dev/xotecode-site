import { useEffect } from 'react'; // Importar useEffect
import { useLocation } from 'react-router-dom'; // Importar useLocation
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import MethodologySection from '../components/MethodologySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhoAreWe from '../components/WhoAreWe';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Verifica se existe um targetId no state vindo da navegação
    if (location.state && location.state.targetId) {
      const sectionId = location.state.targetId;
      
      // Um pequeno timeout garante que a página renderizou antes de tentar rolar
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          
          // Opcional: Limpar o state para evitar scroll indesejado ao dar refresh manual depois
          window.history.replaceState({}, document.title);
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <MethodologySection />
      <WhoAreWe />
      <ContactSection />
      <Footer />
    </>
  );
}