import { motion } from 'framer-motion';
import { Shield, Heart, Music, Coffee, MessageCircle, Gift, Star, Sparkles } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Experience() {
  const comforts = [
    {
      icon: Shield,
      title: 'Pain-Free Guarantee',
      description: 'Advanced anesthesia techniques and gentle protocols ensure zero discomfort during every procedure.'
    },
    {
      icon: Music,
      title: 'Soothing Ambiance',
      description: 'Calming music, soft lighting, and aromatherapy create a spa-like atmosphere.'
    },
    {
      icon: Coffee,
      title: 'Complimentary Refreshments',
      description: 'Enjoy coffee, tea, or water in our lounge-style waiting area with comfortable seating.'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Follow-Up',
      description: 'Post-visit check-ins via WhatsApp to ensure your comfort and answer any questions.'
    },
    {
      icon: Gift,
      title: 'Handwritten Thanks',
      description: 'Personal touches like thank-you notes show our genuine appreciation for your trust.'
    },
    {
      icon: Star,
      title: 'Personalized Care',
      description: 'Every treatment plan is customized to your unique needs, goals, and comfort level.'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Welcome & Consultation',
      description: 'Relax in our lounge as we discuss your concerns and goals in detail.'
    },
    {
      step: '2',
      title: 'Comprehensive Assessment',
      description: 'Digital X-rays and thorough examination to create your personalized treatment plan.'
    },
    {
      step: '3',
      title: 'Comfortable Treatment',
      description: 'Pain-free procedures with entertainment options and regular comfort checks.'
    },
    {
      step: '4',
      title: 'Aftercare & Follow-Up',
      description: 'Clear instructions, WhatsApp support, and scheduled check-ins for peace of mind.'
    }
  ];

  return (
    <div id="experience">
      <Section background="gradient">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            The NoPain Patient Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Where comfort meets excellence at every touchpoint
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {comforts.map((comfort, index) => {
            const Icon = comfort.icon;
            return (
              <Card key={index} delay={index * 0.1} className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#7E287D] to-[#A34D9D] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{comfort.title}</h3>
                <p className="text-gray-600 leading-relaxed">{comfort.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Journey With Us
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            From your first visit to your beautiful new smile, we're with you every step
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {process.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7E287D] to-[#A34D9D] rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-[#7E287D] to-[#A34D9D]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Pain-Free Philosophy
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                We understand that dental anxiety is real. That's why we've built our entire practice
                around one simple principle: dental care should be completely comfortable.
              </p>
              <p className="leading-relaxed">
                Using the latest anesthesia techniques, gentle touch, and continuous communication,
                we ensure you feel no pain during any procedure. Many patients are surprised to find
                themselves relaxed and even comfortable during treatments.
              </p>
              <p className="leading-relaxed">
                Our commitment extends beyond the chair. From the moment you enter our boutique lounge
                to your post-treatment WhatsApp check-ins, every detail is designed for your peace of mind.
              </p>
            </div>
            <div className="mt-6">
              <Button variant="primary" size="lg">
                Experience the Difference
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Comfortable waiting lounge"
              className="rounded-xl shadow-lg w-full h-48 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Modern treatment room"
              className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
            />
            <img
              src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Happy patient"
              className="rounded-xl shadow-lg w-full h-48 object-cover -mt-8"
            />
            <img
              src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Advanced equipment"
              className="rounded-xl shadow-lg w-full h-48 object-cover"
            />
          </motion.div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 text-[#7E287D] mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Your Comfort is Our Priority
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              From cozy blankets to noise-canceling headphones, from gentle techniques to personalized attention—
              we've thought of everything to make your visit truly comfortable.
            </p>
            <Button variant="primary" size="lg">
              Book Your Comfortable Visit
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
