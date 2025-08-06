'use client';

import AnimatedNumber from './AnimatedNumber';

const stats = [
  { value: 2.5, suffix: "M+", label: "Active Users" },
  { value: 15, suffix: "B+", prefix: "$", label: "Processed Volume" },
  { value: 99.99, suffix: "%", label: "Uptime SLA" },
  { value: 150, suffix: "+", label: "Countries Served" },
  { value: 500, suffix: "ms", label: "Avg Response Time" },
  { value: 24, suffix: "/7", label: "Support Available" }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-fintech-primary to-fintech-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-white">
            Trusted by Millions
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join the growing community of users who trust FinanceFlow with their financial future.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-white mb-2">
                {stat.prefix}<AnimatedNumber value={stat.value} />{stat.suffix}
              </div>
              <div className="text-white/80 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}