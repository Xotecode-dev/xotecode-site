import { ArrowRight, Play, Hand, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const hasTouch = window.matchMedia('(pointer: coarse)').matches;
      
      setIsMobile(hasTouch);
    };

    checkDevice();

    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 gradient-primary opacity-95"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            XOTECODE
            <span className="block text-[#80deac] mt-4">
              Ampliando horizontes
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Transformamos ideias em soluções tecnológicas inovadoras. 
            Software personalizado e e-commerce que fazem a diferença.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('contato')}
              onMouseEnter={() => !isMobile && setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`relative px-10 py-4 rounded-full font-bold text-lg text-white overflow-hidden transition-all duration-300 group ${
                isHovering ? 'shadow-2xl shadow-[#f27d13]/60' : 'shadow-lg'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#f27d13] to-[#ee5242]"></div>
              <span className="relative flex items-center gap-3">
                Quero uma Solução
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovering ? 'translate-x-2' : ''}`} />
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection('servicos')}
              className="group px-10 py-4 rounded-full font-bold text-lg text-white bg-white/10 backdrop-blur-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Ver Serviços
            </button>
          </div>

          <div className="mt-10">
            <div className="flex flex-col items-center gap-3 select-none">
              <p className="text-gray-400 text-sm">
                {isMobile ? "Deslize para explorar" : "Scroll para explorar"}
              </p>
              
              { isMobile ? (
              <div className={`flex flex-col gap-2 items-center animate-bounce transition-all duration-[1s, 15s]`}>
                <Hand className="w-6 h-6 text-white/70" />
                <ArrowUp className="w-4 h-4 text-white/50 -mt-1" />
              </div>) : (
              <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1 animate-[moveUp_1.5s_ease-in-out_infinite]">
                <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
              </div>
              )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}