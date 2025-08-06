'use client';

import { ArrowRight, Check } from 'lucide-react';

const benefits = [
  "14-day free trial",
  "No setup fees",
  "Cancel anytime",
  "24/7 support"
];

export default function CTA() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-fintech-primary to-fintech-secondary bg-clip-text text-transparent"> Financial Future?</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of users who have already revolutionized their financial management with FinanceFlow.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <Check className="w-5 h-5 text-green-500" />
                <span className="font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-fintech-primary hover:bg-fintech-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2">
              <span>Start Your Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="border-2 border-gray-300 dark:border-gray-600 hover:border-fintech-primary dark:hover:border-fintech-primary text-gray-700 dark:text-gray-300 hover:text-fintech-primary dark:hover:text-fintech-primary px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-500">
            No credit card required • Setup in under 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
}