import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-primary opacity-95"></div>
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#80deac] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#f27d13] rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#f7eccf] rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            CODEGG
            <span className="block text-[#80deac] mt-2">
              Ampliando horizontes
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformamos ideias em soluções tecnológicas inovadoras. 
            Desenvolvimento de software personalizado, sites corporativos e e-commerce 
            que impulsionam o crescimento do seu negócio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button
              onClick={() => scrollToSection('contato')}
              className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 group"
            >
              Quero uma Solução
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('servicos')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
            >
              <Play className="w-5 h-5" />
              Ver Serviços
            </button>
          </div>

          {/* Trust Indicator */}
          <div className="mt-16 pt-8 border-t border-white/20">
          </div>
        </div>
      </div>
    </section>
  );
}