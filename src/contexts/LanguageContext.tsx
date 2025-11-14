import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ne';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    ivfUnit: 'IVF Unit',
    doctors: 'Our Doctors',
    facilities: 'Facilities',
    patientCare: 'Patient Care',
    contact: 'Contact',
    faq: 'FAQ',
    testimonials: 'Testimonials',
    
    // Home Page
    heroTitle: 'Nisantan Kendra',
    heroSubtitle: 'Providing fertility, hormone, and specialized health treatments with 30+ years of experience',
    bookAppointment: 'Book Appointment',
    learnMore: 'Learn More',
    whyChooseUs: 'Why Choose Us',
    experienceYears: '30+ Years',
    experienceText: 'Expert Care',
    successRate: '25,000+ Couples',
    successText: 'Successfully Helped',
    modernFacility: 'Modern Facility',
    facilityText: 'State-of-the-art Equipment',
    
    // About
    aboutTitle: 'About Nisantan Kendra',
    ourHistory: 'Our History',
    ourMission: 'Our Mission',
    ourVision: 'Our Vision',
    
    // Services
    servicesTitle: 'Our Services',
    ivfService: 'IVF Treatment',
    icsiService: 'ICSI',
    iuiService: 'IUI',
    counseling: 'Counseling & Assessment',
    
    // Contact
    getInTouch: 'Get In Touch',
    location: 'Location',
    phone: 'Phone',
    email: 'Email',
    sendMessage: 'Send Message',
    
    // Common
    readMore: 'Read More',
    viewAll: 'View All',
  },
  ne: {
    // Navigation
    home: 'गृहपृष्ठ',
    about: 'हाम्रो बारेमा',
    services: 'सेवाहरू',
    ivfUnit: 'आईभीएफ युनिट',
    doctors: 'हाम्रा डाक्टरहरू',
    facilities: 'सुविधाहरू',
    patientCare: 'बिरामी हेरचाह',
    contact: 'सम्पर्क',
    faq: 'प्रश्नहरू',
    testimonials: 'प्रशंसापत्र',
    
    // Home Page
    heroTitle: 'निसन्तान केन्द्र',
    heroSubtitle: '३० वर्षभन्दा बढीको अनुभवसहित प्रजनन, हार्मोन र विशेष स्वास्थ्य उपचार',
    bookAppointment: 'अपोइन्टमेन्ट बुक गर्नुहोस्',
    learnMore: 'थप जान्नुहोस्',
    whyChooseUs: 'किन हामीलाई छन्नुहोस्',
    experienceYears: '३०+ वर्ष',
    experienceText: 'विशेषज्ञ हेरचाह',
    successRate: '२५,०००+ दम्पती',
    successText: 'सफलतापूर्वक सहयोग',
    modernFacility: 'आधुनिक सुविधा',
    facilityText: 'अत्याधुनिक उपकरण',
    
    // About
    aboutTitle: 'निसन्तान केन्द्रको बारेमा',
    ourHistory: 'हाम्रो इतिहास',
    ourMission: 'हाम्रो मिशन',
    ourVision: 'हाम्रो दृष्टिकोण',
    
    // Services
    servicesTitle: 'हाम्रा सेवाहरू',
    ivfService: 'आईभीएफ उपचार',
    icsiService: 'आईसीएसआई',
    iuiService: 'आईयूआई',
    counseling: 'परामर्श र मूल्याङ्कन',
    
    // Contact
    getInTouch: 'सम्पर्कमा रहनुहोस्',
    location: 'स्थान',
    phone: 'फोन',
    email: 'इमेल',
    sendMessage: 'सन्देश पठाउनुहोस्',
    
    // Common
    readMore: 'थप पढ्नुहोस्',
    viewAll: 'सबै हेर्नुहोस्',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
