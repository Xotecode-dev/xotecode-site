import { X, CheckCircle, TrendingUp, Users } from 'lucide-react';
import type { Project } from '../data/projects';
import { useNavigate } from 'react-router-dom';

interface CaseStudyModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ project, isOpen, onClose }: CaseStudyModalProps) {
  if (!isOpen) return null;
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
      navigate('/', { state: { targetId: sectionId } });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-gradient-to-br from-[#0d1b2a] via-[#1a2a3a] to-[#0d1b2a] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/10">
          {/* Header */}
          <div className="sticky top-0 bg-[#0d1b2a]/95 backdrop-blur-lg border-b border-white/10 p-6 flex items-center justify-between">
            <div className="flex-1">
              <div className="inline-block bg-[#f27d13] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                {project.category === 'custom-software' && 'Software Personalizado'}
                {project.category === 'landing-page' && 'Landing Page'}
                {project.category === 'ecommerce' && 'E-commerce'}
                {project.category === 'branding' && 'Branding'}
              </div>
              <h2 className="text-3xl font-bold text-white">{project.title}</h2>
              <p className="text-gray-400 mt-2">{project.client}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Conteúdo */}
          <div className="p-6 space-y-8">
            {/* Imagem Principal */}
            <div className="rounded-2xl overflow-hidden h-80 bg-gradient-to-br from-[#3a8f94] to-[#023047]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Challenge */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-2 h-2 bg-[#f27d13] rounded-full" />
                O Desafio
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-2 h-2 bg-[#80deac] rounded-full" />
                A Solução
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.solution}
              </p>

              {/* Tecnologias */}
              <div className="mt-6">
                <p className="text-gray-400 text-sm mb-3 font-semibold">Tecnologias Utilizadas:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#3a8f94]/30 text-[#80deac] px-3 py-1 rounded-full text-sm font-medium border border-[#3a8f94]/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Resultados */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-[#f27d13]" />
                Resultados Alcançados
              </h3>

              {project.metrics && (
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {project.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#3a8f94]/50 transition-colors"
                    >
                      <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
                      <p className="text-3xl font-bold text-[#80deac]">{metric.value}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-3">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#80deac] flex-shrink-0" />
                    <p className="text-gray-300">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            {project.testimonial.text && (
              <div className="bg-gradient-to-r from-[#3a8f94]/20 to-[#80deac]/20 rounded-2xl p-8 border border-[#80deac]/30">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-[#80deac]" />
                  <h3 className="text-lg font-semibold text-white">Depoimento do Cliente</h3>
                </div>
                <blockquote className="text-gray-200 text-lg mb-6 italic">
                  "{project.testimonial.text}"
                </blockquote>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="font-semibold text-white">{project.testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{project.testimonial.position}</p>
                  </div>
                  <div className="text-[#f27d13] text-3xl">★★★★★</div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full bg-gradient-to-r from-[#f27d13] to-[#ee5242] text-white font-bold py-3 px-6 rounded-xl text-center hover:shadow-lg hover:shadow-[#f27d13]/50 transition-all duration-300 hover:translate-y-0 translate-y-0"
              >
                Quero um Projeto Semelhante
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
