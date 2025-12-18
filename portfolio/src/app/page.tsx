"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import ProjectCard from '@/components/ProjectCard';
import SkillBar from '@/components/SkillBar';
import Button from '@/components/Button';
import SocialIcon from '@/components/SocialIcon';

// Project data
const projects = [
  {
    title: "CYBERGRAM",
    description: "Plateforme de veille automatisée en cybersécurité",
    technologies: ["Node.js", "Python", "IA"],
    link: "#",
    image: ""
  },
  {
    title: "HackPen",
    description: "Plateforme de test de pénétration sous Linux",
    technologies: ["Linux", "Python", "Sécurité"],
    link: "#",
    image: ""
  },
  {
    title: "WSAS",
    description: "Simulateur d'attaques web (XSS, CSRF)",
    technologies: ["Web Security", "JavaScript", "PHP"],
    link: "#",
    image: ""
  },
  {
    title: "Plateforme pour Artisans Ivoiriens",
    description: "Sécurisation complète (PHP, MySQL, Apache)",
    technologies: ["PHP", "MySQL", "Apache", "Sécurité"],
    link: "#",
    image: ""
  }
];

// Skills data
const skills = {
  development: [
    { skill: "Next.js", level: 90 },
    { skill: "Node.js", level: 85 },
    { skill: "Python", level: 80 },
    { skill: "PHP", level: 75 },
    { skill: "MySQL", level: 70 }
  ],
  cybersecurity: [
    { skill: "Wireshark", level: 85 },
    { skill: "Nmap", level: 80 },
    { skill: "Linux", level: 75 },
    { skill: "Sécurité Web", level: 90 }
  ],
  tools: [
    { skill: "Git", level: 85 },
    { skill: "Docker", level: 70 },
    { skill: "Figma", level: 65 }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Archange Yatte
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Développeur Full-Stack & Analyste Cybersécurité
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Passionné par la cybersécurité et le développement d'applications sécurisées. Je conçois des solutions innovantes pour protéger et optimiser les systèmes informatiques.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="/media/CV_YATTE_ARCHANGE.pdf" 
              download
              className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
            >
              <FaDownload /> Télécharger mon CV
            </a>
          </motion.div>
          <motion.div 
            className="flex justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SocialIcon 
              href="#" 
              icon={<FaLinkedin />} 
              label="LinkedIn" 
            />
            <SocialIcon 
              href="#" 
              icon={<FaGithub />} 
              label="GitHub" 
            />
            <SocialIcon 
              href="#" 
              icon={<FaTwitter />} 
              label="Twitter" 
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">À Propos</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6 text-gray-300">
              Diplômé en Réseaux et Sécurité Informatique, je me spécialise dans le développement d'applications sécurisées et l'analyse des vulnérabilités. Mon objectif est de contribuer à des projets innovants tout en renforçant la protection des systèmes contre les cybermenaces.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Compétences Clés</h3>
                <ul className="text-gray-300">
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Wireshark</li>
                  <li>Nmap</li>
                  <li>Linux</li>
                  <li>Cybersécurité</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Langues</h3>
                <ul className="text-gray-300">
                  <li>Français (natif)</li>
                  <li>Anglais (courant)</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Approche</h3>
                <p className="text-gray-300">
                  Sécurité par la conception, développement agile, veille technologique continue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Développement</h3>
              <div className="space-y-4">
                {skills.development.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    skill={skill.skill} 
                    level={skill.level} 
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Cybersécurité</h3>
              <div className="space-y-4">
                {skills.cybersecurity.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    skill={skill.skill} 
                    level={skill.level} 
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Outils</h3>
              <div className="space-y-4">
                {skills.tools.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    skill={skill.skill} 
                    level={skill.level} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Nom</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Votre email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <Button type="submit">
                Envoyer
              </Button>
            </form>
            <div className="mt-12 text-center">
              <p className="text-xl mb-4">Ou contactez-moi directement :</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <p className="flex items-center justify-center gap-2">
                  <span className="text-primary">📧</span> 
                  archangeyatte@gmail.com
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-primary">📱</span> 
                  +225 05 75 92 58 80 / +225 07 11 45 48 41
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}