import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const { language } = useLanguage();

  const faqs = language === 'en' ? [
    {
      question: 'What is IVF and how does it work?',
      answer: 'In Vitro Fertilization (IVF) is a process where eggs are retrieved from the ovaries and fertilized with sperm in a laboratory. The resulting embryos are then transferred to the uterus. The entire process typically takes 2-3 weeks per cycle.',
    },
    {
      question: 'What is the success rate of IVF treatment?',
      answer: 'Success rates vary based on age, overall health, and specific fertility issues. Generally, women under 35 have the highest success rates. At our center, we maintain high success rates through personalized treatment plans and advanced technology.',
    },
    {
      question: 'How long does the IVF process take?',
      answer: 'A complete IVF cycle typically takes 4-6 weeks from start to finish. This includes ovarian stimulation (10-14 days), egg retrieval, fertilization, embryo development (3-5 days), and embryo transfer. A pregnancy test is done 2 weeks after transfer.',
    },
    {
      question: 'Is the IVF procedure painful?',
      answer: 'Most IVF procedures are not painful. Daily hormone injections may cause minor discomfort. Egg retrieval is done under sedation, so you won\'t feel pain during the procedure. Some women experience mild cramping afterward.',
    },
    {
      question: 'What is the difference between IVF and ICSI?',
      answer: 'IVF involves mixing sperm and eggs together for natural fertilization. ICSI (Intracytoplasmic Sperm Injection) involves directly injecting a single sperm into each egg. ICSI is used when there are male fertility issues or previous IVF cycles had poor fertilization.',
    },
    {
      question: 'How much does fertility treatment cost?',
      answer: 'Treatment costs vary depending on the specific procedures required. We offer transparent pricing and detailed cost breakdowns during your consultation. We also provide guidance on payment options and any available financial assistance.',
    },
    {
      question: 'What tests are required before starting treatment?',
      answer: 'Initial fertility assessments include hormone tests, ultrasounds, semen analysis, and sometimes additional tests like HSG or genetic screening. We\'ll create a comprehensive testing plan based on your specific situation during your first consultation.',
    },
    {
      question: 'Can I continue working during IVF treatment?',
      answer: 'Most patients can continue their normal activities including work. You\'ll need to attend several appointments for monitoring and procedures. The egg retrieval requires 1-2 days of rest. Many patients successfully balance treatment with their careers.',
    },
    {
      question: 'What is the best age for fertility treatment?',
      answer: 'While fertility naturally declines with age, successful treatments are possible at various ages. Generally, the earlier treatment begins, the better the outcomes. However, we successfully treat patients across all age groups with customized approaches.',
    },
    {
      question: 'Do you offer counseling services?',
      answer: 'Yes, we provide comprehensive counseling services including fertility counseling, emotional support, and guidance throughout your treatment journey. Our counselors help you navigate the physical and emotional aspects of fertility treatment.',
    },
  ] : [
    {
      question: 'आईभीएफ के हो र यो कसरी काम गर्छ?',
      answer: 'इन भिट्रो फर्टिलाइजेशन (आईभीएफ) एक प्रक्रिया हो जहाँ अण्डाशयबाट अण्डाहरू निकालिन्छन् र प्रयोगशालामा शुक्राणुसँग निषेचित गरिन्छ। परिणामस्वरूप भ्रूणहरू त्यसपछि गर्भाशयमा स्थानान्तरण गरिन्छ। सम्पूर्ण प्रक्रिया सामान्यतया प्रति चक्र २-३ हप्ता लाग्छ।',
    },
    {
      question: 'आईभीएफ उपचारको सफलता दर कति छ?',
      answer: 'सफलता दर उमेर, समग्र स्वास्थ्य र विशिष्ट प्रजनन समस्याहरूमा आधारित हुन्छ। सामान्यतया, ३५ वर्ष मुनिका महिलाहरूको सफलता दर उच्च हुन्छ। हाम्रो केन्द्रमा, हामी व्यक्तिगत उपचार योजना र उन्नत प्रविधि मार्फत उच्च सफलता दर कायम राख्छौं।',
    },
    {
      question: 'आईभीएफ प्रक्रिया कति समय लाग्छ?',
      answer: 'एक पूर्ण आईभीएफ चक्र सामान्यतया सुरुदेखि अन्त्यसम्म ४-६ हप्ता लाग्छ। यसमा डिम्बाशय उत्तेजना (१०-१४ दिन), अण्डा पुनःप्राप्ति, निषेचन, भ्रूण विकास (३-५ दिन), र भ्रूण स्थानान्तरण समावेश छ। स्थानान्तरण पछि २ हप्तामा गर्भावस्था परीक्षण गरिन्छ।',
    },
    {
      question: 'के आईभीएफ प्रक्रिया दुखाइ हुन्छ?',
      answer: 'अधिकांश आईभीएफ प्रक्रियाहरू दुखाइ हुँदैनन्। दैनिक हर्मोन इंजेक्शनले सानो असुविधा हुन सक्छ। अण्डा पुनःप्राप्ति शामक अन्तर्गत गरिन्छ, त्यसैले तपाईंले प्रक्रियाको समयमा पीडा महसुस गर्नुहुन्न। केही महिलाहरूले पछि हल्का ऐंठन अनुभव गर्छन्।',
    },
    {
      question: 'आईभीएफ र आईसीएसआई बीचको फरक के हो?',
      answer: 'आईभीएफमा प्राकृतिक निषेचनको लागि शुक्राणु र अण्डाहरू सँगै मिसाइन्छ। आईसीएसआई (इन्ट्रासाइटोप्लाज्मिक स्पर्म इन्जेक्शन) मा प्रत्येक अण्डामा एकल शुक्राणु सीधा इंजेक्ट गरिन्छ। आईसीएसआई पुरुष प्रजनन समस्याहरू वा अघिल्लो आईभीएफ चक्रहरूमा कमजोर निषेचन भएको अवस्थामा प्रयोग गरिन्छ।',
    },
    {
      question: 'प्रजनन उपचारको लागत कति छ?',
      answer: 'उपचार लागत आवश्यक विशिष्ट प्रक्रियाहरूमा निर्भर गर्दछ। हामी पारदर्शी मूल्य निर्धारण र तपाईंको परामर्शको समयमा विस्तृत लागत विवरण प्रदान गर्छौं। हामी भुक्तानी विकल्पहरू र कुनै उपलब्ध वित्तीय सहायताको बारेमा मार्गदर्शन पनि प्रदान गर्छौं।',
    },
    {
      question: 'उपचार सुरु गर्नु अघि कुन परीक्षणहरू आवश्यक छन्?',
      answer: 'प्रारम्भिक प्रजनन मूल्याङ्कनमा हर्मोन परीक्षण, अल्ट्रासाउन्ड, वीर्य विश्लेषण, र कहिलेकाहीं एचएसजी वा आनुवंशिक स्क्रिनिंग जस्ता अतिरिक्त परीक्षणहरू समावेश छन्। हामी तपाईंको पहिलो परामर्शको समयमा तपाईंको विशिष्ट अवस्थामा आधारित व्यापक परीक्षण योजना बनाउनेछौं।',
    },
    {
      question: 'के म आईभीएफ उपचारको समयमा काम जारी राख्न सक्छु?',
      answer: 'अधिकांश बिरामीहरूले काम सहित आफ्नो सामान्य गतिविधिहरू जारी राख्न सक्छन्। तपाईंले निगरानी र प्रक्रियाहरूको लागि धेरै भेटहरूमा उपस्थित हुनु पर्छ। अण्डा पुनःप्राप्तिमा १-२ दिन आराम आवश्यक छ। धेरै बिरामीहरूले सफलतापूर्वक आफ्नो करियरसँग उपचार सन्तुलन गर्छन्।',
    },
    {
      question: 'प्रजनन उपचारको लागि सबैभन्दा राम्रो उमेर कति हो?',
      answer: 'प्रजनन क्षमता उमेरसँगै प्राकृतिक रूपमा घट्दा पनि, विभिन्न उमेरमा सफल उपचार सम्भव छ। सामान्यतया, उपचार जति चाँडो सुरु हुन्छ, परिणाम त्यति राम्रो हुन्छ। तथापि, हामी अनुकूलित दृष्टिकोणका साथ सबै उमेर समूहका बिरामीहरूलाई सफलतापूर्वक उपचार गर्छौं।',
    },
    {
      question: 'के तपाईंले परामर्श सेवाहरू प्रदान गर्नुहुन्छ?',
      answer: 'हो, हामी प्रजनन परामर्श, भावनात्मक समर्थन, र तपाईंको उपचार यात्रा भरि मार्गदर्शन सहित व्यापक परामर्श सेवाहरू प्रदान गर्छौं। हाम्रा सल्लाहकारहरूले तपाईंलाई प्रजनन उपचारको शारीरिक र भावनात्मक पक्षहरू नेभिगेट गर्न मद्दत गर्छन्।',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {language === 'en' ? 'Frequently Asked Questions' : 'बारम्बार सोधिने प्रश्नहरू'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'en'
                ? 'Find answers to common questions about fertility treatment and our services'
                : 'प्रजनन उपचार र हाम्रा सेवाहरूको बारेमा सामान्य प्रश्नहरूको जवाफ खोज्नुहोस्'}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg animate-scale-in">
              <CardContent className="p-6 md:p-8">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-border rounded-lg px-4 hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-semibold text-foreground pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <div className="mt-12 text-center p-8 bg-card rounded-lg border border-border animate-fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {language === 'en' ? 'Still Have Questions?' : 'अझै प्रश्नहरू छन्?'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'en'
                  ? 'Our team is here to help. Contact us for personalized answers.'
                  : 'हाम्रो टोली मद्दत गर्न यहाँ छ। व्यक्तिगत जवाफको लागि हामीलाई सम्पर्क गर्नुहोस्।'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  {language === 'en' ? 'Contact Us' : 'सम्पर्क गर्नुहोस्'}
                </a>
                <a
                  href="tel:4785087"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors"
                >
                  {language === 'en' ? 'Call: 4785087' : 'फोन: ४७८५०८७'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
