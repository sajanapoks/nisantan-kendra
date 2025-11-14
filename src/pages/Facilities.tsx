import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FlaskConical, Users2, Snowflake, ShieldCheck } from 'lucide-react';

const Facilities = () => {
  const { language } = useLanguage();

  const labs = [
    {
      id: 'embryology',
      title: language === 'en' ? 'Embryology Laboratory' : 'भ्रूणविज्ञान प्रयोगशाला',
      icon: FlaskConical,
      description: language === 'en'
        ? 'Our embryology lab is the heart of our IVF program. Equipped with state-of-the-art incubators, micromanipulators, and culture systems, it provides optimal conditions for embryo development. The lab maintains strict environmental controls including HEPA filtration, temperature and humidity regulation, and positive air pressure.'
        : 'हाम्रो भ्रूणविज्ञान प्रयोगशाला हाम्रो आईभीएफ कार्यक्रमको हृदय हो। अत्याधुनिक इन्क्यूबेटरहरू, माइक्रोम्यानिपुलेटरहरू, र संस्कृति प्रणालीहरूले सुसज्जित, यसले भ्रूण विकासको लागि इष्टतम अवस्था प्रदान गर्दछ। प्रयोगशालाले HEPA फिल्ट्रेसन, तापक्रम र आर्द्रता नियमन, र सकारात्मक हावा दबाव सहित कडा वातावरणीय नियन्त्रण कायम राख्छ।',
      features: [
        language === 'en' ? 'HEPA filtered environment' : 'HEPA फिल्टर्ड वातावरण',
        language === 'en' ? 'Advanced CO₂ incubators' : 'उन्नत CO₂ इन्क्यूबेटरहरू',
        language === 'en' ? 'Time-lapse imaging system' : 'टाइम-ल्याप्स इमेजिङ प्रणाली',
        language === 'en' ? 'Quality control protocols' : 'गुणस्तर नियन्त्रण प्रोटोकलहरू',
      ],
    },
    {
      id: 'andrology',
      title: language === 'en' ? 'Andrology Laboratory' : 'एन्ड्रोलजी प्रयोगशाला',
      icon: Users2,
      description: language === 'en'
        ? 'The andrology lab specializes in male fertility testing and sperm preparation for assisted reproductive procedures. We perform comprehensive semen analysis, sperm processing, and cryopreservation services. The lab follows WHO guidelines for all procedures and maintains high standards of quality assurance.'
        : 'एन्ड्रोलजी प्रयोगशालाले पुरुष प्रजनन परीक्षण र सहायक प्रजनन प्रक्रियाहरूको लागि शुक्राणु तयारीमा विशेषज्ञता राख्छ। हामी व्यापक वीर्य विश्लेषण, शुक्राणु प्रशोधन, र क्रायोप्रिजर्भेसन सेवाहरू प्रदान गर्छौं। प्रयोगशालाले सबै प्रक्रियाहरूको लागि WHO दिशानिर्देशहरू पालना गर्दछ र गुणस्तर आश्वासनको उच्च मापदण्ड कायम राख्छ।',
      features: [
        language === 'en' ? 'Semen analysis (WHO standards)' : 'वीर्य विश्लेषण (WHO मापदण्ड)',
        language === 'en' ? 'Sperm preparation techniques' : 'शुक्राणु तयारी प्रविधिहरू',
        language === 'en' ? 'Sperm DNA fragmentation testing' : 'शुक्राणु DNA विखण्डन परीक्षण',
        language === 'en' ? 'Hormone level assessment' : 'हर्मोन स्तर मूल्याङ्कन',
      ],
    },
    {
      id: 'cryo',
      title: language === 'en' ? 'Cryopreservation Unit' : 'क्रायोप्रिजर्भेसन युनिट',
      icon: Snowflake,
      description: language === 'en'
        ? 'Our cryopreservation facility uses advanced vitrification technology for freezing embryos, eggs, and sperm. The unit is equipped with automated liquid nitrogen filling systems, temperature monitoring alarms, and backup power supply to ensure safe long-term storage. We maintain detailed records and traceability for all stored samples.'
        : 'हाम्रो क्रायोप्रिजर्भेसन सुविधाले भ्रूण, अण्डा र शुक्राणु फ्रिजिङका लागि उन्नत भिट्रिफिकेसन प्रविधि प्रयोग गर्दछ। युनिट स्वचालित तरल नाइट्रोजन भर्ने प्रणालीहरू, तापक्रम अनुगमन अलार्महरू, र सुरक्षित दीर्घकालीन भण्डारण सुनिश्चित गर्न ब्याकअप पावर आपूर्तिले सुसज्जित छ। हामी सबै भण्डारण गरिएका नमूनाहरूको लागि विस्तृत रेकर्ड र ट्रेसेबिलिटी कायम राख्छौं।',
      features: [
        language === 'en' ? 'Vitrification technology' : 'भिट्रिफिकेसन प्रविधि',
        language === 'en' ? 'Automated monitoring systems' : 'स्वचालित अनुगमन प्रणालीहरू',
        language === 'en' ? '24/7 temperature tracking' : '२४/७ तापक्रम ट्र्याकिङ',
        language === 'en' ? 'Complete sample traceability' : 'पूर्ण नमूना ट्रेसेबिलिटी',
      ],
    },
  ];

  const safetyStandards = [
    {
      title: language === 'en' ? 'Environmental Control' : 'वातावरणीय नियन्त्रण',
      items: [
        language === 'en' ? 'HEPA filtration system' : 'HEPA फिल्ट्रेसन प्रणाली',
        language === 'en' ? 'Positive pressure rooms' : 'सकारात्मक दबाव कोठाहरू',
        language === 'en' ? 'Controlled temperature & humidity' : 'नियन्त्रित तापक्रम र आर्द्रता',
        language === 'en' ? 'VOC monitoring' : 'VOC अनुगमन',
      ],
    },
    {
      title: language === 'en' ? 'Quality Assurance' : 'गुणस्तर आश्वासन',
      items: [
        language === 'en' ? 'Daily quality control checks' : 'दैनिक गुणस्तर नियन्त्रण जाँच',
        language === 'en' ? 'Equipment calibration' : 'उपकरण क्यालिब्रेसन',
        language === 'en' ? 'International protocols' : 'अन्तर्राष्ट्रिय प्रोटोकलहरू',
        language === 'en' ? 'Regular audits' : 'नियमित लेखापरीक्षण',
      ],
    },
    {
      title: language === 'en' ? 'Safety Protocols' : 'सुरक्षा प्रोटोकलहरू',
      items: [
        language === 'en' ? 'Strict sterilization procedures' : 'कडा बाँझीकरण प्रक्रियाहरू',
        language === 'en' ? 'Sample identification systems' : 'नमूना पहिचान प्रणालीहरू',
        language === 'en' ? 'Backup power supply' : 'ब्याकअप पावर आपूर्ति',
        language === 'en' ? 'Emergency protocols' : 'आपतकालीन प्रोटोकलहरू',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            {language === 'en' ? 'Our Facilities' : 'हाम्रा सुविधाहरू'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'en'
              ? 'World-class laboratories equipped with cutting-edge technology for optimal fertility treatment outcomes'
              : 'इष्टतम प्रजनन उपचार परिणामहरूको लागि अत्याधुनिक प्रविधिले सुसज्जित विश्व स्तरीय प्रयोगशालाहरू'}
          </p>
        </div>

        {/* Laboratory Tabs */}
        <section className="mb-12">
          <Tabs defaultValue="embryology" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              {labs.map((lab) => (
                <TabsTrigger key={lab.id} value={lab.id} className="text-sm">
                  {lab.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {labs.map((lab) => (
              <TabsContent key={lab.id} value={lab.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <lab.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{lab.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{lab.description}</p>
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-foreground">
                        {language === 'en' ? 'Key Features' : 'मुख्य विशेषताहरू'}
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {lab.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Safety Standards */}
        <section>
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 mb-4">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                {language === 'en' ? 'Safety & Quality Standards' : 'सुरक्षा र गुणस्तर मापदण्डहरू'}
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'en'
                ? 'We maintain the highest standards of safety and quality in all our facilities'
                : 'हामी हाम्रा सबै सुविधाहरूमा सुरक्षा र गुणस्तरको उच्चतम मापदण्ड कायम राख्छौं'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safetyStandards.map((standard, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 text-foreground">{standard.title}</h3>
                  <ul className="space-y-2">
                    {standard.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Facilities;
