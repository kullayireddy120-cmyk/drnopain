import { motion } from 'framer-motion';
import { Award, Heart, Star, ArrowRight } from 'lucide-react';
import Section from '../Section';
import Button from '../Button';
import Card from '../Card';

export default function AboutPreview() {
  return (
    <Section background="white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dr. Nikita Singh, founder of NoPain Dental Lounge"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#7E287D] to-[#A34D9D] text-white rounded-xl p-6 shadow-xl">
            <div className="text-3xl font-bold">10+</div>
            <div className="text-sm">Years of Expertise</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Dr. Nikita Singh
          </h2>
          <p className="text-lg text-[#7E287D] mb-6 font-medium">
            Founder & Chief Endodontist
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            With over 10 years of specialized expertise in painless root canals and aesthetic smile makeovers,
            Dr. Nikita Singh has transformed the dental experience for thousands of patients across Bengaluru.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Her commitment to pain-free dentistry, combined with advanced technology and a boutique approach,
            has made NoPain Dental Lounge the preferred choice for those seeking comfortable, premium dental care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-start space-x-3">
              <Award className="w-6 h-6 text-[#7E287D] flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-gray-900">BDS, MDS</div>
                <div className="text-sm text-gray-600">Endodontics</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Heart className="w-6 h-6 text-[#7E287D] flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-gray-900">5000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Star className="w-6 h-6 text-[#7E287D] flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">Patient Rating</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary">
              Book Appointment
            </Button>
            <Button variant="outline">
              Meet Our Team
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
