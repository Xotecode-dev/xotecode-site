import franciscoImg from '../assets/img/Francisco Linhares fundo transparente.png';
import pedroImg from '../assets/img/Pedro Lucas fundo transparente.png';
import carlyImg from '../assets/img/Carly fundo transparente.png';
import cauaImg from '../assets/img/Caua fundo transparente.png';
import geovanaImg from '../assets/img/Geovana fundo transparente.png';
import natanImg from '../assets/img/Natan fundo transparente.png';

export default function WhoAreWe() {
  const benefits = [
    {
      img: pedroImg,
      title: 'Pedro Lucas - CEO',
      description: 'Responsável pela visão estratégica da XOTECODE. Ele traz uma abordagem centrada no cliente, focando em soluções que realmente atendam às necessidades do mercado.'
    },
    {
      img: franciscoImg,
      title: 'Francisco Linhares - CTO',
      description: 'Especialista em desenvolvimento de software e integração de sistemas. Com experiência no mercado, lidera a equipe técnica da XOTECODE, garantindo a entrega de soluções inovadoras e eficientes.'
    },
    {
      img: natanImg,
      title: 'Victor Natan - Desenvolvedor',
      description: 'Dedicado à dar vida às interfaces digitais, cria layouts interativos e responsivos que alinham estética e usabilidade.'
    },
    {
      img: cauaImg,
      title: 'Cauã Farias - Líder de Prototipagem',
      description: 'Responsável por estruturar os protótipos e construir a base lógica dos sistemas, garantindo eficiência e solidez às soluções.'
    },
    {
      img: carlyImg,
      title: 'Francisco Cárlly - Desenvolvedor',
      description: 'Dedica-se a transformar interfaces em experiências fluidas e funcionais, garantindo que cada usuário tenha uma jornada intuitiva.'
    },
    {
      img: geovanaImg,
      title: 'Maria Geovana - Content Designer',
      description: 'Cuida da identidade comunicacional da empresa e dos projetos, criando conteúdos e experiências visuais que conectam marcas e pessoas.'
    },

  ];

  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-[#f7eccf] via-[#e0f7fa] to-[#e3fcec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#023047] mb-6">
              Quem Somos
            </h2>
          </div>
          <div className="bg-white/80 rounded-2xl shadow-lg p-8 md:p-12 mb-8 border border-[#80deac]/30">
            <h3 className="text-2xl font-bold mb-4 text-[#3a8f94]">Apresentação</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Somos uma empresa cearense de tecnologia, especializada em transformar ideias em soluções digitais. Atuamos como uma software house, desenvolvendo Softwares Personalizados, Landing Pages, E-commerce e Branding para empresas e organizações que buscam inovação, eficiência e presença digital.
              <br /><br />
              Nosso primeiro grande projeto foi o <span className="font-bold text-[#f27d13]">SIGEN (Sistema Integrado de Gestão de Endemias)</span>, que nasceu do propósito de unir tecnologia e saúde para preservar vidas, mostrando desde o início nossa vocação em usar a tecnologia como ferramenta de impacto social.
            </p>
          </div>
          <div className="bg-white/80 rounded-2xl shadow-lg p-8 md:p-12 border border-[#80deac]/30">
            <h3 className="text-2xl font-bold mb-2 text-[#3a8f94]">Missão & Valores</h3>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Acreditamos que a tecnologia deve ser inclusiva e acessível. Nossa missão é ajudar pessoas e negócios que ainda não estão inseridos no mundo digital a conquistar espaço nele, oferecendo soluções práticas, criativas e funcionais.
                </p>
              </div>
              <div>
                <span className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4 block">
                  Nossos valores se baseiam em:
                </span>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="flex-none w-[0.5rem] h-[0.5rem] rounded-full bg-[#3a8f94]"></span>
                    <span className="font-semibold text-[#023047]">Inovação:</span>
                    <span className="text-gray-700">Criar soluções que fazem a diferença.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex-none w-[0.5rem] h-[0.5rem] rounded-full bg-[#80deac]"></span>
                    <span className="font-semibold text-[#023047]">Colaboração:</span>
                    <span className="text-gray-700">Trabalhar em equipe para somar ideias e talentos.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex-none w-[0.5rem] h-[0.5rem] rounded-full bg-[#f27d13]"></span>
                    <span className="font-semibold text-[#023047]">Responsabilidade social:</span>
                    <span className="text-gray-700">Usar a tecnologia como aliada na transformação da sociedade.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex-none w-[0.5rem] h-[0.5rem] rounded-full bg-[#ee5242]"></span>
                    <span className="font-semibold text-[#023047]">Transparência e confiança:</span>
                    <span className="text-gray-700">Construir relações sólidas com nossos clientes.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white max-w-xs md:max-w-sm sm:max-w-sm card-hover rounded-2xl p-8 text-center shadow-lg border border-[#80deac]/40 hover:border-[#3a8f94] transition-all duration-300">
              <div className="flex items-end justify-center w-56 h-56 mx-auto mb-6 rounded-full bg-[#3B8F94] overflow-hidden">
                <img 
                  src={benefit.img} 
                  alt={benefit.title} 
                  className="h-48" 
                />
              </div>
              <h3 className="text-xl font-bold text-[#023047] mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}