import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#070031] backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-gradient">
              <img src="../../src/assets/img/logo com fundo transparente texto ao lado.png" alt="Xotecode Logo" className="h-20 w-auto" />
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['inicio', 'servicos', 'sobre', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white  hover:text-[#3a8f94] transition-colors duration-200 font-medium capitalize"
              >
                {item === 'inicio' ? 'Início' : item === 'servicos' ? 'Serviços' : item === 'sobre' ? 'Sobre Nós' : 'Contato'}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contato')}
              className="btn-primary text-white px-6 py-3 rounded-full font-semibold"
            >
              Fale Conosco
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#3a8f94] p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {['inicio', 'servicos', 'sobre', 'contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-white hover:text-[#3a8f94] transition-colors duration-200 font-medium capitalize text-left px-4"
                >
                  {item === 'inicio' ? 'Início' : item === 'servicos' ? 'Serviços' : item === 'sobre' ? 'Sobre Nós' : 'Contato'}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contato')}
                className="btn-primary text-white px-6 py-3 rounded-full font-semibold mx-4 text-center"
              >
                Fale Conosco
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}