import { motion } from 'framer-motion';
import { Award, Heart, Users, Target, CheckCircle } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

export default function About() {
  const achievements = [
    { icon: Award, label: 'BDS, MDS Endodontics', value: 'Advanced Training' },
    { icon: Heart, label: '5000+ Happy Patients', value: 'Trust & Care' },
    { icon: Users, label: '10+ Years Experience', value: 'Expertise' },
    { icon: Target, label: '100% Pain-Free', value: 'Our Promise' }
  ];

  const values = [
    {
      title: 'Pain-Free Philosophy',
      description: 'We believe dental care should be comfortable and stress-free. Our advanced techniques and compassionate approach ensure every visit is pleasant.'
    },
    {
      title: 'Patient-Centric Care',
      description: 'Your comfort, concerns, and goals are our top priority. We listen, educate, and customize treatment plans for each individual.'
    },
    {
      title: 'Excellence & Innovation',
      description: 'We continuously invest in the latest technology and training to provide world-class dental care right here in Whitefield.'
    },
    {
      title: 'Boutique Experience',
      description: 'From soothing ambiance to personalized attention, we have created a spa-like environment that transforms dental visits.'
    }
  ];

  return (
    <div id="about">
      <Section background="gradient">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            About NoPain Dental Lounge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Where advanced dentistry meets boutique comfort
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dr. Nikita Singh at NoPain Dental Lounge"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dr. Nikita Singh</h2>
            <p className="text-lg text-[#7E287D] mb-6 font-medium">
              Founder & Chief Endodontist | BDS, MDS (Endodontics)
            </p>

            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Dr. Nikita Singh has dedicated over a decade to transforming dental care in Bengaluru.
                With specialized training in Endodontics and a passion for pain-free dentistry, she founded
                NoPain Dental Lounge to create a space where patients could receive world-class treatment
                without anxiety or discomfort.
              </p>

              <p className="leading-relaxed">
                "I chose dentistry because I wanted to make a difference in people's lives. Too many
                people avoid dental care because of fear. My mission is to change that by providing
                genuinely pain-free treatments in a comfortable, welcoming environment."
              </p>

              <p className="leading-relaxed">
                Beyond her clinical expertise, Dr. Nikita is known for her gentle touch, clear communication,
                and commitment to continuing education. She regularly attends international conferences and
                training programs to bring the latest advances to her patients.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon className="w-6 h-6 text-[#7E287D] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">{item.value}</div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Section>

      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The NoPain Experience
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            What sets us apart and makes every visit exceptional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {values.map((value, index) => (
            <Card key={index} delay={index * 0.1} className="p-6">
              <CheckCircle className="w-10 h-10 text-[#7E287D] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-0 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="NoPain Dental Lounge waiting area"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Spa-Like Waiting Lounge</h4>
              <p className="text-sm text-gray-600">
                Comfortable seating, soothing music, and a calming ambiance
              </p>
            </div>
          </Card>

          <Card className="p-0 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Modern treatment room at NoPain Dental"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2">State-of-the-Art Treatment Rooms</h4>
              <p className="text-sm text-gray-600">
                Latest technology with soft lighting and entertainment options
              </p>
            </div>
          </Card>

          <Card className="p-0 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Sterilization and safety protocols"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Advanced Sterilization</h4>
              <p className="text-sm text-gray-600">
                Hospital-grade hygiene protocols for your complete safety
              </p>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg">
            Book Your Visit Today
          </Button>
        </div>
      </Section>
    </div>
  );
}
