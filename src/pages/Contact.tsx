import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['NoPain Dental Lounge', 'Whitefield, Bengaluru', 'Karnataka 560066'],
      color: 'text-red-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 80123 45678', '+91 98765 43210'],
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@nopaindental.com', 'appointments@nopaindental.com'],
      color: 'text-blue-500'
    },
    {
      icon: Clock,
      title: 'Clinic Hours',
      details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
      color: 'text-purple-500'
    }
  ];

  return (
    <div id="contact">
      <Section background="gradient">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            We're here to answer your questions and schedule your visit
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} delay={index * 0.1} className="p-6 text-center">
                <Icon className={`w-10 h-10 ${info.color} mx-auto mb-4`} />
                <h3 className="font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-sm text-gray-600">{detail}</p>
                ))}
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7E287D] focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7E287D] focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7E287D] focus:border-transparent transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7E287D] focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your dental needs..."
                />
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Book an Appointment</h2>
              <p className="text-gray-600 mb-6">
                Schedule your visit through Practo for instant confirmation and easy rescheduling.
              </p>
              <Button variant="primary" size="lg" fullWidth>
                Book on Practo
              </Button>
            </Card>

            <Card className="p-0 overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7234661234567!2d77.749!3d12.969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzA4LjQiTiA3N8KwNDQnNTYuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NoPain Dental Lounge Location"
              />
            </Card>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="bg-gradient-to-r from-[#7E287D] to-[#A34D9D] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Emergency Dental Care</h2>
          <p className="text-lg mb-6 text-purple-100">
            Dental emergencies can't wait. We offer same-day appointments for urgent cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Call Emergency Line
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#7E287D]"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
