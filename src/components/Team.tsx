
import React, { useEffect } from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    bio: "With over 20 years of experience in business consulting, Sarah leads our company with vision and expertise.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:example@company.com",
    },
  },
  {
    name: "Michael Chen",
    role: "Chief Strategy Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    bio: "Michael specializes in developing innovative strategies that drive growth and competitive advantage.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:example@company.com",
    },
  },
  {
    name: "Anita Patel",
    role: "Head of Digital",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    bio: "Anita leads our digital transformation practice, helping clients leverage technology effectively.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:example@company.com",
    },
  },
  {
    name: "David Wilson",
    role: "Financial Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    bio: "David brings extensive financial expertise and guides our clients through complex financial decisions.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:example@company.com",
    },
  },
];

const Team = () => {
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
    <section id="team" className="bg-company-gray">
      <div className="container-custom">
        <div className="section-title animate-on-scroll">
          <h2>Our Leadership Team</h2>
          <p>
            Meet the experts who guide our company and help our clients succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md group animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Member image */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-company-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social icons - only visible on hover */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href={member.social.linkedin}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-company-blue/80 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-company-blue/80 transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href={member.social.email}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-company-blue/80 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Member info */}
              <div className="p-6">
                <h4 className="mb-1 text-company-navy">{member.name}</h4>
                <p className="text-company-blue mb-4 font-medium">{member.role}</p>
                <p className="text-company-gray-dark text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
