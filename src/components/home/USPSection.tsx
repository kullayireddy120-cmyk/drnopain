import { motion } from 'framer-motion';
import { Shield, Zap, Sparkles, Smile } from 'lucide-react';
import Section from '../Section';
import Card from '../Card';

export default function USPSection() {
  const usps = [
    {
      icon: Shield,
      title: 'Pain-Free Dentistry',
      description: 'Advanced anesthesia techniques and gentle care protocols ensure every procedure is completely comfortable.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment including digital X-rays, laser dentistry, and modern sterilization systems.',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: Sparkles,
      title: 'Boutique Experience',
      description: 'Spa-like ambiance with comfortable seating, soothing music, and personalized attention for every patient.',
      color: 'from-purple-600 to-pink-400'
    },
    {
      icon: Smile,
      title: 'Smile Designing',
      description: 'Customized aesthetic treatments combining artistry with science to create your perfect, natural-looking smile.',
      color: 'from-pink-400 to-purple-600'
    }
  ];

  return (
    <Section background="gradient">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          The NoPain Promise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-700 max-w-2xl mx-auto"
        >
          We've redefined dental care by combining cutting-edge technology with genuine compassion and comfort.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {usps.map((usp, index) => {
          const Icon = usp.icon;
          return (
            <Card key={index} delay={index * 0.1} className="p-6 text-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-br ${usp.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{usp.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{usp.description}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
