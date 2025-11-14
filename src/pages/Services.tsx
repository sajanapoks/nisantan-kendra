import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Apple } from 'lucide-react';
import { dieticianData } from '@/data/dieticianData';
import { servicesData } from '@/data/servicesData';

const Services = () => {
  const { language, t } = useLanguage();

  const additionalServices = [
    language === 'en' ? 'Hormone Therapy' : 'हर्मोन थेरापी',
    language === 'en' ? 'Menopause Management' : 'रजोनिवृत्ति व्यवस्थापन',
    language === 'en' ? 'Growth Disorders Treatment' : 'वृद्धि विकार उपचार',
    language === 'en' ? 'Obesity Treatment' : 'मोटोपना उपचार',
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">{t('servicesTitle')}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'en'
              ? 'Comprehensive fertility and reproductive health services tailored to your unique needs'
              : 'तपाईंको अनौठो आवश्यकता अनुसार व्यापक प्रजनन र प्रजनन स्वास्थ्य सेवाहरू'}
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.id} to={`/services/${service.id}`}>
                <Card className="hover:shadow-lg transition-all hover:border-primary h-full cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary">{service.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">
                      {language === 'en' ? service.title.en : service.title.ne}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      {language === 'en' ? service.shortDescription.en : service.shortDescription.ne}
                    </p>
                    <Button variant="ghost" size="sm" className="w-full">
                      {language === 'en' ? 'Learn More' : 'थप जान्नुहोस्'}
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Dietician Profile Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Apple className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {language === 'en' ? 'Nutrition & Diet Services' : 'पोषण र आहार सेवाहरू'}
                </h2>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{dieticianData.name}</h3>
                    <p className="text-primary font-semibold mb-3">
                      {language === 'en' ? dieticianData.designation.en : dieticianData.designation.ne}
                    </p>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-foreground">
                          {language === 'en' ? 'Qualification: ' : 'योग्यता: '}
                        </span>
                        <span className="text-muted-foreground">
                          {language === 'en' ? dieticianData.qualification.en : dieticianData.qualification.ne}
                        </span>
                      </div>
                      
                      <div>
                        <span className="font-semibold text-foreground">
                          {language === 'en' ? 'Experience: ' : 'अनुभव: '}
                        </span>
                        <span className="text-muted-foreground">
                          {language === 'en' ? dieticianData.experience.en : dieticianData.experience.ne}
                        </span>
                      </div>
                      
                      <div>
                        <span className="font-semibold text-foreground">
                          {language === 'en' ? 'Specialization: ' : 'विशेषज्ञता: '}
                        </span>
                        <span className="text-muted-foreground">
                          {language === 'en' ? dieticianData.specialization.en : dieticianData.specialization.ne}
                        </span>
                      </div>
                      
                      <div>
                        <span className="font-semibold text-foreground">
                          {language === 'en' ? 'Availability: ' : 'उपलब्धता: '}
                        </span>
                        <span className="text-muted-foreground">
                          {language === 'en' ? dieticianData.availability.en : dieticianData.availability.ne}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mt-4 leading-relaxed">
                      {language === 'en' ? dieticianData.bio.en : dieticianData.bio.ne}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Additional Services */}
        <section>
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'en' ? 'Additional Services' : 'अतिरिक्त सेवाहरू'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {additionalServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">{service}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center bg-primary text-primary-foreground rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Need Help Choosing?' : 'छनौट गर्न मद्दत चाहिन्छ?'}
          </h2>
          <p className="mb-6 opacity-90">
            {language === 'en'
              ? 'Our experts are here to guide you through your fertility journey'
              : 'हाम्रा विशेषज्ञहरू तपाईंको प्रजनन यात्रामा मार्गदर्शन गर्न यहाँ छन्'}
          </p>
          <a href="/contact" className="inline-block bg-card text-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
            {language === 'en' ? 'Contact Us Today' : 'आज सम्पर्क गर्नुहोस्'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
