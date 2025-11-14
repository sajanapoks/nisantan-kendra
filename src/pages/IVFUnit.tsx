import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FlaskConical, Building2, Microscope, ThermometerSnowflake, ShieldCheck } from 'lucide-react';

const IVFUnit = () => {
  const { language, t } = useLanguage();

  const facilities = [
    {
      icon: Building2,
      title: language === 'en' ? 'Reception & Consultation' : 'स्वागत र परामर्श',
      description: language === 'en'
        ? 'Comfortable waiting area and private consultation rooms for patient privacy'
        : 'बिरामी गोपनीयताको लागि आरामदायक प्रतीक्षा क्षेत्र र निजी परामर्श कोठाहरू',
    },
    {
      icon: FlaskConical,
      title: language === 'en' ? 'Embryology Laboratory' : 'भ्रूणविज्ञान प्रयोगशाला',
      description: language === 'en'
        ? 'State-of-the-art lab with controlled environment for embryo culture and development'
        : 'भ्रूण संस्कृति र विकासको लागि नियन्त्रित वातावरण सहित अत्याधुनिक प्रयोगशाला',
    },
    {
      icon: Microscope,
      title: language === 'en' ? 'ICSI Laboratory' : 'आईसीएसआई प्रयोगशाला',
      description: language === 'en'
        ? 'Specialized equipment for intracytoplasmic sperm injection procedures'
        : 'इन्ट्रासाइटोप्लाज्मिक स्पर्म इन्जेक्शन प्रक्रियाहरूको लागि विशेष उपकरण',
    },
    {
      icon: ThermometerSnowflake,
      title: language === 'en' ? 'Cryopreservation Unit' : 'क्रायोप्रिजर्भेसन युनिट',
      description: language === 'en'
        ? 'Advanced freezing technology with backup systems for safe storage'
        : 'सुरक्षित भण्डारणको लागि ब्याकअप प्रणालीहरू सहित उन्नत फ्रीजिङ प्रविधि',
    },
    {
      icon: ShieldCheck,
      title: language === 'en' ? 'Operation Theatre' : 'शल्यक्रिया कक्ष',
      description: language === 'en'
        ? 'Sterile environment equipped for egg retrieval and embryo transfer'
        : 'अण्डा पुनर्प्राप्ति र भ्रूण स्थानान्तरणको लागि सुसज्जित बाँझ वातावरण',
    },
  ];

  const equipment = [
    { name: language === 'en' ? 'HEPA Filtered Air System' : 'HEPA फिल्टर्ड एयर सिस्टम', category: 'Environment' },
    { name: language === 'en' ? 'CO₂ Incubators' : 'CO₂ इन्क्यूबेटरहरू', category: 'Culture' },
    { name: language === 'en' ? 'Micromanipulator System' : 'माइक्रोम्यानिपुलेटर सिस्टम', category: 'ICSI' },
    { name: language === 'en' ? 'Inverted Microscope' : 'उल्टो माइक्रोस्कोप', category: 'Analysis' },
    { name: language === 'en' ? 'Liquid Nitrogen Tanks' : 'तरल नाइट्रोजन ट्याङ्कहरू', category: 'Storage' },
    { name: language === 'en' ? 'Ultrasound Systems' : 'अल्ट्रासाउन्ड प्रणालीहरू', category: 'Imaging' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">{t('ivfUnit')}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'en'
              ? 'World-class IVF facility with cutting-edge technology and experienced team'
              : 'अत्याधुनिक प्रविधि र अनुभवी टोलीसहित विश्व स्तरीय आईभीएफ सुविधा'}
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                {language === 'en' ? 'About Our IVF Unit' : 'हाम्रो आईभीएफ युनिटको बारेमा'}
              </h2>
              <div className="prose max-w-none text-muted-foreground space-y-4">
                <p>
                  {language === 'en'
                    ? 'Our IVF unit is equipped with state-of-the-art technology and designed to provide the highest standards of care. The facility maintains strict environmental controls including HEPA filtered air, controlled temperature and humidity, and positive pressure to ensure optimal conditions for embryo development.'
                    : 'हाम्रो आईभीएफ युनिट अत्याधुनिक प्रविधिले सुसज्जित छ र हेरचाहको उच्चतम मापदण्ड प्रदान गर्न डिजाइन गरिएको छ। सुविधाले HEPA फिल्टर्ड हावा, नियन्त्रित तापक्रम र आर्द्रता, र भ्रूण विकासको लागि इष्टतम अवस्था सुनिश्चित गर्न सकारात्मक दबाव सहित कडा वातावरणीय नियन्त्रण कायम राख्छ।'}
                </p>
                <p>
                  {language === 'en'
                    ? 'The laboratory is operated by highly trained embryologists who follow international protocols and quality standards. We maintain complete documentation and traceability for all procedures, ensuring the highest level of safety and success rates.'
                    : 'प्रयोगशाला उच्च प्रशिक्षित भ्रूणविज्ञानीहरू द्वारा संचालित छ जसले अन्तर्राष्ट्रिय प्रोटोकल र गुणस्तर मापदण्डहरू पालना गर्छन्। हामी सबै प्रक्रियाहरूको लागि पूर्ण दस्तावेजीकरण र ट्रेसेबिलिटी कायम राख्छौं, सुरक्षा र सफलता दरको उच्चतम स्तर सुनिश्चित गर्दै।'}
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Facilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">
            {language === 'en' ? 'Our Facilities' : 'हाम्रा सुविधाहरू'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <facility.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Equipment */}
        <section>
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'en' ? 'Equipment & Technology' : 'उपकरण र प्रविधि'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {equipment.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-colors flex items-center justify-between"
                  >
                    <span className="font-medium text-foreground">{item.name}</span>
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Standards */}
        <section className="mt-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'en' ? 'Quality & Safety Standards' : 'गुणस्तर र सुरक्षा मापदण्डहरू'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">
                    {language === 'en' ? 'Environmental Control' : 'वातावरणीय नियन्त्रण'}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {language === 'en' ? 'HEPA filtered air circulation' : 'HEPA फिल्टर्ड हावा परिसंचरण'}</li>
                    <li>• {language === 'en' ? 'Positive pressure rooms' : 'सकारात्मक दबाव कोठाहरू'}</li>
                    <li>• {language === 'en' ? '24/7 temperature monitoring' : '२४/७ तापक्रम अनुगमन'}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">
                    {language === 'en' ? 'Quality Assurance' : 'गुणस्तर आश्वासन'}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {language === 'en' ? 'International protocols' : 'अन्तर्राष्ट्रिय प्रोटोकलहरू'}</li>
                    <li>• {language === 'en' ? 'Regular equipment calibration' : 'नियमित उपकरण क्यालिब्रेसन'}</li>
                    <li>• {language === 'en' ? 'Complete traceability system' : 'पूर्ण ट्रेसेबिलिटी प्रणाली'}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default IVFUnit;
