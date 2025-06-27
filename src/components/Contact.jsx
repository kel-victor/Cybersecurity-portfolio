import React from "react"; 
import {
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  MessageCircle,
  Instagram,
  Twitter,
  Download,
  Users,
} from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.querySelector('input[placeholder="Your first name"]').value;
    const lastName = form.querySelector('input[placeholder="Your last name"]').value;
    const email = form.querySelector('input[placeholder="your.email@example.com"]').value;
    const subject = form.querySelector('input[placeholder="What\'s this about?"]').value;
    const message = form.querySelector('textarea[placeholder="Tell me about your project or inquiry..."]').value;

    const whatsappNumber = "2348106200721"; // Your WhatsApp Number
        const whatsappMessage = `Hello! 👋
    
    *Name:* ${firstName} ${lastName}
    *Email:* ${email}
    *Subject:* ${subject}
    *Message:* ${message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, "_blank");
  };
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to secure your digital assets or learn cybersecurity? Let&apos;s connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <a
                    href="mailto:martinsyougwisz@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    martinsyougwisz@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Edo State, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Connect With Me</h4>
              <div className="flex space-x-4">
                {[ 
                  { icon: Linkedin, href: "https://www.linkedin.com/in/martins-jesurobo-658ba6309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn" },
                  { icon: Facebook, href: "https://www.facebook.com/share/16XSJwUCYS/?mibextid=wwXIfr", label: "Facebook" },
                  { icon: MessageCircle, href: "https://wa.me/2348106200721", label: "WhatsApp" },
                  { icon: Instagram, href: "https://www.instagram.com/remymaten_?igsh=MTNkNnU3Mm5pNXp3Yg%3D%3D&utm_source=qr", label: "Instagram" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-8 space-y-4">
              <a
                href="/Martins Jesurobo R.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="w-fit bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download CV</span>
              </a>
              <a
                href="https://wa.me/2348106200721"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Users className="h-5 w-5" />
                <span>Book Consultation</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400">Send Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;