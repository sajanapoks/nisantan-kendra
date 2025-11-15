import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ivfFacilities } from '@/data/ivfData';
import icsiImage from '@/assets/icsi.jpg';
import laminarFlowImage from '@/assets/laminar flow with egg sepation system with temperature control.jpg';
import microscopeImage from '@/assets/microscope.jpg';
import ovumPickupImage from '@/assets/ovum pickup.jpg';
import tvUsgImage from '@/assets/tv usg.jpg';

const IVFUnit = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

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
            {ivfFacilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/ivf-unit/${facility.id}`)}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">
                      {language === 'en' ? facility.title.en : facility.title.np}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' ? facility.description.en : facility.description.np}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Facility Images Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">
            {language === 'en' ? 'Our Facility & Equipment' : 'हाम्रो सुविधा र उपकरण'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={icsiImage}
                  alt="ICSI Procedure"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-foreground">
                  {language === 'en' ? 'ICSI Procedure' : 'आईसीएसआई प्रक्रिया'}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {language === 'en'
                    ? 'Advanced micromanipulation for intracytoplasmic sperm injection'
                    : 'इन्ट्रासाइटोप्लाज्मिक स्पर्म इन्जेक्शनको लागि उन्नत माइक्रोम्यानिपुलेशन'}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={laminarFlowImage}
                  alt="Laminar Flow System"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-foreground">
                  {language === 'en' ? 'Laminar Flow with Egg Separation' : 'अण्डा विभाजन सहित लामिनार फ्लो'}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {language === 'en'
                    ? 'Temperature controlled environment for egg handling'
                    : 'अण्डा ह्यान्डलिंगको लागि तापक्रम नियन्त्रित वातावरण'}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={microscopeImage}
                  alt="Laboratory Microscope"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-foreground">
                  {language === 'en' ? 'Advanced Microscopy' : 'उन्नत माइक्रोस्कोपी'}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {language === 'en'
                    ? 'High-precision microscopes for embryo examination'
                    : 'भ्रूण परीक्षणको लागि उच्च-परिशुद्धता माइक्रोस्कोपहरू'}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={ovumPickupImage}
                  alt="Ovum Pickup Procedure"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-foreground">
                  {language === 'en' ? 'Ovum Pickup Procedure' : 'अण्डा पुनर्प्राप्ति प्रक्रिया'}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {language === 'en'
                    ? 'Ultrasound-guided egg retrieval procedure'
                    : 'अल्ट्रासाउन्ड-निर्देशित अण्डा पुनर्प्राप्ति प्रक्रिया'}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={tvUsgImage}
                  alt="Transvaginal Ultrasound"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-foreground">
                  {language === 'en' ? 'Transvaginal Ultrasound' : 'ट्रान्सभ्याजिनल अल्ट्रासाउन्ड'}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {language === 'en'
                    ? 'Advanced ultrasound imaging for monitoring and procedures'
                    : 'निगरानी र प्रक्रियाहरूको लागि उन्नत अल्ट्रासाउन्ड इमेजिङ'}
                </p>
              </CardContent>
            </Card>
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
