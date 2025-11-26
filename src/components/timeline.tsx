"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar, Code, Smartphone, Globe, Database, Zap, ChevronDown, ChevronUp } from "lucide-react";

export default function Timeline() {
  const [showAllTimeline, setShowAllTimeline] = useState(false);

  // Function to get icon for technology
  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('html') || techLower.includes('css')) return <Globe className="w-3 h-3" />;
    if (techLower.includes('javascript') || techLower.includes('js')) return <Code className="w-3 h-3" />;
    if (techLower.includes('android') || techLower.includes('flutter') || techLower.includes('mobile')) return <Smartphone className="w-3 h-3" />;
    if (techLower.includes('database') || techLower.includes('mysql') || techLower.includes('sqlite') || techLower.includes('mongodb')) return <Database className="w-3 h-3" />;
    if (techLower.includes('ai') || techLower.includes('prompt') || techLower.includes('vibe')) return <Zap className="w-3 h-3" />;
    return <Code className="w-3 h-3" />;
  };

  const timelineItems = [
    {
      year: "2025",
      title: "Web Development & Flutter Mobile App Development",
      description: "Continued company web development projects while getting new opportunities to work on Flutter app development for both iOS and Android. Built screens for existing company apps, expanding skills from web to mobile development.",
      projects: [
        {
          title: "Company Web Development Projects",
          description: "Continued working on company web development projects using Next.js and TailwindCSS, maintaining and enhancing existing web applications and building new features according to business requirements.",
          technologies: ["Next.js", "TailwindCSS", "React", "Web Development", "Company Projects", "Business Requirements"],
          github: "",
          live: "",
          type: "Professional"
        },
        {
          title: "Flutter Mobile App Development",
          description: "Got new opportunities to work on Flutter app development for both iOS and Android platforms. Built screens and features for existing company mobile applications, expanding from web to mobile development.",
          technologies: ["Flutter", "Dart", "iOS", "Android", "Mobile Development", "Cross-Platform", "Company Apps"],
          github: "",
          live: "",
          type: "Professional"
        },
        {
          title: "Todo Management System",
          description: "Built a comprehensive todo management system in Flutter for both iOS and Android that can follow up on todos and assign todos to people. Features task tracking, assignment capabilities, and cross-platform synchronization. Project is currently in progress.",
          technologies: ["Flutter", "Dart", "iOS", "Android", "Todo Management", "Task Assignment", "Cross-Platform", "In Progress"],
          github: "",
          live: "",
          type: "Professional"
        },
        {
          title: "Web Design System Platform",
          description: "Building a web application that can design design systems for web applications and compare different ideas. Currently in development as the market already has several similar ideas, so working on making it unique and innovative with distinctive features.",
          technologies: ["Web Development", "Design Systems", "UI/UX", "Innovation", "Market Research", "Unique Features", "In Progress"],
          github: "",
          live: "",
          type: "Professional"
        },
        {
          title: "Kochi Riders - Ride Booking Platform",
          description: "Vibe coded a web platform that enables users to book rides seamlessly. Built using modern web technologies with a focus on user experience and booking functionality for transportation services.",
          technologies: ["Vibe Coding", "Web Development", "Ride Booking", "User Experience", "Transportation", "Booking System"],
          github: "",
          live: "https://kochiriders.netlify.app",
          type: "Professional"
        },
        {
          title: "SaaS Invitation Letter Platform",
          description: "Currently working on a SaaS project that can build invitation letters and share them with loved ones. This project was inspired by a friend's marriage and aims to create beautiful, customizable digital invitations that can be easily shared and managed.",
          technologies: ["SaaS", "Invitation Letters", "Digital Invitations", "Sharing Platform", "Customization", "Wedding Technology", "In Progress"],
          github: "",
          live: "",
          type: "Professional"
        },
        {
          title: "PWA Portfolio Application",
          description: "Built a Progressive Web App portfolio application that showcases projects and skills with offline capabilities, responsive design, and modern web technologies. Features include fast loading, mobile-first design, and seamless user experience across all devices.",
          technologies: ["PWA", "Portfolio", "Offline Support", "Responsive Design", "Mobile-First", "Web Technologies", "User Experience"],
          github: "",
          live: "",
          type: "Professional"
        }
      ]
    },
    {
      year: "2024",
      title: "Professional Development & Travel Agency Projects",
      description: "Continued working on company projects using Next.js and TailwindCSS, while embracing the AI era of vibe coding and prompt engineering. Built PWA applications for travel agency projects with package listings and admin connectivity.",
      projects: [
        {
          title: "Travel Agency PWA Platform",
          description: "Built a Progressive Web App for travel agency projects featuring package listings, booking systems, and admin connectivity. Developed using Next.js and TailwindCSS with offline capabilities and mobile-first design.",
          technologies: ["Next.js", "TailwindCSS", "PWA", "Package Listings", "Admin Panel", "Offline Support"],
          github: "",
          live: "",
          type: "Professional"
        },
        {
          title: "Vibe Coding & Prompt Engineering Mastery",
          description: "Mastered the art of vibe coding and prompt engineering, using AI tools to enhance development workflows. Learned to craft effective prompts for code generation, debugging, and architectural decisions in the AI era.",
          technologies: ["Prompt Engineering", "Vibe Coding", "AI Tools", "Code Generation", "ChatGPT", "GitHub Copilot"],
          github: "",
          live: "",
          type: "AI Era"
        }
      ]
    },
    {
      year: "2023 Sep - Dec",
      title: "Company Projects & Web Development",
      description: "Worked on developing company pages and various web projects according to team instructions. Built multiple pages including camping pages and other client projects, gaining experience in client work and team collaboration",
      projects: [
        {
          title: "Company Web Pages Development",
          description: "Developed multiple company web pages using Next.js and TailwindCSS according to team instructions and client requirements. Built responsive, modern web pages with clean design and optimal user experience.",
          technologies: ["Next.js", "TailwindCSS", "React", "Responsive Design", "Team Collaboration", "Client Work"],
          github: "",
          live: "",
          type: "Professional"
        },
        {
          title: "Camping Pages & Outdoor Projects",
          description: "Worked on camping-related web pages and outdoor activity projects using Next.js and TailwindCSS. Developed user-friendly interfaces for camping services, booking systems, and outdoor activity information.",
          technologies: ["Next.js", "TailwindCSS", "User Interface", "Booking Systems", "Outdoor Services", "Client Requirements"],
          github: "",
          live: "",
          type: "Professional"
        }
      ]
    },
    {
      year: "2023",
      title: "Full-Stack Development & Microservices",
      description: "Built comprehensive web applications including microservices architecture, social media platforms, and e-commerce solutions",
      projects: [
        {
          title: "TrekTicket Microservices Platform",
          description: "Architected a microservices-based ticketing platform using Node.js, Express, Next.js, TypeScript, Docker, and Kubernetes, handling 10,000+ transactions monthly.",
          technologies: ["Node.js", "Express", "Next.js", "TypeScript", "Docker", "Kubernetes", "NATS Streaming"],
          github: "https://github.com/itsharipersonal/trekticket",
          live: "",
          type: "Professional"
        },
        {
          title: "TrekThread Social Media Application",
          description: "Developed a Next.js 13-based social media platform with MongoDB, TailwindCSS, and Clerk for secure authentication, achieving 99.9% uptime.",
          technologies: ["Next.js 13", "MongoDB", "TailwindCSS", "Clerk", "Server-side Rendering", "Zod Validation"],
          github: "https://github.com/itsharipersonal/trek",
          live: "",
          type: "Professional"
        },
        {
          title: "LOGAMING E-commerce Platform",
          description: "Built a secure gaming console marketplace using Node.js, Handlebars, CSS, and Bootstrap, with Razorpay for seamless payments.",
          technologies: ["Node.js", "Handlebars", "CSS", "Bootstrap", "Razorpay", "Password Hashing"],
          github: "https://github.com/itsharipersonal/LOGAMING",
          live: "",
          type: "Professional"
        }
      ]
    },
    {
      year: "2022",
      title: "Learning HTML & CSS Foundations to Full-Stack Development",
      description: "Started my web development journey with basic HTML/CSS clone projects and progressed to building full-fledged e-commerce platforms. This year marked my transition from frontend fundamentals to full-stack development with Node.js and Express.js.",
      projects: [
        {
          title: "Netflix Clone",
          description: "Built a responsive Netflix clone using HTML, CSS, and JavaScript, implementing modern UI/UX principles and responsive design patterns.",
          technologies: ["HTML5", "CSS", "JavaScript", "Responsive Design", "Flexbox", "Grid"],
          github: "https://github.com/itsharipersonal/NETFLIX-RESPONSIVE-CLONE",
          live: "",
          type: "Learning"
        },
        {
          title: "SpaceX Website Clone",
          description: "Recreated the SpaceX website with HTML and CSS, focusing on layout structure, typography, and visual hierarchy.",
          technologies: ["HTML5", "CSS", "CSS Grid", "Flexbox", "Typography", "Layout Design"],
          github: "https://github.com/itsharipersonal/SPACEX-CLONE",
          live: "",
          type: "Learning"
        },
        {
          title: "Portfolio Website",
          description: "Created my first personal portfolio website using pure HTML and CSS, showcasing my early projects and learning progress.",
          technologies: ["HTML5", "CSS", "CSS Animations", "Responsive Design"],
          github: "https://github.com/itsharipersonal/PORTFOLIO",
          live: "",
          type: "Learning"
        },
        {
          title: "LOGAMING E-commerce Platform",
          description: "Built a full-fledged e-commerce application using Node.js, Express.js, and Handlebars that exclusively serves high-end gaming PCs. Features user authentication, product management, shopping cart, and secure payment processing.",
          technologies: ["Node.js", "Express.js", "Handlebars", "Bootstrap", "JavaScript", "E-commerce"],
          github: "https://github.com/itsharipersonal/LOGAMING",
          live: "",
          type: "Learning"
        }
      ]
    },
    {
      year: "2019-2021",
      title: "Career Gap & Self-Discovery",
      description: "Went abroad to Oman for an exciting management-level position at Camping World in Barka, Oman. Spent 2 years there before returning to my native country. During this time, I realized my true passion for computers and decided that I wanted a job where I could work with computers every day.",
      projects: [
        {
          title: "Management Experience in Oman",
          description: "Worked in a management-level position at Camping World in Barka, Oman, gaining valuable experience in sales and team management. This experience helped me understand different industries and business operations.",
          technologies: ["Management", "Sales", "Team Leadership", "Business Operations", "Customer Service"],
          github: "",
          live: "",
          type: "Career Gap"
        },
        {
          title: "Self-Discovery & Career Decision",
          description: "During my time abroad, I realized my true passion for computers and technology. I made the decision to return to my native country and pursue a career in development, knowing that I wanted to work with computers every day.",
          technologies: ["Self-Reflection", "Career Planning", "Technology Passion", "Goal Setting"],
          github: "",
          live: "",
          type: "Career Gap"
        }
      ]
    },
    {
      year: "2016-2019",
      title: "College Years & Academic Projects",
      description: "Built foundational programming skills through academic projects and learning core computer science concepts during college years",
      projects: [
        {
          title: "Educational Platform for Higher Studies",
          description: "Built a comprehensive educational platform using HTML, CSS, and PHP where students can find information about colleges and higher studies opportunities. Featured user registration, college listings, and educational resource management.",
          technologies: ["HTML", "CSS", "PHP", "MySQL", "User Authentication", "Database Management"],
          github: "",
          live: "",
          type: "Academic"
        },
        {
          title: "PC Builder Android App",
          description: "Developed an Android application in Java that allows users to build PCs from scratch and purchase configurations from available places like Amazon and Flipkart. Featured component selection, price comparison, and shopping integration.",
          technologies: ["Android", "Java", "XML", "SQLite", "API Integration", "E-commerce"],
          github: "",
          live: "",
          type: "Academic"
        }
      ]
    }
  ];

  // Filter timeline items based on showAllTimeline state
  const filteredTimelineItems = showAllTimeline 
    ? timelineItems 
    : timelineItems.filter(item => item.year === "2025");

  return (
    <section id="timeline" className="py-20 bg-transparent" aria-labelledby="timeline-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16">
            <h2 id="timeline-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
              My Development Journey
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {showAllTimeline 
                ? "A chronological timeline of my learning journey and project milestones" 
                : "Currently showing 2025 projects - my latest development work"
              }
            </p>
          </header>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-600 to-purple-700"></div>

            {filteredTimelineItems.map((item, yearIndex) => (
              <div key={yearIndex} className="relative mb-16">
                {/* Year Marker */}
                <div className="hidden md:block absolute left-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-black z-10"></div>
                
                {/* Year Label */}
                <div className="ml-0 md:ml-20 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span className="text-2xl font-bold text-purple-400">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                </div>

                {/* Projects Grid */}
                <div className="ml-0 md:ml-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {item.projects.map((project, projectIndex) => (
                    <Card key={projectIndex} className="group overflow-hidden hover:scale-105 transition-all duration-300 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/20 min-h-80 hover:min-h-96 flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between mb-1">
                          <Badge 
                            variant="outline" 
                            className={`text-xs px-2 py-0.5 ${
                              project.type === 'Professional' 
                                ? 'bg-green-900/30 text-green-300 border-green-600/50' 
                                : project.type === 'Learning'
                                ? 'bg-blue-900/30 text-blue-300 border-blue-600/50'
                                : project.type === 'AI Era'
                                ? 'bg-purple-900/30 text-purple-300 border-purple-600/50'
                                : project.type === 'Career Gap'
                                ? 'bg-gray-900/30 text-gray-300 border-gray-600/50'
                                : 'bg-orange-900/30 text-orange-300 border-orange-600/50'
                            }`}
                          >
                            {project.type}
                          </Badge>
                        </div>
                        <CardTitle 
                          className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors duration-300 leading-tight"
                          title={project.title}
                        >
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 pb-3 flex flex-col flex-1">
                        <p 
                          className="text-gray-300 mb-3 text-xs leading-relaxed flex-1"
                          title={project.description}
                        >
                          {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies.slice(0, 2).map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="text-xs bg-purple-900/30 text-purple-300 border-purple-600/50 hover:bg-purple-800/50 transition-colors duration-300 px-1.5 py-0.5 flex items-center gap-1"
                            >
                              {getTechIcon(tech)}
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 2 && (
                            <Badge 
                              variant="outline" 
                              className="text-xs bg-gray-700/30 text-gray-400 border-gray-600/50 px-1.5 py-0.5"
                            >
                              +{project.technologies.length - 2}
                            </Badge>
                          )}
                        </div>

                        {/* Action Buttons */}
                        {(project.github || project.live) && (
                          <div className="flex gap-1.5 mt-auto">
                            {project.github && (
                              <Button 
                                size="sm" 
                                variant="outline" 
                                asChild 
                                className="bg-transparent hover:bg-purple-600/20 border-purple-500/50 text-purple-300 hover:text-white transition-all duration-300 text-xs px-2 py-1 h-6"
                              >
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-3 h-3 mr-1" />
                                  Code
                                </a>
                              </Button>
                            )}
                            {project.live && (
                              <Button 
                                size="sm" 
                                asChild 
                                className="bg-purple-600 hover:bg-purple-700 text-white border-0 text-xs px-2 py-1 h-6"
                              >
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  Demo
                                </a>
                              </Button>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Big Rectangle Box with Tricky Question */}
          {!showAllTimeline && (
            <div className="mt-16 mb-8">
              <div className="bg-gradient-to-br from-purple-900/30 via-gray-800/50 to-purple-900/30 border-2 border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105">
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white mb-3">
                    My Journey Over The Years
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    My development journey has been quite a way... it&apos;s <span className="text-purple-300 font-semibold">BIG</span>! 
                    <br />
                    Want to see how I went from college projects to AI-powered applications?
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={() => setShowAllTimeline(true)}
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 px-6 py-2 w-fit"
                      >
                        <ChevronDown className="w-4 h-4 mr-2" />
                        Show Me The Full Journey
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="bg-transparent hover:bg-gray-600/20 border-gray-500/50 text-gray-300 hover:text-white transition-all duration-300 px-6 py-2 w-fit"
                      >
                        <a href="https://github.com/itsharipersonal" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View All Projects on GitHub
                        </a>
                      </Button>
                    </div>
                    <p className="text-xs text-gray-400">
                      From 2016 college days to 2025 AI era
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Message when timeline is expanded */}
          {showAllTimeline && (
            <div className="mt-16 mb-8">
              <div className="bg-gradient-to-br from-gray-800/50 via-purple-900/20 to-gray-800/50 border border-purple-500/30 rounded-xl p-6 shadow-lg">
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white mb-3">
                    Hope you like it! 😊
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    I know it&apos;s not that big, but it&apos;s kind of a big journey. There are many projects that were killed by the delete button... <span className="text-purple-300">feel sad now</span> 😢
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => {
                        setShowAllTimeline(false);
                        // Scroll to top of timeline section
                        document.getElementById('timeline')?.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }}
                      variant="outline"
                      size="sm"
                      className="bg-transparent hover:bg-purple-600/20 border-purple-500/50 text-purple-300 hover:text-white transition-all duration-300"
                    >
                      <ChevronUp className="w-4 h-4 mr-2" />
                      Show Only 2025
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="bg-transparent hover:bg-gray-600/20 border-gray-500/50 text-gray-300 hover:text-white transition-all duration-300"
                    >
                      <a href="https://github.com/itsharipersonal" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View All Projects on GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
