import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import CaseStudyModal from '../components/CaseStudyModal';
import type { Project } from '../data/projects';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  // const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // const categories = [
  //   { id: 'all', label: 'Todos os Projetos' },
  //   { id: 'custom-software', label: 'Software Personalizado' },
  //   { id: 'site-institucional', label: 'Sites Institucionais' },
  //   { id: 'landing-page', label: 'Landing Pages' },
  //   { id: 'ecommerce', label: 'E-commerce' },
  //   { id: 'branding', label: 'Branding' }
  // ];

  // const filteredProjects = activeFilter === 'all'
  //   ? projects
  //   : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Header />
      <main className="pt-24 pb-12 bg-gradient-to-br from-[#023047] to-[#0d1b2a]">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Nossos Projetos
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Conheça os projetos que transformaram ideias em realidade e geraram resultados extraordinários para nossos clientes.
              </p>
            </div>

            {/* Filtros */}
            {/* <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'btn-primary text-white'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div> */}

            {/* Grid de Projetos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>

            {projects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">
                  Nenhum projeto encontrado nesta categoria.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <Footer />
    </>
  );
}
