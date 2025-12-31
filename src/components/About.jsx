import { motion } from "framer-motion";
import { MapPin, GraduationCap, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import prophilePic from "../assets/pics/profilepic-bkfakwoq.jpg";

const About = () => {
  const infoItems = [
    {
      icon: MapPin,
      label: "Ubicación",
      value: "México City",
      color: "from-orange-500 to-coral-500",
    },
    {
      icon: GraduationCap,
      label: "Estudios",
      value: "Academlo",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+52 55 2903 9985",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "fajardothaliz@gmail.com",
      color: "from-cyan-500 to-teal-500",
    },
  ];

  return (
    <section id="about" className="bg-fixed py-20 px-4 relative bg-white/60">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full text-sm font-semibold text-orange-600 mb-4">
            Conocé más
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Sobre Mí
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Img Section */}
          <motion.div
            initial={{ opacity: 0, x: -200, rotateY: -90, scale: 0.5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500 rounded-3xl transform rotate-8  opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src={prophilePic}
                  alt="Thaliz Fajardo"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
              <motion.div
                animate={{ rotate: 370 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl opacity-50"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-xl opacity-50"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Soy Thaliz Fajardo
                <span className="text-2xl md:text-3xl block mt-2 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Desarrolladora Frontend Web
                </span>
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                Mi principal enfoque es crear interfaces
                claras, funcionales y bien estructuradas. Trabajo principalmente
                con React y tecnologías modernas del ecosistema web.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Me enfoco en escribir código mantenible, entendible y alineado
                con objetivos reales de producto, traduciendo necesidades de
                negocio en soluciones técnicas concretas.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Actualmente continúo fortaleciendo mi perfil hacia el desarrollo
                full-stack para tener una visión más completa del producto y
                mayor autonomía al construir soluciones.
              </p>
            </div>

            {/* info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white`}
                      >
                        <item.icon size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 font-medium">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {item.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
