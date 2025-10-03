import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
  id?: string;
}

export default function Section({ children, className = '', background = 'white', id }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-purple-50 via-white to-pink-50'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
