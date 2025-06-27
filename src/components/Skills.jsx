import React from "react";
import { Shield, Server, Wifi, Monitor, ArrowRight } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Cybersecurity",
      items: ["Threat Detection", "SOC Analysis", "Pen Testing", "Malware Analysis", "Incident Response"],
    },
    {
      category: "Systems",
      items: ["Windows Server", "Active Directory", "Linux Administration", "PowerShell Scripting", "Virtualization"],
    },
    {
      category: "Networking",
      items: ["TCP/IP", "Firewall Configuration", "Network Monitoring", "Routing & Switching", "VPN Management"],
    },
    {
      category: "Tools",
      items: ["Wireshark", "Splunk", "Nmap", "Metasploit", "Burp Suite"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across cybersecurity, systems administration, and networking
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {skillCategory.category === "Cybersecurity" && <Shield className="h-8 w-8 text-white" />}
                  {skillCategory.category === "Systems" && <Server className="h-8 w-8 text-white" />}
                  {skillCategory.category === "Networking" && <Wifi className="h-8 w-8 text-white" />}
                  {skillCategory.category === "Tools" && <Monitor className="h-8 w-8 text-white" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {skillCategory.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
