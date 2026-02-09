import { Code, ShoppingCart, Megaphone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: 'Software Personalizado',
      description: 'Desenvolvimento de ERP, CRM e sistemas sob medida para automatizar e otimizar seus processos de negócio.',
      features: ['ERP Customizado', 'CRM Integrado', 'APIs Robustas', 'Integrações'],
      gridClass: 'md:col-span-2 lg:col-span-1',
      accentColor: 'from-[#3a8f94] to-[#1e5a60]'
    },
    {
      icon: Megaphone,
      title: 'Landing Pages',
      description: 'Páginas de conversão otimizadas para campanhas de marketing e geração de leads qualificados.',
      features: ['Alta Conversão', 'A/B Testing', 'Lead Capture', 'Analytics'],
      gridClass: 'md:col-span-1 lg:col-span-1',
      accentColor: 'from-[#3a8f94] to-[#1e5a60]'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Lojas virtuais completas com gateway de pagamento, analytics e ferramentas para maximizar suas vendas online.',
      features: ['Gateway Pagamento', 'Analytics Avançado', 'Gestão Estoque', 'Marketing'],
      gridClass: 'md:col-span-1 lg:col-span-1',
      accentColor: 'from-[#3a8f94] to-[#1e5a60]'
    },
    {
      icon: Zap,
      title: 'Branding',
      description: 'Criação e gestão de identidade de marca para fortalecer o posicionamento da sua empresa no mercado, conectando propósito, valores e estética visual de forma consistente.',
      features: ['Identidade Visual', 'Estratégia de Posicionamento', 'Manual de Marca', 'Comunicação Consistente'],
      gridClass: 'md:col-span-2 lg:col-span-1',
      accentColor: 'from-[#3a8f94] to-[#1e5a60]'
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-gradient-to-br from-white via-[#f7eccf]/20 to-white">
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.gridClass} group card-hover relative overflow-hidden rounded-3xl p-8 min-h-96 flex flex-col justify-between bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              {/* Background decorativo */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Conteúdo */}
              <div className="relative z-10">
                <div className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${service.accentColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#023047] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#3a8f94] group-hover:to-[#80deac] transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.accentColor} rounded-full mr-3`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão com efeito */}
              <Link to="/cases" className={`w-full text-center py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r ${service.accentColor} opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg`}>
                Ver Cases →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}