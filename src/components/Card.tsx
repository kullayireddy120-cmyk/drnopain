import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({ children, className = '', hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, boxShadow: '0 20px 40px rgba(126, 40, 125, 0.15)' } : {}}
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
