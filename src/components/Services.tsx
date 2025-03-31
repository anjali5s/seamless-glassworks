
import React, { useEffect } from "react";
import { ArrowRight, Lightbulb, Presentation, TrendingUp, BarChart3, Users2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Lightbulb,
    title: "Strategy Development",
    description: "Develop comprehensive business strategies aligned with your goals and market conditions.",
    link: "#services",
  },
  {
    icon: Presentation,
    title: "Digital Transformation",
    description: "Leverage technology to streamline operations and enhance customer experiences.",
    link: "#services",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Data-driven marketing strategies to expand your customer base and market share.",
    link: "#services",
  },
  {
    icon: BarChart3,
    title: "Financial Advisory",
    description: "Expert guidance on financial planning, investment, and risk management.",
    link: "#services",
  },
  {
    icon: Users2,
    title: "Organizational Design",
    description: "Optimize your organization structure to improve efficiency and collaboration.",
    link: "#services",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    description: "Identify and mitigate business risks with comprehensive assessment and planning.",
    link: "#services",
  },
];

const Services = () => {
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
    <section id="services" className="bg-company-navy text-white">
      <div className="container-custom">
        <div className="section-title animate-on-scroll">
          <h2 className="text-white">Our Services</h2>
          <p className="text-company-gray">
            Comprehensive business solutions tailored to your specific needs and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-company-navy-light p-8 rounded-xl hover:bg-company-blue/10 transition-colors duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-company-blue/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-company-blue-light" />
              </div>
              <h4 className="text-white mb-4">{service.title}</h4>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <a
                href={service.link}
                className="inline-flex items-center text-company-blue-light hover:text-white transition-colors"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-company-blue to-company-blue-light rounded-xl p-8 md:p-12 animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white mb-4">Ready to Transform Your Business?</h3>
              <p className="text-white/80 mb-0 lg:mb-0">
                Schedule a consultation with our experts to discuss your specific needs and discover how we can help you achieve your business goals.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Button className="bg-white text-company-blue hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-colors duration-200">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
