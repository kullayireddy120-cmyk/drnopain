import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Clock } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Services', href: '#services' },
    { name: 'Smile Gallery', href: '#gallery' },
    { name: 'Patient Experience', href: '#experience' },
    { name: 'Blog', href: '#blog' }
  ];

  const services = [
    { name: 'Root Canal Therapy', href: '#service-root-canal' },
    { name: 'Smile Makeovers', href: '#service-smile-makeover' },
    { name: 'Cosmetic Fillings', href: '#service-cosmetic-fillings' },
    { name: 'Teeth Whitening', href: '#service-whitening' },
    { name: 'Pediatric Dentistry', href: '#service-pediatric' }
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#7E287D] to-[#A34D9D] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">NoPain Dental</h3>
                <p className="text-xs text-gray-400">Lounge</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Experience pain-free dentistry with advanced technology and boutique comfort in the heart of Whitefield, Bengaluru.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#7E287D] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#7E287D] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#7E287D] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    className="text-sm hover:text-[#A34D9D] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(service.href); }}
                    className="text-sm hover:text-[#A34D9D] transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-[#A34D9D]" />
                <span className="text-sm">
                  NoPain Dental Lounge, Whitefield, Bengaluru, Karnataka 560066
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-[#A34D9D]" />
                <a href="tel:+918012345678" className="text-sm hover:text-[#A34D9D] transition-colors">
                  +91 80123 45678
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-[#A34D9D]" />
                <a href="mailto:info@nopaindental.com" className="text-sm hover:text-[#A34D9D] transition-colors">
                  info@nopaindental.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-[#A34D9D]" />
                <div className="text-sm">
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sun: 10:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} NoPain Dental Lounge. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-gray-500">
            Designed for pain-free smiles in Whitefield, Bengaluru
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/918012345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-40"
        aria-label="WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </footer>
  );
}
