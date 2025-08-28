export default function WhoAreWe() {
  const benefits = [
    {
      img: 'src/assets/img/Francisco Linhares transparente.png',
      title: 'Francisco Linhares da Silva Neto - CTO',
      description: 'Especialista em desenvolvimento de software e integração de sistemas. Com experiência no mercado, lidera a equipe técnica da XOTECODE, garantindo a entrega de soluções inovadoras e eficientes.'
    },
    {
      img: 'src/assets/img/Pedro Lucas fundo transparente.png',
      title: 'Pedro Lucas Linhares Paiva - CEO',
      description: 'Responsável pela visão estratégica da XOTECODE. Ele traz uma abordagem centrada no cliente, focando em soluções que realmente atendam às necessidades do mercado.'
    },
  ];

  return (
    <section id="sobre" className="section-padding gradient-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Quem somos nós?
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Nós somos uma equipe apaixonada por tecnologia e inovação,
            dedicada a transformar desafios em soluções eficazes.
            Nossa equipe atualmente é composta por:
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="max-w-xs md:max-w-sm sm:max-w-sm card-hover bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100">
              <div className="w-60 h-60 mx-auto mb-6">
                <img src={benefit.img} alt={benefit.title} className="w-60 h-60 text-white" />
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