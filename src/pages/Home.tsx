import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, Heart, Microscope, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('experienceYears'),
      description: t('experienceText'),
    },
    {
      icon: Heart,
      title: t('successRate'),
      description: t('successText'),
    },
    {
      icon: Microscope,
      title: t('modernFacility'),
      description: t('facilityText'),
    },
    {
      icon: Users,
      title: language === 'en' ? 'Expert Team' : 'विशेषज्ञ टोली',
      description: language === 'en' ? 'Dedicated Specialists' : 'समर्पित विशेषज्ञहरू',
    },
  ];

  const services = [
    {
      title: t('ivfService'),
      description: language === 'en' 
        ? 'Advanced In Vitro Fertilization with high success rates'
        : 'उच्च सफलता दरसहित उन्नत इन भिट्रो फर्टिलाइजेशन',
      link: '/services',
    },
    {
      title: t('icsiService'),
      description: language === 'en'
        ? 'Intracytoplasmic Sperm Injection for male infertility'
        : 'पुरुष बाँझोपनको लागि इन्ट्रासाइटोप्लाज्मिक स्पर्म इन्जेक्शन',
      link: '/services',
    },
    {
      title: t('counseling'),
      description: language === 'en'
        ? 'Expert counseling and comprehensive fertility assessment'
        : 'विशेषज्ञ परामर्श र व्यापक प्रजनन मूल्याङ्कन',
      link: '/patient-care',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              {t('heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <span>✓ {language === 'en' ? '32+ years of trusted care' : '३२+ वर्षको विश्वसनीय हेरचाह'}</span>
              <span>•</span>
              <span>✓ {language === 'en' ? '8000+ couples helped' : '८०००+ दम्पती सहयोग'}</span>
              <span>•</span>
              <span>✓ {language === 'en' ? "Led by Nepal's pioneer specialist" : 'नेपालको अग्रणी विशेषज्ञद्वारा नेतृत्व'}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <Button asChild size="lg" className="text-base transition-transform hover:scale-105 duration-300">
                <Link to="/contact">
                  {t('bookAppointment')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base transition-all hover:bg-primary hover:text-primary-foreground duration-300">
                <Link to="/about">{t('learnMore')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            {t('whyChooseUs')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110 duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('servicesTitle')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'en'
                ? 'Comprehensive fertility treatments tailored to your needs'
                : 'तपाईंको आवश्यकता अनुसार व्यापक प्रजनन उपचार'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 group"
              >
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 min-h-[3rem]">{service.description}</p>
                  <Button asChild variant="link" className="p-0 group-hover:translate-x-1 transition-transform">
                    <Link to={service.link}>
                      {t('readMore')} <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">{t('viewAll')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Ready to Start Your Journey?' : 'आफ्नो यात्रा सुरु गर्न तयार हुनुहुन्छ?'}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {language === 'en'
              ? 'Book a consultation with our fertility experts today'
              : 'आज हाम्रा प्रजनन विशेषज्ञहरूसँग परामर्श बुक गर्नुहोस्'}
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">{t('bookAppointment')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
