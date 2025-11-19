import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-card border-t border-border mt-auto" role="contentinfo">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-foreground">
              {language === 'en' ? 'Nisantan Kendra' : 'निसन्तान केन्द्र'}
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              {language === 'en'
                ? 'Established in 1992, helping over 25,000 couples with fertility, hormone, and specialized health treatments.'
                : '१९९२ मा स्थापित, २५,०००+ दम्पतीहरूलाई प्रजनन, हार्मोन र विशेष स्वास्थ्य उपचारमा सहयोग।'}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-foreground">
              {language === 'en' ? 'Contact Us' : 'सम्पर्क गर्नुहोस्'}
            </h3>
            <address className="not-italic space-y-2 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0" aria-hidden="true" />
                <span>Bijulibazar, New Baneshwor, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0" aria-hidden="true" />
                <div className="flex flex-col">
                  <a href="tel:+97714795087" className="hover:text-primary transition-colors">01-4795087</a>
                  <a href="tel:+9779851074477" className="hover:text-primary transition-colors">9851074477</a>
                  <a href="tel:+9779868730519" className="hover:text-primary transition-colors">9868730519</a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:infertilitynepal@gmail.com" className="hover:text-primary transition-colors break-all">
                  infertilitynepal@gmail.com
                </a>
              </div>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-foreground">
              {language === 'en' ? 'Working Hours' : 'कार्य समय'}
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <p>{language === 'en' ? 'Sunday - Friday: 9:00 AM - 5:00 PM' : 'आइतबार - शुक्रबार: बिहान ९ - साँझ ५'}</p>
              <p className="text-destructive font-medium">{language === 'en' ? 'Saturday: Closed' : 'शनिबार: बन्द'}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-center text-xs sm:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Nisantan Kendra. {language === 'en' ? 'All rights reserved.' : 'सबै अधिकार सुरक्षित।'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
