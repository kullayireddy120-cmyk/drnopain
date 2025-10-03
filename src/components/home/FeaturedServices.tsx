import { motion } from 'framer-motion';
import { Heart, Smile, Droplet, Sun, Baby, ArrowRight } from 'lucide-react';
import Section from '../Section';
import Card from '../Card';
import Button from '../Button';

export default function FeaturedServices() {
  const services = [
    {
      icon: Heart,
      title: 'Root Canal Therapy',
      description: 'Painless root canal treatments using advanced rotary endodontics and precise digital imaging.',
      color: 'bg-red-50',
      iconColor: 'text-red-500',
      href: '#service-root-canal'
    },
    {
      icon: Smile,
      title: 'Smile Makeovers',
      description: 'Complete aesthetic transformations with veneers, bonding, and digital smile design technology.',
      color: 'bg-purple-50',
      iconColor: 'text-purple-500',
      href: '#service-smile-makeover'
    },
    {
      icon: Droplet,
      title: 'Cosmetic Fillings',
      description: 'Tooth-colored composite restorations that blend seamlessly with your natural smile.',
      color: 'bg-blue-50',
      iconColor: 'text-blue-500',
      href: '#service-cosmetic-fillings'
    },
    {
      icon: Sun,
      title: 'Teeth Whitening',
      description: 'Professional in-office and take-home whitening systems for a brighter, confident smile.',
      color: 'bg-yellow-50',
      iconColor: 'text-yellow-500',
      href: '#service-whitening'
    },
    {
      icon: Baby,
      title: 'Pediatric Dentistry',
      description: 'Gentle, playful dental care for children in a fun, anxiety-free environment.',
      color: 'bg-green-50',
      iconColor: 'text-green-500',
      href: '#service-pediatric'
    },
    {
      icon: Smile,
      title: 'Preventive Care',
      description: 'Comprehensive cleanings, check-ups, and preventive treatments to maintain optimal oral health.',
      color: 'bg-pink-50',
      iconColor: 'text-pink-500',
      href: '#services'
    }
  ];

  const handleServiceClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section background="white" id="services">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Our Featured Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-700 max-w-2xl mx-auto"
        >
          From pain-free root canals to stunning smile transformations, we offer comprehensive dental care
          with a boutique touch.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} delay={index * 0.1} className="p-6 cursor-pointer">
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
              <button
                onClick={() => handleServiceClick(service.href)}
                className="text-[#7E287D] font-medium text-sm hover:text-[#A34D9D] transition-colors inline-flex items-center group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <Button variant="primary" size="lg">
          View All Services
          <ArrowRight className="w-5 h-5 ml-2 inline" />
        </Button>
      </div>
    </Section>
  );
}
