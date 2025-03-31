
import React, { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-company-blue/5 to-transparent -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-company-blue/10 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-company-blue/5 rounded-full filter blur-2xl -z-10" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <div className="inline-block rounded-full bg-company-blue/10 px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-company-blue">
                Professional Business Solutions
              </span>
            </div>
            <h1 className="mb-6 text-company-navy">
              Transform Your Business with Strategic Solutions
            </h1>
            <p className="text-lg md:text-xl text-company-gray-dark mb-8 max-w-xl">
              We help businesses like yours grow through innovative strategy, digital transformation, and actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="btn-secondary">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-on-scroll delay-300">
            {/* Hero image with subtle shadow and border */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Business team collaborating"
                className="w-full h-auto"
                loading="eager"
              />
              
              {/* Stats card floating on the image */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 max-w-xs">
                <div className="flex items-start gap-4">
                  <div className="bg-company-blue/10 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-company-blue">
                      <path d="M12 20V10"/>
                      <path d="M18 20V4"/>
                      <path d="M6 20v-4"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-company-gray-dark">Success Rate</p>
                    <h3 className="text-2xl font-bold text-company-navy">98%</h3>
                    <p className="text-xs text-company-gray-dark">In the last 12 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted by logos */}
        <div className="mt-20 animate-on-scroll">
          <p className="text-center text-company-gray-dark font-medium mb-8">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div className="h-8 w-24 bg-company-gray-dark/20 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
