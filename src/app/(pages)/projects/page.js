import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import Wrapper from '@/app/_components/Wrapper';

const projects = [
  {
    title: "Snakes & Ladder",
    description: "Developed a two-player Snakes and Ladders game in C, featuring dice rolls, seamless gameplay, and an algorithm that calculates the shortest path to the destination.",
    tech: ["C", "Data Structures", "Algorithms"],
    github: "https://github.com/AnanyaBhatnagar09/Snakes-and-Ladder.git",
  }
];

export default function ProjectsPage() {
  return (
    <Wrapper>
      <div className="max-w-3xl mx-auto px-2 md:px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent pb-4">
            Projects
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technical implementations and development work
          </p>
        </div>

        {/* Single Project Card */}
        <div className="max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group rounded-lg border border-gray-700/30 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold text-white group-hover:text-purple-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-sm px-3 py-1.5 rounded-full bg-purple-900/30 text-purple-300 border border-purple-700/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <FaGithub size={20} />
                  <span>View Source</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}