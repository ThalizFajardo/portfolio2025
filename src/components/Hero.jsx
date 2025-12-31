import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.8, type: 'spring', bounce: 0.4 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 pb-4 "
    >
      {/* Animated  orbs */}
      <motion.div
        animate={{
            opacity: [0, 0.6, 0],
        scale: [0.95, 1, 0.95],
        }}
        transition={{  duration: 3,
        ease: "easeInOut",
        repeat: Infinity,}}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut',delay:3 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center z-10 relative"
          >
          <motion.div 
            variants={itemVariants}
            className="mb-6"
          >
            
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight perspective-1000"
          >
            <motion.span 
              className="inline-block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.2, rotateY: 22 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Hola, Soy
            </motion.span>
            <br />
            <motion.span 
              className="inline-block text-gray-900"
              initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ delay: 0.5, duration: 1, type: 'spring' }}
              whileHover={{ 
                scale: 1.05,
                textShadow: '0 0 20px rgba(255,107,53,0.5)',
                transition: { duration: 0.3 }
              }}
            >
              Thaliz Fajardo
            </motion.span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-8 h-20 md:h-16">
            <TypeAnimation
              sequence={[
                'Construyo interfaces web atractivas, rápidas y escalables.',
                2000,
                'Desarrollo en React, TypeScript y frontend moderno ',
                2000,
                'Código enfocado en producto, negocio y experiencia real.',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl lg:text-4xl font-medium bg-gradient-to-r from-gray-700 via-orange-600 to-pink-600 bg-clip-text text-transparent"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Desarrollo interfaces frontend que convierten ideas en productos utilizables,
con foco en claridad, rendimiento y escalabilidad.
Trabajo principalmente con React y tecnologías modernas del ecosistema web.

           
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection('projects')}
                className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold px-10 py-7 text-lg rounded-full shadow-md glow-effect group"
              >
                <motion.span 
                  className="relative z-10 flex items-center gap-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Ver Proyectos
                  <Sparkles className="w-5 h-5" />
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600"
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ x: '100%', opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotateZ: 10 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-orange-500 text-orange-600 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white hover:border-transparent font-bold px-10 py-7 text-lg rounded-full shadow-xl transition-all duration-500"
              >
                Hablemos
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
          
          </motion.div>
        </motion.div>
      </div>

      {/* dramatic scroll button */}
      <motion.div
        animate={{ 
          y: [0, 18, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
        whileHover={{ scale: 1.5}}
      >
        <motion.div
          className="p-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full shadow-2xl"
          animate={{ boxShadow: ['0 0 0 0 rgba(255,107,53,0.7)', '0 0 0 20px rgba(255,107,53,0)'] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <ArrowDown className="text-white" size={30} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;