import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';


function App() {
  
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const projects = [
    {
      title: "Cybersecurity Awareness Podcast",
      description: "Hosted weekly episodes simplifying cybersecurity concepts.",
      technologies: ["Adobe Audition", "Anchor", "Canva"],
      role: "Host, Editor",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1000&q=80",
      link: "#",
    },
    {
      title: "Company Website Optimization",
      description: "Redesigned site and implemented server security.",
      technologies: ["Windows Server", "DNS", "IP Camera Integration"],
      role: "Lead Administrator",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
      link: "#",
    },
  ];

  const experience = [
    { title: "Cybersecurity Specialist", company: "TechCorp Inc.", duration: "2021–Present", description: "Developing security protocols and risk assessments." },
    { title: "Network Administrator", company: "SecureNet Services", duration: "2019–2021", description: "Built and managed secure internal network infrastructure." },
  ];

  const skills = ["Pen Testing", "Networking", "ReactJS", "TailwindCSS", "Cyber Awareness", "Data Protection"];
  
  const testimonials = [
    { content: "Excellent work on cybersecurity architecture!", author: "John Doe, CTO" },
    { content: "A true expert in digital security practices.", author: "Sarah Lee, Manager" },
  ];

  return (
    <div className="App">
      <Navbar navItems={navItems} />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Experience experience={experience} />
      <Skills skills={skills} />
      <Testimonials testimonials={testimonials} />
      <Contact email="youremail@example.com" phone="+1234567890" />
      <Footer />
    </div>
  );
}

export default App;
