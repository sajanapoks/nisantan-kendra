import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Apple, Microscope, Stethoscope, Heart, HeartPulse } from 'lucide-react';
import { dieticianData } from '@/data/dieticianData';
import { servicesData } from '@/data/servicesData';
import { useState } from 'react';
import clinicLab1 from '@/assets/clinic-lab-1.jpg';
import clinicLab2 from '@/assets/clinic-lab-2.jpg';
import clinicLab3 from '@/assets/clinic-lab-3.jpg';
import clinicLab4 from '@/assets/clinic-lab-4.jpg';
import clinicLab5 from '@/assets/clinic-lab-5.jpg';

const Services = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  // Categorize services
  const primaryServices = ['ivf', 'icsi', 'iui', 'embryo-transfer'];
  const diagnosticServices = ['basic-investigations', 'semen-analysis', 'hormone-testing', 'imaging-services', 'ovulation-monitoring', 'genetic-testing'];
  const treatmentServices = ['blocked-tubes', 'hormone-therapy', 'tight-cervix', 'donor-programs', 'pcos-management', 'endometriosis-treatment', 'laparoscopy-hysteroscopy', 'male-infertility', 'recurrent-pregnancy-loss'];
  const supportServices = ['cryopreservation', 'infertility-counselling', 'antenatal-followup'];

  const getFilteredServices = () => {
    if (activeCategory === 'all') return servicesData;
    if (activeCategory === 'primary') return servicesData.filter(s => primaryServices.includes(s.id));
    if (activeCategory === 'diagnostic') return servicesData.filter(s => diagnosticServices.includes(s.id));
    if (activeCategory === 'treatment') return servicesData.filter(s => treatmentServices.includes(s.id));
    if (activeCategory === 'support') return servicesData.filter(s => supportServices.includes(s.id));
    return servicesData;
  };

  const filteredServices = getFilteredServices();

  const clinicImages = [
    { src: clinicLab1, alt: 'ICSI Laboratory' },
    { src: clinicLab2, alt: 'Laminar Flow System' },
    { src: clinicLab3, alt: 'Microscope Laboratory' },
    { src: clinicLab4, alt: 'Ovum Pickup Procedure' },
    { src: clinicLab5, alt: 'Ultrasound Imaging' },
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

        {/* Laboratory & Facilities Gallery */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              {language === 'en' ? 'Our State-of-the-Art Facilities' : 'हाम्रो अत्याधुनिक सुविधाहरू'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Advanced laboratory equipment and modern facilities for superior fertility care'
                : 'उच्च गुणस्तरको प्रजनन हेरचाहको लागि उन्नत प्रयोगशाला उपकरण र आधुनिक सुविधाहरू'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {clinicImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services with Category Filtering */}
        <section className="mb-12">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
            <div className="flex flex-col items-center mb-8">
              <h2 className="text-3xl font-bold mb-6 text-foreground text-center">
                {language === 'en' ? 'Our Comprehensive Services' : 'हाम्रा व्यापक सेवाहरू'}
              </h2>
              <TabsList className="grid w-full max-w-3xl grid-cols-2 md:grid-cols-5 h-auto gap-2 bg-muted/50 p-2">
                <TabsTrigger value="all" className="gap-2">
                  <Heart className="w-4 h-4" />
                  {language === 'en' ? 'All' : 'सबै'}
                </TabsTrigger>
                <TabsTrigger value="primary" className="gap-2">
                  <HeartPulse className="w-4 h-4" />
                  {language === 'en' ? 'Primary' : 'प्राथमिक'}
                </TabsTrigger>
                <TabsTrigger value="diagnostic" className="gap-2">
                  <Microscope className="w-4 h-4" />
                  {language === 'en' ? 'Diagnostic' : 'निदान'}
                </TabsTrigger>
                <TabsTrigger value="treatment" className="gap-2">
                  <Stethoscope className="w-4 h-4" />
                  {language === 'en' ? 'Treatment' : 'उपचार'}
                </TabsTrigger>
                <TabsTrigger value="support" className="gap-2">
                  <Apple className="w-4 h-4" />
                  {language === 'en' ? 'Support' : 'सहयोग'}
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeCategory} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => {
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
            </TabsContent>
          </Tabs>
        </section>

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
