"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, Building } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Centre for Teacher Accreditation (CENTA) Pvt. Ltd.",
      position: "Senior Technology Associate (Promoted from Associate, Technology and Data Analytics)",
      location: "Bangalore, India",
      duration: "Sep 2023 - Present",
      description: "Promoted within 1 year for outstanding performance and leadership in technology initiatives. Developing dynamic, responsive web pages for high-profile events and redesigning company website to enhance user experience and engagement.",
      achievements: [
        "Promoted within 1 year for outstanding performance and leadership in technology initiatives",
        "Developed dynamic, responsive web pages for high-profile events using Next.js, React.js, TailwindCSS, and Framer Motion, increasing user engagement by 25%",
        "Redesigned company website from Figma prototypes, enhancing UX/UI and reducing bounce rate by 15%",
        "Performed rigorous manual testing on web and mobile applications, identifying and resolving over 100 critical bugs",
        "Implemented SEO and accessibility improvements, boosting web traffic by 30% and improving customer retention"
      ],
      technologies: ["Next.js", "React.js", "TailwindCSS", "Framer Motion", "Figma", "SEO"]
    },
    {
      company: "Brototype",
      position: "Software Engineer Intern",
      location: "Kochi, Kerala, India",
      duration: "Sep 2022 - Aug 2023",
      description: "Built scalable web applications and platforms using modern technologies including TypeScript, Next.js, Node.js, and cloud deployment solutions.",
      achievements: [
        "Built a scalable event ticket booking platform using TypeScript, Next.js, Node.js, and TailwindCSS, deployed with Docker and Kubernetes for high availability",
        "Developed a social media application with Next.js and TypeScript, leveraging server-side rendering to reduce load times by 40%",
        "Created a fully functional e-commerce platform using Handlebars, Bootstrap, and Node.js, integrating payment gateways and secure authentication"
      ],
      technologies: ["TypeScript", "Next.js", "Node.js", "TailwindCSS", "Docker", "Kubernetes", "Handlebars", "Bootstrap"]
    },
    {
      company: "Camping World",
      position: "Sales Manager",
      location: "Barka, Oman",
      duration: "Sep 2020 - May 2023",
      description: "Managed end-to-end sales operations and customer engagement strategies, achieving significant revenue growth and customer satisfaction improvements.",
      achievements: [
        "Managed end-to-end sales operations, achieving a 20% increase in monthly revenue through targeted customer engagement strategies",
        "Learned Arabic to improve client communication, resulting in a 15% increase in customer satisfaction scores",
        "Optimized inventory management by collaborating with purchasing teams, reducing stock discrepancies by 10%"
      ],
      technologies: ["Sales Management", "Customer Relations", "Inventory Management", "Arabic Language"]
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
            <p className="text-lg text-white max-w-3xl mx-auto">
              My professional journey and key achievements
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none">
                <CardContent className="p-8 relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Timeline indicator */}
                    <div className="flex-shrink-0 lg:mt-1">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{backgroundColor: '#420084'}}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-5">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white leading-tight mb-2">{exp.position}</h3>
                          <div className="flex items-center gap-2 font-semibold text-white mb-2">
                            <Building className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col lg:items-end gap-2 text-xs text-white lg:min-w-[200px]">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span>{exp.location}</span>
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
                        <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-white flex items-start gap-3">
                              <span className="mt-1.5 text-white text-xs">•</span>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs text-white px-2 py-1" style={{backgroundColor: '#420084', borderColor: '#420084'}}>
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
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none">
              <CardContent className="p-8 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#420084'}}>
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="font-semibold text-white mb-1">PMSA PTM (Kerala University)</p>
                    <p className="text-white mb-2">Aug 2016 - Jan 2020</p>
                    <p className="text-sm text-white leading-relaxed">
                      GPA: 3.8/4.0 | Kollam, Kerala, India | Mastered core concepts in C, Object-Oriented Programming, Data Structures, Operating Systems, and Linux
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
