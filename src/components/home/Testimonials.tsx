import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Section from '../Section';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Whitefield, Bengaluru',
      rating: 5,
      text: 'I was terrified of root canals until I met Dr. Nikita. Her gentle approach and pain-free technique completely changed my perspective. The clinic feels more like a spa than a dental office. Highly recommended!',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Whitefield, Bengaluru',
      rating: 5,
      text: 'The smile makeover I received exceeded all my expectations. Dr. Nikita and her team are true artists. The entire process was comfortable, and the results are absolutely stunning. Worth every penny!',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Ananya Reddy',
      location: 'Whitefield, Bengaluru',
      rating: 5,
      text: 'My 6-year-old daughter actually looks forward to dental visits now! The team is incredibly patient and makes the experience fun. The clinic is child-friendly and the staff truly cares.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Vikram Patel',
      location: 'Whitefield, Bengaluru',
      rating: 5,
      text: 'Professional, caring, and truly pain-free. The teeth whitening results were amazing, and the follow-up care was exceptional. NoPain Dental Lounge sets a new standard for dental care.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          What Our Patients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-700 max-w-2xl mx-auto"
        >
          Real stories from real patients who've experienced the NoPain difference.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative"
          >
            <Quote className="absolute top-6 left-6 w-12 h-12 text-purple-200" />

            <div className="flex items-center mb-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-gray-600">{testimonials[currentIndex].location}</p>
              </div>
              <div className="ml-auto flex">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#7E287D] hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#7E287D] w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#7E287D] hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </Section>
  );
}
