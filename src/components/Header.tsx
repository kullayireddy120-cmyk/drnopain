import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Experience', href: '#experience' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#7E287D] to-[#A34D9D] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-[#7E287D] to-[#A34D9D] bg-clip-text text-transparent">
                  NoPain Dental
                </h2>
                <p className="text-xs text-gray-600">Lounge</p>
              </div>
            </a>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 hover:text-[#7E287D] transition-colors duration-300 font-medium"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+918012345678" className="flex items-center text-[#7E287D] hover:text-[#A34D9D] transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">+91 80123 45678</span>
            </a>
            <Button variant="primary" size="sm">
              Book Appointment
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-gray-700 hover:text-[#7E287D] transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t space-y-3">
                <a href="tel:+918012345678" className="flex items-center text-[#7E287D]">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">+91 80123 45678</span>
                </a>
                <Button variant="primary" size="md" fullWidth>
                  Book Appointment
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
