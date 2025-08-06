export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const mockFeatures: Feature[] = [
  {
    id: '1',
    title: 'Bank-Grade Security',
    description: 'Military-grade encryption and multi-layer security protocols.',
    icon: 'shield'
  },
  {
    id: '2',
    title: 'Lightning Fast',
    description: 'Process transactions in milliseconds with optimized infrastructure.',
    icon: 'zap'
  },
  {
    id: '3',
    title: 'AI-Powered Analytics',
    description: 'Smart insights and predictions for better financial decisions.',
    icon: 'chart'
  }
];

export const mockStats: Stat[] = [
  { label: 'Active Users', value: 2.5, suffix: 'M+' },
  { label: 'Processed Volume', value: 15, prefix: '$', suffix: 'B+' },
  { label: 'Uptime SLA', value: 99.99, suffix: '%' },
  { label: 'Countries Served', value: 150, suffix: '+' }
];

export const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];