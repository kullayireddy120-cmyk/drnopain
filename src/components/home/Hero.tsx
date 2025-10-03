import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../Button';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7E287D] via-[#A34D9D] to-[#7E287D] opacity-95" />

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Whitefield's Premier Pain-Free Dental Lounge
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Painfree Treatments,{' '}
              <span className="block bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
                Picture Perfect Smiles.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed">
              Experience boutique dentistry where advanced technology meets spa-like comfort.
              Specializing in pain-free root canals and aesthetic smile transformations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg">
                Book Appointment
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#7E287D]">
                Explore Our Services
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              <div className="text-white">
                <div className="text-3xl font-bold mb-1">10+</div>
                <div className="text-sm text-purple-200">Years Experience</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold mb-1">5000+</div>
                <div className="text-sm text-purple-200">Happy Smiles</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-purple-200">Pain-Free Promise</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20" />
              <img
                src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Smiling patient at NoPain Dental Lounge showcasing beautiful, healthy smile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7E287D] to-[#A34D9D] rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-600">Patient Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
