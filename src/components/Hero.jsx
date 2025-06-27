import React from "react";
import { Mail, Eye, ChevronDown } from "lucide-react";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image and overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 dark:from-blue-900/90 dark:to-purple-900/90"></div>
      </div>

      {/* Main container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row min-h-screen ">
        
        {/* Left Half: Full-height vertical oval image */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center md:justify-start">
          <a
            href="./Martins.jpg"
            target="_blank"
            rel="noopener noreferrer"
            title="View Full Profile Picture"
            className="h-full w-full"
          >
            <img
              src="./Martins.jpg"
              alt="Martins Jesurobo"
              className="h-full w-fited object-cover rounded-r-full md:rounded-r-[60%] rounded-l-none -ml-12"
              style={{ maskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
              objectPosition: "center left",}}
              
            />
          </a>
        </div>

        {/* Right Half: Text content */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6">
          <div className="text-center md:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-in-left">
              Martins Jesurobo
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-6 animate-slide-in-right">
              Cybersecurity Analyst | SOC Analyst | IT Manager | Cybersecurity Trainer
            </p>
            <p className="text-lg text-gray-200 max-w-3xl mb-8 animate-fade-in-up delay-300">
              Protecting digital assets and educating the next generation of cybersecurity professionals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center animate-fade-in-up delay-500">
              <button
                id="view"
                onClick={() => {
                  const view = document.getElementById("contact");
                  if (view) {
                    view.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Get In Touch</span>
              </button>
              <button
                id="vic"
                onClick={() => {
                  const vic = document.getElementById("projects");
                  if (vic) {
                    vic.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Eye className="h-5 w-5" />
                <span>View Projects</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;
