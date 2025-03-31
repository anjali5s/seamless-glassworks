
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    // Initialize animation observers (this could also be done in each component)
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

  // Schema.org structured data for better SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Apex Solutions",
    "url": "https://www.apexsolutions.com",
    "logo": "https://www.apexsolutions.com/logo.png",
    "description": "Professional business services to help your company grow, innovate, and succeed in today's competitive market.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 Business Avenue, Suite 500",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94107",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/apexsolutions",
      "https://www.twitter.com/apexsolutions",
      "https://www.linkedin.com/company/apexsolutions",
      "https://www.instagram.com/apexsolutions"
    ]
  };

  return (
    <>
      {/* Schema.org JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
