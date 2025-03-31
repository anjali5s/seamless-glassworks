
import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
      valid = false;
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        
        // Show success message
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });
      }, 1500);
    }
  };

  return (
    <section id="contact">
      <div className="container-custom">
        <div className="section-title animate-on-scroll">
          <h2>Get In Touch</h2>
          <p>
            Have questions or ready to start your next project? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <div className="animate-on-scroll">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-company-navy mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-company-gray-dark mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.name ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-company-blue/50`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-company-gray-dark mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.email ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-company-blue/50`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-company-gray-dark mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-company-blue/50"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-company-gray-dark mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-company-blue/50"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Business Consultation">Business Consultation</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-company-gray-dark mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.message ? "border-red-500" : "border-gray-200"
                    } focus:outline-none focus:ring-2 focus:ring-company-blue/50`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact information */}
          <div className="animate-on-scroll delay-300">
            <div className="mb-8">
              <h3 className="text-company-navy mb-6">Contact Information</h3>
              <p className="text-company-gray-dark mb-8">
                Have questions about our services or want to discuss your specific needs? 
                Reach out to us using any of the contact methods below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-company-blue/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-company-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-company-navy mb-1">Our Location</h4>
                    <p className="text-company-gray-dark">
                      1234 Business Avenue, Suite 500<br />
                      San Francisco, CA 94107, USA
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-company-blue/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-company-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-company-navy mb-1">Call Us</h4>
                    <p className="text-company-gray-dark">
                      +1 (555) 123-4567<br />
                      Monday - Friday, 9am - 6pm PST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-company-blue/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-company-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-company-navy mb-1">Email Us</h4>
                    <p className="text-company-gray-dark">
                      info@apexsolutions.com<br />
                      support@apexsolutions.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map or additional content */}
            <div className="mt-12 rounded-xl overflow-hidden h-80 bg-gray-200 shadow-md">
              {/* Placeholder for map - in a real site, you would add an actual map here */}
              <div className="w-full h-full flex items-center justify-center bg-company-gray">
                <div className="text-center p-8">
                  <MapPin className="h-10 w-10 text-company-blue mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-company-navy mb-2">Our Office Location</h4>
                  <p className="text-company-gray-dark">
                    Interactive map would be displayed here in the production version
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
