'use client';

import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-fintech-primary to-fintech-secondary rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-gray-900 dark:text-white">FinanceFlow</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-fintech-primary dark:hover:text-fintech-primary font-semibold transition-colors duration-200">Features</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-fintech-primary dark:hover:text-fintech-primary font-semibold transition-colors duration-200">Pricing</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-fintech-primary dark:hover:text-fintech-primary font-semibold transition-colors duration-200">About</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-fintech-primary dark:hover:text-fintech-primary font-semibold transition-colors duration-200">Contact</a>
            <ThemeToggle />
            <button className="bg-fintech-primary hover:bg-fintech-primary/90 text-white px-6 py-2 rounded-lg font-bold transition-all duration-200 hover:shadow-lg hover:scale-105">
              Get Started
            </button>
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-fintech-primary transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-fintech-primary font-semibold transition-colors duration-200">Features</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-fintech-primary font-semibold transition-colors duration-200">Pricing</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-fintech-primary font-semibold transition-colors duration-200">About</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-fintech-primary font-semibold transition-colors duration-200">Contact</a>
              <button className="bg-fintech-primary hover:bg-fintech-primary/90 text-white px-6 py-2 rounded-lg font-bold transition-all duration-200 hover:shadow-lg w-fit">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}