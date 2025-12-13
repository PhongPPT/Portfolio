import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../types';

const projectsData: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, real-time inventory, and analytics dashboard. Handles 100K+ daily transactions.",
    tech: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
    // image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
  },
  {
    title: "Real-Time Collaboration Tool",
    description: "Team collaboration platform with real-time updates, video calls, and project management features. Used by 50+ companies.",
    tech: ["TypeScript", "WebRTC", "Socket.io", "PostgreSQL"],
    // image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Business intelligence platform with ML-driven insights, predictive analytics, and custom reporting for enterprise clients.",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    // image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  },
  {
    title: "Healthcare Management System",
    description: "HIPAA-compliant patient management system with appointment scheduling, telemedicine, and electronic health records.",
    tech: ["Next.js", "GraphQL", "PostgreSQL", "Docker"],
    // image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
  },
  {
    title: "Blockchain Wallet Application",
    description: "Secure cryptocurrency wallet with multi-chain support, DeFi integration, and advanced security features.",
    tech: ["React Native", "Web3.js", "Solidity", "Node.js"],
    // image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop"
  },
  {
    title: "DevOps Automation Platform",
    description: "CI/CD pipeline automation tool that reduced deployment time by 80% and improved team productivity.",
    tech: ["Go", "Kubernetes", "Jenkins", "Terraform"],
    // image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all hover:scale-105 transform"
            >
              {/* <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div> */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-600/30 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;