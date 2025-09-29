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
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Passionate full-stack developer with a love for creating innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile */}
            <div className="space-y-8">
              <Card className="p-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="/api/placeholder/96/96" alt="Hari Krishnan" />
                      <AvatarFallback className="text-2xl">HK</AvatarFallback>
                    </Avatar>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Hari Krishnan
                      </h3>
                      <p className="text-base text-blue-400 font-semibold mb-3">
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
                <Card className="p-6 text-center bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-blue-400 mb-1">5+</div>
                    <div className="text-xs text-white">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-blue-400 mb-1">50+</div>
                    <div className="text-xs text-white">Projects Completed</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="space-y-8">
              <Card className="p-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Technical Skills
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base font-semibold text-white mb-3">
                        Frontend Development
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.slice(0, 4).map((skill) => (
                          <Badge key={skill} variant="secondary" className="px-3 py-1">
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
                          <Badge key={skill} variant="secondary" className="px-3 py-1">
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
                          <Badge key={skill} variant="secondary" className="px-3 py-1">
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
