import React from 'react';
import { Facebook, Linkedin, Github, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-[#0d1b2a] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="text-3xl font-bold text-gradient mb-6">
            CODEGG
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#3a8f94] transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 CODEGG. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}