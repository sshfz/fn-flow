'use client';

import { ArrowRight, Play } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-white via-gray-50 to-fintech-accent/10 dark:from-gray-900 dark:via-gray-800 dark:to-fintech-primary/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-fintech-primary/10 dark:bg-fintech-primary/20 text-fintech-primary font-semibold text-sm">
              🚀 Now live in beta
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight">
              The Future of
              <span className="bg-gradient-to-r from-fintech-primary to-fintech-secondary bg-clip-text text-transparent"> Finance</span>
              <br />is Here
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Experience seamless financial management with AI-powered insights, real-time analytics, and bank-grade security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-fintech-primary hover:bg-fintech-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border-2 border-gray-300 dark:border-gray-600 hover:border-fintech-primary dark:hover:border-fintech-primary text-gray-700 dark:text-gray-300 hover:text-fintech-primary dark:hover:text-fintech-primary px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900 dark:text-white">
                  <AnimatedNumber value={99.9} suffix="%" />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900 dark:text-white">
                  <AnimatedNumber value={50000} prefix="$" suffix="+" />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Saved Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900 dark:text-white">
                  <AnimatedNumber value={10000} suffix="+" />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Happy Users</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Portfolio Overview</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">Total Balance</span>
                    <span className="text-2xl font-black text-gray-900 dark:text-white">
                      $<AnimatedNumber value={247580} />
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{"Today's Change"}</span>
                    <span className="text-green-500 font-bold">
                      +$<AnimatedNumber value={1247} /> (+2.4%)
                    </span>
                  </div>
                  
                  <div className="bg-gradient-to-r from-fintech-primary to-fintech-secondary rounded-xl h-32 flex items-center justify-center">
                    <span className="text-white font-bold">Interactive Chart</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-fintech-primary/20 to-fintech-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-fintech-accent/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}