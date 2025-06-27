import React from "react";
import {
  Shield,
  Linkedin,
  Facebook,
  MessageCircle,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          
          {/* Branding */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">Martins Jesurobo</span>
          </div>

          <p className="text-gray-400 mb-6">
            Cybersecurity Professional | Educator | Consultant
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {[
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/martins-jesurobo-658ba6309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                label: "LinkedIn",
              },
              {
                icon: Facebook,
                href: "https://www.facebook.com/share/16XSJwUCYS/?mibextid=wwXIfr",
                label: "Facebook",
              },
              {
                icon: MessageCircle,
                href: " https://wa.me/2348106200721",
                label: "WhatsApp",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/remymaten_?igsh=MTNkNnU3Mm5pNXp3Yg%3D%3D&utm_source=qr",
                label: "Instagram",
              },
              {
                icon: Twitter,
                href: "#",
                label: "Twitter",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2024 Martins Jesurobo. All rights reserved. | Securing the digital future, one system at a time.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;