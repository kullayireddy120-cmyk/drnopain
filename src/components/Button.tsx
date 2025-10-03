import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-gradient-to-r from-[#7E287D] to-[#A34D9D] text-white hover:shadow-lg hover:shadow-purple-500/50 focus:ring-purple-500',
    secondary: 'bg-white text-[#7E287D] border-2 border-[#7E287D] hover:bg-[#7E287D] hover:text-white focus:ring-purple-500',
    outline: 'bg-transparent text-[#7E287D] border-2 border-[#7E287D] hover:bg-[#7E287D] hover:text-white focus:ring-purple-500'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
