"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Coffee, Zap } from "lucide-react";

export default function VibeCoding() {
  const timelineItems = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "The Developer's Dilemma",
      content: "Vibe coding - that magical state where everything just flows.",
      type: "intro"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Hallucinations",
      content: "Vibe coding is good if AI didn't hallucinate themselves and try to hallucinate as smile face 😊",
      type: "thought"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Morning Energy",
      content: "Morning me: best script writer in the world with high-quality prompts",
      type: "thought"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "End of Day Reality",
      content: "Evening me: 'asd the section related what i said earlier' - pure gibberish",
      type: "thought"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "The Bottom Line",
      content: "Vibe coding is real but messy. That's the beauty of development - it's human.",
      type: "conclusion",
      tags: ["#VibeCoding", "#AIHallucinations", "#DeveloperLife", "#PromptEngineering"]
    }
  ];


  return (
    <section id="vibe-coding" className="py-20 bg-transparent" aria-labelledby="vibe-coding-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16">
            <h2 id="vibe-coding-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
              My Take on Vibe Coding
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              A developer&apos;s perspective on AI-assisted coding and the daily struggle with prompt quality
            </p>
          </header>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-5.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold border-4 border-gray-900" style={{backgroundColor: '#420084'}}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1">
                    <Card className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none">
                      <CardContent className="p-6 relative z-10">
                        <div className="space-y-3">
                          <h3 className="text-base font-bold text-white">{item.title}</h3>
                          <p className="text-sm text-white/90 leading-relaxed">{item.content}</p>
                          
                          {/* Tags for conclusion */}
                          {item.type === "conclusion" && item.tags && (
                            <div className="flex flex-wrap gap-1 mt-3">
                              {item.tags.map((tag: string, tagIndex: number) => (
                                <Badge key={tagIndex} variant="secondary" className="text-sm text-white px-2 py-0.5" style={{backgroundColor: '#420084', borderColor: '#420084'}}>
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
