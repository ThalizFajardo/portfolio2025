import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "fajardothaliz@gmail.com",
      href: "mailto:fajardothaliz@gmail.com",
      color: "from-orange-500 to-coral-500",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+52 55 2903 9985",
      href: "tel:+525529039985",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "México City",
      href: "#",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ThalizFajardo",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/thal%C3%ADz-fajardo-00026a244/",
      color: "hover:text-blue-600",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      //enpoint from formspree
      const res = await fetch("https://formspree.io/f/manbvpkn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error al enviar el mensaje");

      toast({
        title: "¡Mensaje enviado! 🎉",
        description: "Gracias por contactarme. Te responderé pronto.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "¡Error!",
        description: "No se pudo enviar el mensaje. Intenta más tarde.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);

  };

  return (
    <section
      id="contact"
      className="py-20 px-4 relative bg-gradient-to-b from-transparent via-pink-50/30 to-transparent"
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
            Ponte en Contacto
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              ¡Hablemos!
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto o una idea que necesita frontend?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Información de Contacto
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Estoy disponible para colaborar en proyectos frontend
y oportunidades donde pueda aportar valor técnico.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="block"
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${info.color} text-white`}
                      >
                        <info.icon size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">
                          {info.label}
                        </p>
                        <p className="text-base font-semibold text-gray-900">
                          {info.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* social links */}
            <div className="pt-6">
              <p className="text-sm font-semibold text-gray-700 mb-4">
                Sígueme en:
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-gray-100 rounded-full transition-colors ${social.color}`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

           
          </motion.div>

          {/* contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-none shadow-2xl bg-white">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nombre Completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                     onClick={() => toast({ title: "Funciona", description: "Todo ok" })}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar Mensaje
                          <Send size={20} />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>




        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-8 border-t-2 border-gray-200 text-center"
        >
          <p className="text-gray-600">
            Diseñado y desarrollado con
            <span className="text-red-500 mx-1">❤️</span>
            por <strong className="text-orange-600">Thaliz Fajardo</strong>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
