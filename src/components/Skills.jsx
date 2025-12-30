import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Layers,
  Smartphone,
  Zap,
  Users,
  Shield,
  Target,
  Workflow,
  Languages,
  Wrench,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Marquee from "./lib/marquee";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Frontend",
      icon: Code2,
      color: "from-orange-500 to-coral-500",
      skills: [
        "React",
        "TypeScript",
        "JavaScript (ES6+)",
        "Redux",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Styling & UI",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      skills: ["Tailwind CSS", "Sass/SCSS", "Styled Components", "Bootstrap"],
    },
    {
      category: "Tools & Others",
      icon: Smartphone,
      color: "from-purple-500 to-violet-500",
      skills: ["Vite", "Git", "GitHub", "Hubspot", "WordPress", "Postman"],
    },
    {
      category: "Backend",
      icon: Layers,
      color: "from-cyan-500 to-teal-500",
      skills: ["Node.js", "Express", "APIs REST","PostgreSQL",  "JWT"],
    },
  ];

  const softSkills = [
    { name: "Comunicación clara", icon: Users, level: "" },
    { name: "Pensamiento lógico", icon: Workflow, level: "" },
    { name: "Autonomía técnica", icon: Shield, level: "" },
    { name: "Metodologías Ágiles", icon: Zap, level: "" },
    { name: "Inglés(B2)", icon: Languages, level: "" },
    { name: "Atención al Detalle", icon: Target, level: "" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 relative bg-gradient-to-b from-transparent via-orange-50/30 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full text-sm font-semibold text-orange-600 mb-4">
            Mi Stack Técnico
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           Stack técnico que utilizo para construir interfaces modernas y productos web funcionales.
          </p>
        </motion.div>

        {/* Technical Skills groups*/}
        <div className="mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {technicalSkills.map((skillGroup, index) => (
              <motion.div variants={itemVariants}>
                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`p-4 rounded-2xl bg-gradient-to-br ${skillGroup.color} text-white shadow-lg`}
                      >
                        <skillGroup.icon size={28} />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {skillGroup.category}
                        </h3>
                        <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mt-1"></div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, idx) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-50 hover:from-orange-100 hover:to-pink-100 transition-all duration-300"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* soft Skills */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Habilidades Blandas
              </span>
            </h3>
          </motion.div>

          {/**soft skills cards  */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group bg-white">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-2xl bg-gradient-to-br from-orange-100 to-pink-100 text-orange-600 mb-4 group-hover:from-orange-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300"
                    >
                      <skill.icon size={24} />
                    </motion.div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium">
                      {skill.level}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center overflow-visible"
        >
          <Card className="border-none shadow-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white ">
            <CardContent className=" p-12 relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              />
              <div className="relative z-10">
                <Sparkles className="mx-auto mb-4" size={48} />
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Buscas una desarrolladora frontend ?
                </h3>
                <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                  Estoy disponible para proyectos freelance y oportunidades de colaboración.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  ¡Hablemos!
                </motion.button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
