"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end">
      {/* Unicorn.studio Interactive Background */}
      <div 
        className="absolute inset-0 z-0"
        aria-label="Unicorn.studio interactive background"
      >
        <div 
          data-us-project="ChZ6zVrLinVNC2HUFIBo" 
          style={{width: "100%", height: "100%"}}
        ></div>
      </div>

      {/* Hero Content - Positioned at lower left with generous white space */}
      <div className="relative z-10 w-full h-full flex items-end">
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-4xl">
            {/* Main Headline - Lower left alignment with generous spacing */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-tight">
              HARIRKRISHNAN
              <br />
              <span className="text-blue-600">A FULL STACK DEV</span>
            </h1>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-12">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Try it out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
