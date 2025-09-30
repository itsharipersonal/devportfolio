"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "TrekTicket Microservices Platform",
      description: "Architected a microservices-based ticketing platform using Node.js, Express, Next.js, TypeScript, Docker, and Kubernetes, handling 10,000+ transactions monthly.",
      image: "/api/placeholder/400/250",
      technologies: ["Node.js", "Express", "Next.js", "TypeScript", "Docker", "Kubernetes", "NATS Streaming"],
      github: "https://github.com/itsharipersonal/trekticket",
      live: "https://trekticket-demo.com",
      featured: true
    },
    {
      title: "TrekThread Social Media Application",
      description: "Developed a Next.js 13-based social media platform with MongoDB, TailwindCSS, and Clerk for secure authentication, achieving 99.9% uptime.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js 13", "MongoDB", "TailwindCSS", "Clerk", "Server-side Rendering", "Zod Validation"],
      github: "https://github.com/itsharipersonal/trekthread",
      live: "https://trekthread-demo.com",
      featured: true
    },
    {
      title: "Log Gaming Marketplace",
      description: "Built a secure gaming console marketplace using Node.js, Handlebars, CSS, and Bootstrap, with Razorpay for seamless payments.",
      image: "/api/placeholder/400/250",
      technologies: ["Node.js", "Handlebars", "CSS", "Bootstrap", "Razorpay", "Password Hashing"],
      github: "https://github.com/itsharipersonal/log-gaming",
      live: "https://loggaming-demo.com",
      featured: true
    },
    {
      title: "CENTA Event Platform",
      description: "Developed dynamic, responsive web pages for high-profile events using Next.js, React.js, TailwindCSS, and Framer Motion, increasing user engagement by 25%.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "React.js", "TailwindCSS", "Framer Motion", "SEO", "Accessibility"],
      github: "https://github.com/itsharipersonal/centa-events",
      live: "https://centa-events.com",
      featured: true
    },
    {
      title: "Library Management System",
      description: "Academic project featuring a comprehensive library management system with user authentication, book tracking, and reporting capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["C", "Object-Oriented Programming", "Data Structures", "File Management"],
      github: "https://github.com/itsharipersonal/library-management",
      live: "https://library-demo.com",
      featured: false
    },
    {
      title: "Real-time Chat Application",
      description: "Academic project featuring a real-time chat application with multiple user support, message history, and secure communication.",
      image: "/api/placeholder/400/250",
      technologies: ["C", "Socket Programming", "Real-time Communication", "Multi-threading"],
      github: "https://github.com/itsharipersonal/chat-app",
      live: "https://chat-demo.com",
      featured: false
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard using modern web technologies.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      github: "https://github.com/itsharipersonal/ecommerce",
      live: "https://ecommerce-demo.com",
      featured: false
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Socket.io", "MongoDB", "Tailwind"],
      github: "https://github.com/itsharipersonal/taskmanager",
      live: "https://taskmanager-demo.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-black" aria-labelledby="projects-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-8">
            <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Featured Projects
            </h2>
            <p className="text-base text-white max-w-2xl mx-auto">
              A showcase of my recent work and side projects
            </p>
          </header>

          {/* Featured Projects */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12" role="list" aria-label="Featured projects">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:scale-105 transition-all duration-300 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/20" role="listitem">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-2">
                    <div className="flex gap-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Button size="sm" variant="secondary" asChild className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-xs px-2 py-1 h-6">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild className="bg-purple-600 hover:bg-purple-700 text-white border-0 text-xs px-2 py-1 h-6">
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2 px-3 pt-3">
                  <CardTitle className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-3 pb-3">
                  <p className="text-gray-300 mb-3 text-xs leading-tight line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs bg-purple-900/30 text-purple-300 border-purple-600/50 hover:bg-purple-800/50 transition-colors duration-300 px-1.5 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs bg-gray-700/30 text-gray-400 border-gray-600/50 px-1.5 py-0.5">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-6 text-center">
              Other Projects
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {otherProjects.map((project, index) => (
                <Card key={index} className="group hover:scale-102 transition-all duration-300 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-600/50 hover:border-purple-500/30 shadow-md hover:shadow-purple-500/10 backdrop-blur-sm">
                  <CardHeader className="pb-2 px-3 pt-3">
                    <CardTitle className="text-sm font-semibold text-white group-hover:text-purple-200 transition-colors duration-300 line-clamp-2">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 px-3 pb-3">
                    <p className="text-gray-300 mb-3 text-xs leading-tight line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs bg-purple-800/20 text-purple-200 border-purple-500/30 hover:bg-purple-700/30 transition-colors duration-300 px-1.5 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 2 && (
                        <Badge variant="outline" className="text-xs bg-gray-700/30 text-gray-400 border-gray-600/50 px-1.5 py-0.5">
                          +{project.technologies.length - 2}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline" asChild className="bg-transparent hover:bg-purple-600/20 border-purple-500/50 text-purple-300 hover:text-white transition-all duration-300 text-xs px-2 py-1 h-6">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="bg-transparent hover:bg-purple-600/20 border-purple-500/50 text-purple-300 hover:text-white transition-all duration-300 text-xs px-2 py-1 h-6">
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Button size="sm" variant="outline" asChild className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0 shadow-md hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              <a href="https://github.com/itsharipersonal" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
                <Github className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
