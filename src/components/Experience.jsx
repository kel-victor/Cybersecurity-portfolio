import React from "react";
import { Calendar, Shield, CheckCircle } from "lucide-react";

const experienceData = [
  {
    title: "Certified Cyber Security Assistant Tutor",
    company: "Tech Edu",
    years: "2024–Present",
    location: "Edo State, Nigeria",
    duties: [
      "Delivered professional cybersecurity training for aspiring analysts.",
      "Resolved critical infrastructure issues (domains, servers, CCTV).",
      "Designed interactive learning platforms.",
      "Mentored over 50 students in hands-on cybersecurity skills.",
    ],
  },
];

const educationData = [
  {
    title: "B.Sc. Computer Science",
    institution: "University of Benin",
    years: "2019–2023",
    description:
      "Relevant coursework: Cybersecurity, System Architecture, and Networking.",
  },
  {
    title: "Cybersecurity Certification",
    institution: "Tech Edu",
    years: "2023",
    description:
      "Completed intensive cybersecurity training focusing on threat detection, SIEM, and vulnerability assessment.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Experience */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400 flex items-center">
              <Calendar className="h-6 w-6 mr-2" />
              Work Experience
            </h3>

            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company} • {exp.years}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {exp.location}
                      </p>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300 mt-3">
                        {exp.duties.map((duty, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                            {duty}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400 flex items-center">
              <Calendar className="h-6 w-6 mr-2" />
              Education
            </h3>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {edu.institution} | {edu.years}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
