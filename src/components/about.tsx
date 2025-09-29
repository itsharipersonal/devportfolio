"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "MongoDB", "AWS", "Docker", "Git", "Tailwind CSS", "GraphQL"
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
              <Card className="p-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex-1">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 flex-1">
                    <Avatar className="w-24 h-24 flex-shrink-0">
                      <AvatarImage src="/api/placeholder/96/96" alt="Hari Krishnan" />
                      <AvatarFallback className="text-2xl">HK</AvatarFallback>
                    </Avatar>
                    <div className="text-center sm:text-left flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Hari Krishnan
                      </h3>
                      <p className="text-base font-semibold mb-3 text-white" >
                        Full Stack Developer
                      </p>
                      <p className="text-white leading-relaxed">
                        I'm a passionate developer with 5+ years of experience building 
                        scalable web applications. I love turning complex problems into 
                        simple, beautiful, and intuitive solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center bg-white/10 backdrop-blur-md border border-white/20 shadow-xl h-24 flex items-center justify-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold mb-1 text-white">5+</div>
                    <div className="text-xs text-white">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center bg-white/10 backdrop-blur-md border border-white/20 shadow-xl h-24 flex items-center justify-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold mb-1 text-white">50+</div>
                    <div className="text-xs text-white">Projects Completed</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="flex flex-col">
              <Card className="p-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Technical Skills
                  </h3>
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="text-base font-semibold text-white mb-3">
                        Frontend Development
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.slice(0, 4).map((skill) => (
                          <Badge key={skill} variant="secondary" className="px-3 py-1 text-white" style={{backgroundColor: '#420084', borderColor: '#420084'}}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-base font-semibold text-white mb-3">
                        Backend Development
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.slice(4, 8).map((skill) => (
                          <Badge key={skill} variant="secondary" className="px-3 py-1 text-white" style={{backgroundColor: '#420084', borderColor: '#420084'}}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-base font-semibold text-white mb-3">
                        DevOps & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.slice(8).map((skill) => (
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
