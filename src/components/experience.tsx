"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, Building } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: "Leading development of enterprise-scale web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Led a team of 5 developers in building a microservices architecture",
        "Improved application performance by 40% through optimization",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes", "PostgreSQL"]
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      location: "Remote",
      duration: "2020 - 2022",
      description: "Developed and maintained multiple web applications from concept to deployment. Worked closely with product managers and designers to deliver user-centric solutions.",
      achievements: [
        "Built a real-time chat application with 10,000+ daily active users",
        "Developed RESTful APIs handling 1M+ requests per day",
        "Implemented automated testing increasing code coverage to 90%"
      ],
      technologies: ["Next.js", "TypeScript", "MongoDB", "Redis", "Socket.io", "Vercel"]
    },
    {
      company: "Digital Agency Pro",
      position: "Frontend Developer",
      location: "New York, NY",
      duration: "2019 - 2020",
      description: "Created responsive and interactive web experiences for various clients. Collaborated with design teams to implement pixel-perfect UI components.",
      achievements: [
        "Developed 20+ client websites with 100% mobile responsiveness",
        "Reduced page load times by 50% through optimization",
        "Implemented accessibility standards achieving WCAG 2.1 AA compliance"
      ],
      technologies: ["React", "Vue.js", "Sass", "Webpack", "Figma", "Jest"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              My professional journey and key achievements
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Timeline indicator */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-lg font-bold text-white">{exp.position}</h3>
                          <div className="flex items-center gap-2 text-blue-400 font-semibold">
                            <Building className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1 text-xs text-white">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Description */}
                      <p className="text-white leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-xs text-white flex items-start gap-2">
                              <span className="text-blue-600 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-white mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-white mb-8 text-center">
              Education
            </h3>
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Building className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-blue-400 font-semibold">University of Technology</p>
                    <p className="text-white">2015 - 2019</p>
                    <p className="text-xs text-white mt-1">
                      Graduated Magna Cum Laude with focus on Software Engineering and Data Structures
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
