import React from 'react';
import { Zap, TrendingDown, Settings, Link as LinkIcon, Headphones } from 'lucide-react';

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Zap,
      title: 'Aumento da Produtividade',
      description: 'Automatize processos e elimine tarefas repetitivas, liberando sua equipe para focar no que realmente importa.'
    },
    {
      icon: TrendingDown,
      title: 'Redução de Custos',
      description: 'Otimize recursos e reduza gastos operacionais com soluções tecnológicas eficientes e escaláveis.'
    },
    {
      icon: Settings,
      title: 'Automação Inteligente',
      description: 'Implemente sistemas que trabalham 24/7, reduzindo erros e aumentando a eficiência.'
    },
    {
      icon: LinkIcon,
      title: 'Integração Total',
      description: 'Conecte todos os seus sistemas e ferramentas em um ecossistema tecnológico coeso e funcional.'
    },
    {
      icon: Headphones,
      title: 'Suporte e Treinamento',
      description: 'Acompanhamento completo com treinamento da equipe e suporte técnico especializado.'
    }
  ];

  return (
    <section className="section-padding gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que nos Escolher?
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Transformamos desafios tecnológicos em oportunidades de crescimento, 
            oferecendo soluções que geram resultados reais para o seu negócio.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="max-w-xs md:max-w-sm sm:max-w-sm card-hover bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#f27d13] to-[#ee5242] flex items-center justify-center">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-[#023047] mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}