'use client';

import { Zap, Twitter, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'API Docs'],
  Company: ['About Us', 'Careers', 'Blog', 'Press Kit'],
  Support: ['Help Center', 'Contact Us', 'Status Page', 'Community'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Compliance', 'GDPR']
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-fintech-primary to-fintech-secondary rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black">FinanceFlow</span>
            </div>
            
            <p className="text-gray-400 leading-relaxed max-w-md">
              Empowering the next generation of financial technology with secure, fast, and intelligent solutions for modern businesses and individuals.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-fintech-primary rounded-lg flex items-center justify-center transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-fintech-primary rounded-lg flex items-center justify-center transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-fintech-primary rounded-lg flex items-center justify-center transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 FinanceFlow. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 sm:mt-0">
            Made with ❤️ for the future of finance
          </p>
        </div>
      </div>
    </footer>
  );
}