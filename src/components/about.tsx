"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL", "MongoDB",
    "Node.js", "Express.js", "Next.js", "React.js", "TailwindCSS", "Bootstrap",
    "Framer Motion", "Docker", "Kubernetes", "AWS (EC2, S3)", "Hasura", "GraphQL",
    "Figma", "Adobe Photoshop", "Git", "Webpack", "Vercel", "Jira"
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Passionate full-stack developer with a love for creating innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Column - Profile */}
            <div className="flex flex-col gap-8 h-full">
              <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex-1 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none">
                <CardContent className="p-0 h-full flex flex-col relative z-10">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 flex-1">
                    <Avatar className="w-32 h-32 flex-shrink-0">
                      <AvatarImage 
                        src="/profile.png" 
                        alt="Hari Krishnan" 
                        className="object-cover scale-110"
                      />
                      <AvatarFallback className="text-3xl">HK</AvatarFallback>
                    </Avatar>
                    <div className="text-center sm:text-left flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Harikrishnan DS
                      </h3>
                      <p className="text-base font-semibold mb-3 text-white" >
                        Senior Technology Associate & Full Stack Developer
                      </p>
                      <p className="text-white leading-relaxed">
                        Passionate full-stack developer with expertise in modern web technologies. 
                        I specialize in building scalable applications using React, Next.js, and cloud technologies. 
                        Currently working as Senior Technology Associate at CENTA, with a strong foundation in 
                        Computer Science and certifications in networking and cybersecurity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl h-24 flex items-center justify-center relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none">
                  <CardContent className="p-0 relative z-10">
                    <div className="text-2xl font-bold mb-1 text-white">3+</div>
                    <div className="text-xs text-white">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl h-24 flex items-center justify-center relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none">
                  <CardContent className="p-0 relative z-10">
                    <div className="text-2xl font-bold mb-1 text-white">50+</div>
                    <div className="text-xs text-white">Projects Completed</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="flex flex-col">
              <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl h-full relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none">
                <CardContent className="p-0 h-full flex flex-col relative z-10">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Technical Skills
                  </h3>
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="text-base font-semibold text-white mb-3">
                        Programming Languages
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.slice(0, 6).map((skill) => (
                          <Badge key={skill} variant="secondary" className="px-3 py-1 text-white" style={{backgroundColor: '#420084', borderColor: '#420084'}}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-base font-semibold text-white mb-3">
                        Technologies & Frameworks
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.slice(6, 12).map((skill) => (
                          <Badge key={skill} variant="secondary" className="px-3 py-1 text-white" style={{backgroundColor: '#420084', borderColor: '#420084'}}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-base font-semibold text-white mb-3">
                        Tools & Soft Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.slice(12).map((skill) => (
                          <Badge key={skill} variant="secondary" className="px-3 py-1 text-white" style={{backgroundColor: '#420084', borderColor: '#420084'}}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
