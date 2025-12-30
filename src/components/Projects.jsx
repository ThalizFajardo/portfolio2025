import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent } from './ui/card';
 import { Button } from './ui/button';
import { Badge } from './ui/badge';
import quotesImage from "../assets/pics/quotesAppImg.jpeg"
import rymIcon from "../assets/pics/rymfoto.jpeg"
import eweaterImage from "../assets/pics/ewaterAppImg.jpeg"




const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
   {
      id: 1,
      title: 'Portfolio Website',
      description: 'Portafolio personal desarrollado con React para presentar proyectos, habilidades técnicas y experiencia. Incluye animaciones, diseño responsive y compenentes reutilizables',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      category: 'frontend',
      gradient: 'from-purple-500 to-pink-500',
      liveUrl: '#',
      githubUrl: 'https://github.com/ThalizFajardo/portfolio2025',
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Dashboard del clima desarrollado para practicar integracion con APIs externas. Maneja peticiones asíncronas , estados de carga y visualización de datos  en tiempo real',
      image: eweaterImage,
      tags: ['React', 'OpenWeather API', 'Estado', 'Fetch'],
      category: 'frontend',
      gradient: 'from-blue-400 to-cyan-300',
      liveUrl: 'https://63163593b38a9513e522c938--spontaneous-strudel-0306bb.netlify.app/',
      githubUrl: 'https://github.com/ThalizFajardo/WeaterApp',
    },
    {
      id: 3,
      title: 'Rick and Morty Wiki',
      description: 'Proyecto de práctica para el consumo de Apis externas en React.Incluye manejo de efectos secundarios, carga de datos asíncrona y renderizado dinámico mediante useEffect',
      image:rymIcon,
      tags: ['React', 'API Rest', 'useEffect'],
      category: 'frontend',
      gradient: 'from-cyan-500 to-blue-600',
      liveUrl: 'https://6342528143c38a4ee6073b74--neon-scone-747a15.netlify.app/',
      githubUrl: 'https://github.com/ThalizFajardo/Rick-Morty',
    },
     {
      id: 4,
      title: 'Quotes App',
      description: 'Proyecto de práctica enfocado en el manejo de estado en React. Implementa cambios dinámicos de contenido y estilos a partir de datos locales, reforzando el uso de useState y renderizado condicional ',
      image: quotesImage,
      tags: ['React', 'useState', 'CSS'],
      category: 'frontend',
      gradient: 'from-slate-700 to-slate-900',
      liveUrl: 'https://6328f61f39c047032d6c4499--chic-bubblegum-6e9cad.netlify.app/',
      githubUrl: 'https://github.com/ThalizFajardo/QuotesApp',
    },
    
    
    
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    
    : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full text-sm font-semibold text-orange-600 mb-4">
            Mi Trabajo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estos son algunos proyectos que he desarrollado.
          </p>
        </motion.div>

        {/* Filter buttns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <Filter className="text-gray-400  " size={20} />
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? 'default' : 'outline'}
              className={`bg-white rounded-full font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg'
                  : 'border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group bg-white">
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4`}>
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white rounded-full shadow-lg"
                        >
                          <ExternalLink className="text-gray-900" size={20} />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white rounded-full shadow-lg"
                        >
                          <Github className="text-gray-900" size={20} />
                        </motion.a>
                      </div>
                    </div>

                    {/* project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                         {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-50 hover:from-orange-100 hover:to-pink-100 transition-all duration-300"
                          >
                            {tag}
                          </Badge>
                        ))} 
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* if no projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-500">
             Proyectos full-stack en desarrollo, muy pronto estarán disponibles aquí 🙂.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;