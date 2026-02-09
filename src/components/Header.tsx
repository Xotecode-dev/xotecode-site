import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Adicionado useNavigate e useLocation
import Logo from '../assets/img/logo com fundo transparente texto ao lado.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Hooks do React Router
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      // Se não estiver na home, navega para a home passando o ID desejado no state
      navigate('/', { state: { targetId: sectionId } });
    } else {
      // Se já estiver na home, apenas faz o scroll
      const element = document.getElementById(sectionId);
      if (element) {
        // Ajuste opcional para compensar a altura do header fixo (ex: -80px)
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Ou mantenha o seu simples: element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'sobre', label: 'Sobre Nós' },
    { id: 'contato', label: 'Contato' }
  ];

  // ... (o restante do return permanece igual)
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#070031] backdrop-blur-md shadow-lg' : 'lg:bg-transparent md:bg-transparent backdrop-blur-md shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gradient">
              <img src={Logo} alt="Xotecode Logo" className="h-20 w-auto" />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-[#3a8f94] transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/cases"
              className="text-white hover:text-[#3a8f94] transition-colors duration-200 font-medium"
            >
              Cases
            </Link>
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
              className="text-white hover:text-[#8a8f94] p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-[#3a8f94] transition-colors duration-200 font-medium text-left px-4"
                >
                  {item.label}
                </button>
              ))}
              <Link
                to="/cases"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-[#3a8f94] transition-colors duration-200 font-medium px-4"
              >
                Cases
              </Link>
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