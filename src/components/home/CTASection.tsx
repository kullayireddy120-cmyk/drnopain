import { motion } from 'framer-motion';
import { Calendar, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import Button from '../Button';

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7E287D] via-[#A34D9D] to-[#7E287D]" />

      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Experience Painless Dentistry Today
          </h2>
          <p className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed">
            Join thousands of satisfied patients who've discovered the joy of pain-free dental care.
            Your perfect smile is just an appointment away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="secondary" size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Visit
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#7E287D]"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Calendar className="w-8 h-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Easy Booking</h3>
              <p className="text-sm text-purple-100">
                Schedule online or call us directly
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <MessageCircle className="w-8 h-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">WhatsApp Support</h3>
              <p className="text-sm text-purple-100">
                Quick responses to all your queries
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Phone className="w-8 h-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Same-Day Appointments</h3>
              <p className="text-sm text-purple-100">
                Emergency care available
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
