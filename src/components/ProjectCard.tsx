import { ArrowRight } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer card-hover bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#3a8f94]/50 transition-all duration-300"
    >
      {/* Imagem */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#3a8f94] to-[#023047]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
        
        {/* Badge de categoria */}
        <div className="absolute top-4 right-4">
          <span className="bg-[#f27d13] text-white text-xs font-bold px-3 py-1 rounded-full">
            {project.category === 'custom-software' && 'Software'}
            {project.category === 'site-institucional' && 'Site Institucional'}
            {project.category === 'landing-page' && 'Landing Page'}
            {project.category === 'ecommerce' && 'E-commerce'}
            {project.category === 'branding' && 'Branding'}
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#80deac] transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4">
          {project.client}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="bg-[#3a8f94]/20 text-[#80deac] text-xs px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-[#3a8f94]/20 text-[#80deac] text-xs px-2 py-1 rounded-md">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Button */}
        <button className="w-full bg-gradient-to-r from-[#f27d13] to-[#ee5242] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#f27d13]/50 transition-all duration-300 group-hover:translate-y-0 translate-y-1">
          Ver Case
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
