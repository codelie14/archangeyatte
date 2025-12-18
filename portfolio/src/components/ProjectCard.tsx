import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div 
      className="project-card bg-gray-800 rounded-lg overflow-hidden h-full flex flex-col"
      whileHover={{ y: -10 }}
    >
      <div className="h-48 bg-gray-700 flex items-center justify-center">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="bg-gray-600 border-2 border-dashed rounded-xl w-16 h-16" />
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="bg-gray-700 text-primary px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link 
          href={project.link} 
          target="_blank" 
          className="text-secondary hover:underline inline-flex items-center mt-auto"
        >
          Voir le projet
        </Link>
      </div>
    </motion.div>
  );
}