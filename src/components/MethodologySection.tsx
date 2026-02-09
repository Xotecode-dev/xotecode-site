import { useEffect, useRef } from 'react';
import { Search, Code2, Headphones } from 'lucide-react';

export default function MethodologySection() {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    stepsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Análise Profunda',
      description: 'Compreendemos suas necessidades, analisamos processos atuais e identificamos oportunidades de melhoria para criar a solução ideal.',
      color: 'from-[#3a8f94] to-[#1e5a60]'
    },
    {
      icon: Code2,
      number: '02',
      title: 'Desenvolvimento Ágil',
      description: 'Utilizamos metodologias ágeis para entregar resultados rapidamente, com iterações constantes e feedback contínuo.',
      color: 'from-[#f27d13] to-[#ee5242]'
    },
    {
      icon: Headphones,
      number: '03',
      title: 'Suporte Contínuo',
      description: 'Oferecemos manutenção, atualizações e suporte técnico especializado para garantir o sucesso a longo prazo.',
      color: 'from-[#80deac] to-[#56c896]'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#023047] mb-6">
            Nossa Abordagem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Seguimos uma metodologia comprovada que garante resultados excepcionais 
            em cada projeto, do planejamento à entrega final.
          </p>
        </div>

        {/* Timeline visual */}
        <div className="relative">
          {/* Linha conectora */}
          <div className="hidden lg:block absolute top-40 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3a8f94] to-transparent" />

          {/* Grid com steps */}
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) stepsRef.current[index] = el;
                }}
                className="opacity-0 translate-y-8 transition-all duration-700"
              >
                {/* Card principal */}
                <div className="group relative w-full h-full">
                  {/* Background decorativo */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 rounded-3xl`} />

                  {/* Card */}
                  <div className="relative w-full h-full bg-white rounded-3xl p-8 border border-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Number badge */}
                    <div className={`absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center font-bold text-xl text-white opacity-20 group-hover:opacity-100 transition-opacity duration-300`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Conteúdo */}
                    <h3 className="text-2xl font-bold text-[#023047] mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#3a8f94] group-hover:to-[#f27d13] transition-all duration-300">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Pronto para começar sua transformação digital?
          </p>
          <a href="#contato" className="px-10 py-4 bg-gradient-to-r from-[#f27d13] to-[#ee5242] text-white font-bold rounded-full hover:shadow-2xl hover:shadow-[#f27d13]/50 transition-all duration-300 hover:translate-y-0 translate-y-0">
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
}