import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Microscope, 
  TestTube, 
  Syringe, 
  Heart, 
  Activity, 
  Baby,
  Users,
  Snowflake,
  Apple,
  Utensils,
  Scale
} from 'lucide-react';
import { dieticianData } from '@/data/dieticianData';

const Services = () => {
  const { language, t } = useLanguage();

  const services = [
    {
      icon: TestTube,
      title: language === 'en' ? 'IVF (In Vitro Fertilization)' : 'आईभीएफ (इन भिट्रो फर्टिलाइजेशन)',
      description: language === 'en'
        ? 'Advanced IVF treatment with high success rates using state-of-the-art technology and personalized protocols.'
        : 'अत्याधुनिक प्रविधि र व्यक्तिगत प्रोटोकल प्रयोग गरी उच्च सफलता दरसहित उन्नत आईभीएफ उपचार।',
      category: 'Primary',
    },
    {
      icon: Microscope,
      title: language === 'en' ? 'ICSI (Intracytoplasmic Sperm Injection)' : 'आईसीएसआई (इन्ट्रासाइटोप्लाज्मिक स्पर्म इन्जेक्शन)',
      description: language === 'en'
        ? 'Specialized procedure for male infertility where a single sperm is injected directly into an egg.'
        : 'पुरुष बाँझोपनको लागि विशेष प्रक्रिया जहाँ एकल शुक्राणु सिधै अण्डामा इन्जेक्ट गरिन्छ।',
      category: 'Primary',
    },
    {
      icon: Syringe,
      title: language === 'en' ? 'IUI (Intrauterine Insemination)' : 'आईयूआई (इन्ट्रायूटेराइन इन्सेमिनेशन)',
      description: language === 'en'
        ? 'Less invasive fertility treatment where prepared sperm is placed directly in the uterus.'
        : 'कम आक्रामक प्रजनन उपचार जहाँ तयार शुक्राणु सिधै गर्भाशयमा राखिन्छ।',
      category: 'Primary',
    },
    {
      icon: Heart,
      title: language === 'en' ? 'Counseling & Assessment' : 'परामर्श र मूल्याङ्कन',
      description: language === 'en'
        ? 'Comprehensive fertility counseling and medical assessment to determine the best treatment approach.'
        : 'उत्तम उपचार दृष्टिकोण निर्धारण गर्न व्यापक प्रजनन परामर्श र चिकित्सा मूल्याङ्कन।',
      category: 'Support',
    },
    {
      icon: Activity,
      title: language === 'en' ? 'Ovulation Induction' : 'ओव्युलेशन इन्डक्शन',
      description: language === 'en'
        ? 'Hormone therapy to stimulate egg production in women with ovulation disorders.'
        : 'ओव्युलेशन विकार भएका महिलाहरूमा अण्डा उत्पादन उत्तेजित गर्न हर्मोन थेरापी।',
      category: 'Treatment',
    },
    {
      icon: Baby,
      title: language === 'en' ? 'Embryo Freezing' : 'भ्रूण फ्रीजिङ',
      description: language === 'en'
        ? 'Cryopreservation of embryos for future use, providing flexibility in family planning.'
        : 'भविष्यको प्रयोगको लागि भ्रूणहरूको क्रायोप्रिजर्भेसन, परिवार योजनामा लचिलोपन प्रदान गर्दै।',
      category: 'Advanced',
    },
    {
      icon: Users,
      title: language === 'en' ? 'Male Infertility Treatment' : 'पुरुष बाँझोपन उपचार',
      description: language === 'en'
        ? 'Specialized andrology services including sperm analysis, hormone therapy, and surgical procedures.'
        : 'शुक्राणु विश्लेषण, हर्मोन थेरापी र शल्यक्रिया प्रक्रियाहरू सहित विशेष एन्ड्रोलजी सेवाहरू।',
      category: 'Specialized',
    },
    {
      icon: Snowflake,
      title: language === 'en' ? 'Cryopreservation' : 'क्रायोप्रिजर्भेसन',
      description: language === 'en'
        ? 'Advanced freezing technology for sperm, eggs, and embryos with high survival rates.'
        : 'शुक्राणु, अण्डा र भ्रूणहरूको लागि उच्च बाँच्ने दरसहित उन्नत फ्रीजिङ प्रविधि।',
      category: 'Advanced',
    },
    {
      icon: Activity,
      title: language === 'en' ? 'PCOS Treatment & Management' : 'PCOS उपचार र व्यवस्थापन',
      description: language === 'en'
        ? 'Comprehensive PCOS treatment including hormonal therapy, lifestyle management, and fertility optimization.'
        : 'हर्मोनल थेरापी, जीवनशैली व्यवस्थापन र प्रजनन अनुकूलन सहित व्यापक PCOS उपचार।',
      category: 'Specialized',
    },
    {
      icon: Apple,
      title: language === 'en' ? 'PCOS Diet Management' : 'PCOS आहार व्यवस्थापन',
      description: language === 'en'
        ? 'Personalized nutrition plans to manage PCOS symptoms, regulate hormones, and improve fertility naturally.'
        : 'PCOS लक्षणहरू व्यवस्थापन गर्न, हर्मोनहरू नियमन गर्न र प्राकृतिक रूपमा प्रजनन क्षमता सुधार गर्न व्यक्तिगत पोषण योजनाहरू।',
      category: 'Nutrition',
    },
    {
      icon: Utensils,
      title: language === 'en' ? 'Fertility Nutrition Counseling' : 'प्रजनन पोषण परामर्श',
      description: language === 'en'
        ? 'Evidence-based dietary guidance to optimize reproductive health and improve conception chances.'
        : 'प्रजनन स्वास्थ्य अनुकूलन गर्न र गर्भधारण सम्भावना सुधार गर्न प्रमाणमा आधारित आहार मार्गदर्शन।',
      category: 'Nutrition',
    },
    {
      icon: Scale,
      title: language === 'en' ? 'Weight Management for Fertility' : 'प्रजननको लागि वजन व्यवस्थापन',
      description: language === 'en'
        ? 'Specialized weight management programs designed to enhance fertility and support healthy pregnancy.'
        : 'प्रजनन क्षमता बढाउन र स्वस्थ गर्भावस्था समर्थन गर्न डिजाइन गरिएको विशेष वजन व्यवस्थापन कार्यक्रमहरू।',
      category: 'Nutrition',
    },
  ];

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
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary">{service.category}</Badge>
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
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
