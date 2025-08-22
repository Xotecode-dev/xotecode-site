import React from 'react';
import { Code, Globe, ShoppingCart, Megaphone } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: 'Software Personalizado',
      description: 'Desenvolvimento de ERP, CRM e sistemas sob medida para automatizar e otimizar seus processos de negócio.',
      features: ['ERP Customizado', 'CRM Integrado', 'APIs Robustas', 'Integrações']
    },
    {
      icon: Megaphone,
      title: 'Landing Pages',
      description: 'Páginas de conversão otimizadas para campanhas de marketing e geração de leads qualificados.',
      features: ['Alta Conversão', 'A/B Testing', 'Lead Capture', 'Analytics']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Lojas virtuais completas com gateway de pagamento, analytics e ferramentas para maximizar suas vendas online.',
      features: ['Gateway Pagamento', 'Analytics Avançado', 'Gestão Estoque', 'Marketing']
    },
    {
      icon: ShoppingCart,
      title: 'Branding',
      description: 'Criação e gestão de identidade de marca para fortalecer o posicionamento da sua empresa no mercado, conectando propósito, valores e estética visual de forma consistente.',
      features: ['Identidade Visual', 'Estratégia de Posicionamento', 'Manual de Marca', 'Comunicação Consistente']
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#023047] mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções tecnológicas completas para impulsionar o crescimento e 
            a eficiência do seu negócio, desde software personalizado até presença digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center card-hover bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#3a8f94] to-[#80deac] flex items-center justify-center">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-center text-xl font-bold text-[#023047] mb-4">
                {service.title}
              </h3>
              
              <p className="text-center text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-[#f27d13] rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}