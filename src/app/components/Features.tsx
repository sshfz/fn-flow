'use client';

import { Shield, Zap, BarChart3, Smartphone, Globe, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Military-grade encryption and multi-layer security protocols to protect your financial data."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process transactions and get insights in milliseconds with our optimized infrastructure."
  },
  {
    icon: BarChart3,
    title: "AI-Powered Analytics",
    description: "Smart insights and predictions to help you make better financial decisions."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Seamless experience across all devices with our responsive design and native apps."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with financial institutions worldwide and manage multiple currencies."
  },
  {
    icon: Lock,
    title: "Privacy Focused",
    description: "Your data stays yours. We never share or sell your personal information."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white">
            Built for the
            <span className="bg-gradient-to-r from-fintech-primary to-fintech-secondary bg-clip-text text-transparent"> Modern World</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience the next generation of financial technology with features designed for today's digital economy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-750 border border-transparent hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-fintech-primary to-fintech-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}