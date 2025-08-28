import { Search, Code2, Headphones } from 'lucide-react';

export default function MethodologySection() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Análise Profunda',
      description: 'Compreendemos suas necessidades, analisamos processos atuais e identificamos oportunidades de melhoria para criar a solução ideal.'
    },
    {
      icon: Code2,
      number: '02',
      title: 'Desenvolvimento Ágil',
      description: 'Utilizamos metodologias ágeis para entregar resultados rapidamente, com iterações constantes e feedback contínuo.'
    },
    {
      icon: Headphones,
      number: '03',
      title: 'Suporte Contínuo',
      description: 'Oferecemos manutenção, atualizações e suporte técnico especializado para garantir o sucesso a longo prazo.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#023047] mb-6">
            Nossa Abordagem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Seguimos uma metodologia comprovada que garante resultados excepcionais 
            em cada projeto, do planejamento à entrega final.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#3a8f94] to-[#80deac] text-white font-bold text-xl mb-6 shadow-lg">
                  {step.number}
                </div>
                
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#f7eccf] flex items-center justify-center shadow-md">
                  <step.icon className="w-10 h-10 text-[#3a8f94]" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#023047] mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}