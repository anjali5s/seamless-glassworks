
import React, { useEffect } from "react";
import { Check, Users, BarChart, Award } from "lucide-react";

const features = [
  {
    title: "Client-Focused Approach",
    description: "We prioritize understanding your specific needs and goals to deliver tailored solutions.",
    icon: Users,
  },
  {
    title: "Data-Driven Strategy",
    description: "Our recommendations are backed by thorough research and analytics to ensure success.",
    icon: BarChart,
  },
  {
    title: "Proven Results",
    description: "With over 500+ successful projects, our track record speaks for itself.",
    icon: Award,
  },
];

const About = () => {
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
    <section id="about" className="bg-company-gray">
      <div className="container-custom">
        <div className="section-title animate-on-scroll">
          <h2>About Our Company</h2>
          <p>
            We've been helping businesses achieve their goals for over 15 years, 
            providing strategic guidance and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <h3 className="text-company-navy mb-6">
              A Dedicated Team Working For Your Success
            </h3>
            <p className="text-company-gray-dark mb-6">
              Founded in 2008, Apex Solutions has grown from a small consultancy to a 
              comprehensive business services provider with clients around the globe.
            </p>
            <p className="text-company-gray-dark mb-8">
              Our mission is to empower businesses with the strategies, insights, and 
              tools they need to thrive in an ever-changing marketplace. We combine 
              industry expertise with innovative thinking to deliver solutions that 
              drive real results.
            </p>

            <ul className="space-y-4">
              {["Dedicated experts in multiple industries", "Customized solutions for unique challenges", "Long-term partnerships built on trust"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-company-blue" />
                  </div>
                  <span className="ml-3 text-company-gray-dark">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative animate-on-scroll delay-300">
            {/* About image with decorative elements */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Our team collaborating"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 -left-4 w-24 h-24 bg-company-blue rounded-lg -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-company-navy rounded-lg -z-10" />
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-company-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-company-blue" />
              </div>
              <h4 className="text-company-navy mb-4">{feature.title}</h4>
              <p className="text-company-gray-dark">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
