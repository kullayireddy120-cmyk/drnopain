import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import SEO from './components/SEO';
import Hero from './components/home/Hero';
import AboutPreview from './components/home/AboutPreview';
import USPSection from './components/home/USPSection';
import FeaturedServices from './components/home/FeaturedServices';
import Testimonials from './components/home/Testimonials';
import GalleryPreview from './components/home/GalleryPreview';
import CTASection from './components/home/CTASection';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Experience from './pages/Experience';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'about' || hash === 'team' || hash === 'contact' || hash === 'experience') {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "NoPain Dental Lounge",
    "image": "https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg",
    "description": "Pain-free dental care with advanced technology in Whitefield, Bengaluru. Specializing in root canal therapy and smile makeovers.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Whitefield",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560066",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.969",
      "longitude": "77.749"
    },
    "telephone": "+918012345678",
    "email": "info@nopaindental.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250"
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'team':
        return <Team />;
      case 'contact':
        return <Contact />;
      case 'experience':
        return <Experience />;
      default:
        return (
          <>
            <Hero />
            <AboutPreview />
            <USPSection />
            <FeaturedServices />
            <Testimonials />
            <GalleryPreview />
            <CTASection />
          </>
        );
    }
  };

  const getPageMeta = () => {
    switch (currentPage) {
      case 'about':
        return {
          title: 'About Us - Dr. Nikita Singh',
          description: 'Meet Dr. Nikita Singh, founder of NoPain Dental Lounge. 10+ years of expertise in painless root canals and aesthetic smile makeovers in Whitefield, Bengaluru.',
          keywords: 'Dr Nikita Singh dentist, painless dentist Bengaluru, best dentist Whitefield'
        };
      case 'team':
        return {
          title: 'Our Expert Team',
          description: 'Meet our team of experienced dental specialists. Multi-specialty expertise under one roof for comprehensive, pain-free dental care in Whitefield.',
          keywords: 'dental team Whitefield, dentist specialists Bengaluru, endodontist Whitefield'
        };
      case 'contact':
        return {
          title: 'Contact Us - Book Appointment',
          description: 'Schedule your visit to NoPain Dental Lounge in Whitefield, Bengaluru. Easy booking, same-day appointments available. Call +91 80123 45678',
          keywords: 'dental appointment Whitefield, book dentist Bengaluru, dental clinic Whitefield contact'
        };
      case 'experience':
        return {
          title: 'Patient Experience',
          description: 'Experience truly pain-free dentistry with spa-like comfort, advanced technology, and personalized care at NoPain Dental Lounge, Whitefield.',
          keywords: 'pain-free dentistry Whitefield, comfortable dental care Bengaluru, boutique dental clinic'
        };
      default:
        return {
          title: 'Painless Dentistry in Whitefield, Bengaluru',
          description: 'NoPain Dental Lounge offers pain-free root canals, smile makeovers, and cosmetic dentistry in Whitefield. Experience boutique dental care with advanced technology.',
          keywords: 'painless root canal Whitefield, smile makeover Bengaluru, cosmetic dentistry Whitefield, best dentist Whitefield, pain-free dentist Bengaluru'
        };
    }
  };

  const pageMeta = getPageMeta();

  return (
    <>
      <SEO
        title={pageMeta.title}
        description={pageMeta.description}
        keywords={pageMeta.keywords}
        schema={currentPage === 'home' ? localBusinessSchema : undefined}
      />
      <Preloader isLoading={isLoading} />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
