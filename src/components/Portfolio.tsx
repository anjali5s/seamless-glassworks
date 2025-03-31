
import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Strategy", "Digital", "Finance", "Marketing"];

const projects = [
  {
    title: "Financial Strategy Overhaul",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Complete financial restructuring for a Fortune 500 company, resulting in 30% cost reduction.",
    link: "#",
  },
  {
    title: "E-Commerce Transformation",
    category: "Digital",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Digital transformation project for a retail chain, boosting online sales by 200%.",
    link: "#",
  },
  {
    title: "Market Expansion Strategy",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Developed and executed a market entry plan for an international expansion.",
    link: "#",
  },
  {
    title: "Brand Repositioning",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Complete brand repositioning for a legacy brand, resulting in 45% increased market perception.",
    link: "#",
  },
  {
    title: "Supply Chain Optimization",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Streamlined operations and improved efficiency across the entire supply chain network.",
    link: "#",
  },
  {
    title: "Customer Experience Platform",
    category: "Digital",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Developed a comprehensive digital platform focused on enhancing customer experience.",
    link: "#",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Filter projects when category changes
  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === filter)
      );
    }
  }, [filter]);

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
    <section id="portfolio">
      <div className="container-custom">
        <div className="section-title animate-on-scroll">
          <h2>Our Portfolio</h2>
          <p>
            Explore some of our recent projects and success stories across various industries.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === category
                  ? "bg-company-blue text-white"
                  : "bg-gray-100 text-company-navy hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-company-navy to-transparent opacity-70" />
              </div>

              {/* Project info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-company-blue/80 text-white rounded-full mb-3">
                  {project.category}
                </span>
                <h4 className="text-white mb-2">{project.title}</h4>
                <p className="text-white/80 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-company-blue-light hover:text-white transition-colors"
                >
                  View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
