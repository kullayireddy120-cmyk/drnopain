import { motion } from 'framer-motion';
import { Award, Heart, Users, Star } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Team() {
  const founder = {
    name: 'Dr. Nikita Singh',
    title: 'Founder & Chief Endodontist',
    credentials: 'BDS, MDS (Endodontics)',
    image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Dr. Nikita is a renowned endodontist with over 10 years of experience in pain-free root canal therapy and aesthetic dentistry. Her passion for patient comfort and clinical excellence has made NoPain Dental Lounge a trusted name in Bengaluru. She regularly attends international conferences and brings the latest advancements to her practice.',
    specialties: ['Painless Root Canal Therapy', 'Smile Makeovers', 'Cosmetic Dentistry', 'Advanced Endodontics']
  };

  const specialists = [
    {
      name: 'Dr. Arun Mehta',
      title: 'Prosthodontist',
      credentials: 'BDS, MDS (Prosthodontics)',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialty: 'Crowns, Bridges & Implants'
    },
    {
      name: 'Dr. Priya Desai',
      title: 'Pediatric Dentist',
      credentials: 'BDS, MDS (Pedodontics)',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialty: 'Children\'s Dentistry'
    },
    {
      name: 'Dr. Karthik Rao',
      title: 'Oral Surgeon',
      credentials: 'BDS, MDS (Oral Surgery)',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialty: 'Extractions & Implant Surgery'
    }
  ];

  const supportTeam = [
    { role: 'Senior Dental Hygienist', name: 'Kavitha R.' },
    { role: 'Dental Assistant', name: 'Meera S.' },
    { role: 'Sterilization Specialist', name: 'Ramesh K.' },
    { role: 'Patient Coordinator', name: 'Anjali M.' }
  ];

  const teamValues = [
    {
      icon: Users,
      title: 'Average 8+ Years',
      description: 'Experience across team'
    },
    {
      icon: Heart,
      title: 'Patient-First Approach',
      description: 'Compassionate care always'
    },
    {
      icon: Award,
      title: 'Continuous Education',
      description: 'Regular training & certifications'
    },
    {
      icon: Star,
      title: 'Collaborative Care',
      description: 'Multi-specialty expertise'
    }
  ];

  return (
    <div id="team">
      <Section background="gradient">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Your Smile is in Expert Hands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Meet the passionate team dedicated to your comfort and care
          </motion.p>
        </div>

        <Card className="p-8 md:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-gradient-to-r from-[#7E287D] to-[#A34D9D] text-white px-4 py-2 rounded-full text-sm mb-4">
                Founder & Leader
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{founder.name}</h2>
              <p className="text-lg text-[#7E287D] font-medium mb-2">{founder.title}</p>
              <p className="text-gray-600 mb-6">{founder.credentials}</p>

              <p className="text-gray-700 leading-relaxed mb-6">{founder.bio}</p>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Areas of Expertise:</h3>
                <div className="flex flex-wrap gap-2">
                  {founder.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-purple-50 text-[#7E287D] rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="primary">
                Book with Dr. Nikita
              </Button>
            </motion.div>
          </div>
        </Card>
      </Section>

      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Specialist Team
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Multi-specialty expertise under one roof for comprehensive care
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {specialists.map((doctor, index) => (
            <Card key={index} delay={index * 0.1} className="text-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-[#7E287D] font-medium mb-1">{doctor.title}</p>
                <p className="text-sm text-gray-600 mb-4">{doctor.credentials}</p>
                <div className="inline-block px-4 py-2 bg-purple-50 text-[#7E287D] rounded-full text-sm font-medium">
                  {doctor.specialty}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Dedicated Support Team
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#7E287D] to-[#A34D9D] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <p className="font-semibold text-gray-900">{member.name}</p>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our Team
          </h3>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {teamValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} delay={index * 0.1} className="p-6 text-center">
                <Icon className="w-12 h-12 text-[#7E287D] mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            Book With Confidence
          </Button>
        </div>
      </Section>
    </div>
  );
}
