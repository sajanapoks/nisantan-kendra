import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Apple, Microscope, Stethoscope, Heart, HeartPulse } from 'lucide-react';
import { dieticianData } from '@/data/dieticianData';
import { servicesData } from '@/data/servicesData';
import { ServiceComparison } from '@/components/ServiceComparison';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { useState } from 'react';
import { SEO } from '@/components/SEO';
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Nisantan Kendra - Fertility Services",
    "description": "Comprehensive fertility and reproductive health services in Nepal",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fertility Services",
      "itemListElement": servicesData.slice(0, 5).map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": service.title.en,
          "description": service.description.en
        }
      }))
    }
  };

  return (
    <>
      <SEO 
        title="Fertility Services Nepal - IVF, ICSI, IUI & Complete Treatment | Nisantan Kendra"
        description="Comprehensive fertility services including IVF, ICSI, IUI, diagnostic tests, hormone therapy, and specialized treatments. Expert care with state-of-the-art facilities in Kathmandu."
        keywords="fertility services Nepal, IVF treatment, ICSI Nepal, IUI procedure, infertility diagnosis, hormone testing, embryo transfer, fertility specialist Kathmandu"
        structuredData={structuredData}
      />
      <div className="min-h-screen py-8 sm:py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">{t('servicesTitle')}</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              {language === 'en'
                ? 'Comprehensive fertility and reproductive health services tailored to your unique needs'
                : 'तपाईंको अनौठो आवश्यकता अनुसार व्यापक प्रजनन र प्रजनन स्वास्थ्य सेवाहरू'}
            </p>
          </header>

          {/* Laboratory & Facilities Gallery */}
          <section className="mb-8 sm:mb-12">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
                {language === 'en' ? 'Our State-of-the-Art Facilities' : 'हाम्रो अत्याधुनिक सुविधाहरू'}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
                {language === 'en' 
                  ? 'Advanced laboratory equipment and modern facilities for superior fertility care'
                  : 'उच्च गुणस्तरको प्रजनन हेरचाहको लागि उन्नत प्रयोगशाला उपकरण र आधुनिक सुविधाहरू'}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {clinicImages.map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    width="300"
                    height="300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                    <p className="text-white text-xs sm:text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Services with Category Filtering */}
          <section className="mb-8 sm:mb-12">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
              <div className="flex flex-col items-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-foreground text-center">
                  {language === 'en' ? 'Our Comprehensive Services' : 'हाम्रा व्यापक सेवाहरू'}
                </h2>
                <TabsList className="grid w-full max-w-3xl grid-cols-2 md:grid-cols-5 h-auto gap-1 sm:gap-2 bg-muted/50 p-1.5 sm:p-2">
                  <TabsTrigger value="all" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{language === 'en' ? 'All' : 'सबै'}</span>
                  </TabsTrigger>
                  <TabsTrigger value="primary" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                    <HeartPulse className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{language === 'en' ? 'Primary' : 'प्राथमिक'}</span>
                  </TabsTrigger>
                  <TabsTrigger value="diagnostic" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                    <Microscope className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{language === 'en' ? 'Diagnostic' : 'निदान'}</span>
                  </TabsTrigger>
                  <TabsTrigger value="treatment" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                    <Stethoscope className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{language === 'en' ? 'Treatment' : 'उपचार'}</span>
                  </TabsTrigger>
                  <TabsTrigger value="support" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                    <Apple className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{language === 'en' ? 'Support' : 'सहयोग'}</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={activeCategory} className="mt-4 sm:mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredServices.map((service) => {
                    return (
                      <Link key={service.id} to={`/services/${service.id}`}>
                        <Card className="hover:shadow-lg transition-all hover:border-primary h-full cursor-pointer">
                          <CardHeader className="p-4 sm:p-6">
                            <div className="flex items-start justify-between mb-2">
                              <Badge variant="secondary" className="text-xs">{service.category}</Badge>
                            </div>
                            <CardTitle className="text-base sm:text-lg">
                              {language === 'en' ? service.title.en : service.title.ne}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 sm:p-6 pt-0">
                            <p className="text-muted-foreground text-xs sm:text-sm mb-4 line-clamp-3">
                              {language === 'en' ? service.description.en : service.description.ne}
                            </p>
                            <Button variant="ghost" size="sm" className="w-full text-xs sm:text-sm">
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
          <section className="mb-8 sm:mb-12">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-5 sm:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Apple className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    {language === 'en' ? 'Nutrition & Diet Services' : 'पोषण र आहार सेवाहरू'}
                  </h2>
                </div>
                
                <div className="bg-card rounded-lg p-4 sm:p-6 border border-border">
                  <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{dieticianData.name}</h3>
                      <p className="text-primary font-semibold mb-3 text-sm sm:text-base">
                        {language === 'en' ? dieticianData.designation.en : dieticianData.designation.ne}
                      </p>
                      
                      <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
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
                      
                      <p className="text-muted-foreground mt-3 sm:mt-4 leading-relaxed text-xs sm:text-sm">
                        {language === 'en' ? dieticianData.bio.en : dieticianData.bio.ne}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Service Comparison Feature */}
          <section className="mb-8 sm:mb-12">
            <ServiceComparison services={servicesData} />
          </section>

          {/* Testimonials Section */}
          <section className="mb-8 sm:mb-12">
            <TestimonialsSection category={activeCategory === 'all' ? 'all' : activeCategory as 'primary' | 'diagnostic' | 'treatment' | 'support'} />
          </section>

          {/* CTA */}
          <div className="mt-8 sm:mt-12 text-center bg-primary text-primary-foreground rounded-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              {language === 'en' ? 'Need Help Choosing?' : 'छनौट गर्न मद्दत चाहिन्छ?'}
            </h2>
            <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
              {language === 'en'
                ? 'Our experts are here to guide you through your fertility journey'
                : 'हाम्रा विशेषज्ञहरू तपाईंको प्रजनन यात्रामा मार्गदर्शन गर्न यहाँ छन्'}
            </p>
            <a href="/contact" className="inline-block bg-card text-foreground px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-medium hover:opacity-90 transition-opacity text-sm sm:text-base">
              {language === 'en' ? 'Contact Us Today' : 'आज सम्पर्क गर्नुहोस्'}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
