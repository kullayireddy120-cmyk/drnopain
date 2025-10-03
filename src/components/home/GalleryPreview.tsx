import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Section from '../Section';
import Button from '../Button';

export default function GalleryPreview() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const beforeAfterCases = [
    {
      before: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/5340280/pexels-photo-5340280.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Smile Makeover',
      description: 'Complete transformation with veneers'
    },
    {
      before: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/6528996/pexels-photo-6528996.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Teeth Whitening',
      description: 'Professional in-office whitening'
    },
    {
      before: 'https://images.pexels.com/photos/6528998/pexels-photo-6528998.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Cosmetic Bonding',
      description: 'Natural-looking composite restorations'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterCases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterCases.length) % beforeAfterCases.length);
  };

  return (
    <Section background="white" id="gallery">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Smile Transformations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-700 max-w-2xl mx-auto"
        >
          See the stunning results we've achieved for our patients. Every smile tells a story of confidence restored.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 mb-8"
          >
            <div className="relative">
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-md z-10">
                <span className="text-sm font-semibold text-gray-700">Before</span>
              </div>
              <img
                src={beforeAfterCases[currentSlide].before}
                alt={`Before ${beforeAfterCases[currentSlide].title}`}
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="relative">
              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#7E287D] to-[#A34D9D] text-white px-4 py-2 rounded-full shadow-md z-10">
                <span className="text-sm font-semibold">After</span>
              </div>
              <img
                src={beforeAfterCases[currentSlide].after}
                alt={`After ${beforeAfterCases[currentSlide].title}`}
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </motion.div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {beforeAfterCases[currentSlide].title}
            </h3>
            <p className="text-gray-600">{beforeAfterCases[currentSlide].description}</p>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#7E287D] hover:text-white transition-colors"
              aria-label="Previous case"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {beforeAfterCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-[#7E287D] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to case ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#7E287D] hover:text-white transition-colors"
              aria-label="Next case"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            View Full Gallery
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </Button>
          <p className="text-xs text-gray-500 mt-4">
            All images shown with patient consent
          </p>
        </div>
      </div>
    </Section>
  );
}
