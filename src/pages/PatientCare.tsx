import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HeartHandshake, FileCheck, Shield, Clock } from 'lucide-react';

const PatientCare = () => {
  const { language } = useLanguage();

  const careServices = [
    {
      icon: HeartHandshake,
      title: language === 'en' ? 'Counseling Services' : 'परामर्श सेवाहरू',
      description: language === 'en'
        ? 'Professional counseling to help you understand your fertility options and make informed decisions'
        : 'तपाईंको प्रजनन विकल्पहरू बुझ्न र सूचित निर्णयहरू गर्न मद्दत गर्न व्यावसायिक परामर्श',
    },
    {
      icon: FileCheck,
      title: language === 'en' ? 'Comprehensive Assessment' : 'व्यापक मूल्याङ्कन',
      description: language === 'en'
        ? 'Detailed fertility evaluation including medical history, physical examination, and diagnostic tests'
        : 'चिकित्सा इतिहास, शारीरिक परीक्षा, र निदान परीक्षणहरू सहित विस्तृत प्रजनन मूल्याङ्कन',
    },
    {
      icon: Shield,
      title: language === 'en' ? 'Privacy & Confidentiality' : 'गोपनीयता र गोपनीयता',
      description: language === 'en'
        ? 'Strict confidentiality protocols to protect your personal and medical information'
        : 'तपाईंको व्यक्तिगत र चिकित्सा जानकारी सुरक्षित गर्न कडा गोपनीयता प्रोटोकलहरू',
    },
    {
      icon: Clock,
      title: language === 'en' ? 'Flexible Scheduling' : 'लचिलो समयतालिका',
      description: language === 'en'
        ? 'Convenient appointment times to accommodate your schedule and minimize disruption'
        : 'तपाईंको तालिका समायोजन गर्न र अवरोध न्यूनीकरण गर्न सुविधाजनक अपोइन्टमेन्ट समय',
    },
  ];

  const faqs = [
    {
      question: language === 'en' ? 'How do I book an appointment?' : 'म कसरी अपोइन्टमेन्ट बुक गर्ने?',
      answer: language === 'en'
        ? 'You can book an appointment by calling us at 4785087 or visiting our center at Bijulibazar, New Baneshwor, Kathmandu. We recommend calling ahead to schedule a consultation with our fertility specialists.'
        : 'तपाईं हामीलाई ४७८५०८७ मा कल गरेर वा बिजुलीबजार, नयाँ बानेश्वर, काठमाडौंमा रहेको हाम्रो केन्द्रमा आएर अपोइन्टमेन्ट बुक गर्न सक्नुहुन्छ। हामी हाम्रा प्रजनन विशेषज्ञहरूसँग परामर्शको लागि अगाडि कल गर्न सिफारिस गर्छौं।',
    },
    {
      question: language === 'en' ? 'What should I bring to my first visit?' : 'मेरो पहिलो भेटमा म के ल्याउनु पर्छ?',
      answer: language === 'en'
        ? 'Please bring any previous medical records, test results, and a list of current medications. If you have had fertility tests or treatments elsewhere, bring those reports as well. This helps us understand your medical history better.'
        : 'कृपया कुनै पनि अघिल्लो चिकित्सा रेकर्ड, परीक्षण नतिजाहरू, र हालको औषधिहरूको सूची ल्याउनुहोस्। यदि तपाईंले अन्यत्र प्रजनन परीक्षण वा उपचार गर्नुभएको छ भने, ती रिपोर्टहरू पनि ल्याउनुहोस्। यसले हामीलाई तपाईंको चिकित्सा इतिहास राम्रोसँग बुझ्न मद्दत गर्दछ।',
    },
    {
      question: language === 'en' ? 'How long does IVF treatment take?' : 'आईभीएफ उपचार कति समय लाग्छ?',
      answer: language === 'en'
        ? 'A complete IVF cycle typically takes 4-6 weeks from the start of ovarian stimulation to embryo transfer. However, the timeline may vary based on individual circumstances. Your doctor will provide a detailed treatment plan during your consultation.'
        : 'पूर्ण आईभीएफ चक्रमा सामान्यतया डिम्बाशय उत्तेजनाको सुरुवातदेखि भ्रूण स्थानान्तरणसम्म ४-६ हप्ता लाग्छ। तर, समयरेखा व्यक्तिगत परिस्थितिहरूमा आधारित फरक हुन सक्छ। तपाईंको डाक्टरले तपाईंको परामर्शको समयमा विस्तृत उपचार योजना प्रदान गर्नेछ।',
    },
    {
      question: language === 'en' ? 'What is the success rate of IVF?' : 'आईभीएफको सफलता दर कति छ?',
      answer: language === 'en'
        ? 'Success rates vary depending on factors such as age, cause of infertility, and overall health. Generally, younger patients have higher success rates. During your consultation, we will discuss realistic expectations based on your specific situation.'
        : 'सफलता दर उमेर, बाँझोपनको कारण, र समग्र स्वास्थ्य जस्ता कारकहरूमा निर्भर गर्दछ। सामान्यतया, युवा बिरामीहरूको सफलता दर उच्च हुन्छ। तपाईंको परामर्शको समयमा, हामी तपाईंको विशिष्ट स्थितिमा आधारित यथार्थवादी अपेक्षाहरू छलफल गर्नेछौं।',
    },
    {
      question: language === 'en' ? 'Is the treatment painful?' : 'के उपचार पीडादायक छ?',
      answer: language === 'en'
        ? 'Most IVF procedures involve minimal discomfort. Egg retrieval is done under sedation, so you won\'t feel pain during the procedure. Some patients may experience mild cramping or bloating from hormone medications, but this is generally manageable.'
        : 'धेरैजसो आईभीएफ प्रक्रियाहरूमा न्यूनतम असुविधा हुन्छ। अण्डा पुनर्प्राप्ति बेहोशको अवस्थामा गरिन्छ, त्यसैले तपाईंले प्रक्रियाको समयमा दुखाइ महसुस गर्नुहुन्न। केही बिरामीहरूले हर्मोन औषधिहरूबाट हल्का दुखाइ वा सूजन अनुभव गर्न सक्छन्, तर यो सामान्यतया व्यवस्थापन योग्य हुन्छ।',
    },
    {
      question: language === 'en' ? 'Do you accept insurance?' : 'के तपाईं बीमा स्वीकार गर्नुहुन्छ?',
      answer: language === 'en'
        ? 'We work with several insurance providers. Please bring your insurance information during your first visit, and our staff will help verify your coverage. We also offer flexible payment options for treatments not covered by insurance.'
        : 'हामी धेरै बीमा प्रदायकहरूसँग काम गर्छौं। कृपया तपाईंको पहिलो भेटको समयमा तपाईंको बीमा जानकारी ल्याउनुहोस्, र हाम्रो कर्मचारीले तपाईंको कभरेज प्रमाणित गर्न मद्दत गर्नेछ। हामी बीमाद्वारा कभर नगरिएका उपचारहरूको लागि लचिलो भुक्तानी विकल्पहरू पनि प्रदान गर्छौं।',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            {language === 'en' ? 'Patient Care' : 'बिरामी हेरचाह'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'en'
              ? 'Compassionate care and comprehensive support throughout your fertility journey'
              : 'तपाईंको प्रजनन यात्राभर करुणामय हेरचाह र व्यापक समर्थन'}
          </p>
        </div>

        {/* Care Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
            {language === 'en' ? 'Our Care Services' : 'हाम्रा हेरचाह सेवाहरू'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Treatment Process */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'en' ? 'Your Journey With Us' : 'हामीसँग तपाईंको यात्रा'}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">
                      {language === 'en' ? 'Initial Consultation' : 'प्रारम्भिक परामर्श'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'en'
                        ? 'Meet with our fertility specialist to discuss your medical history and treatment options'
                        : 'तपाईंको चिकित्सा इतिहास र उपचार विकल्पहरू छलफल गर्न हाम्रो प्रजनन विशेषज्ञसँग भेट्नुहोस्'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">
                      {language === 'en' ? 'Diagnostic Testing' : 'निदान परीक्षण'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'en'
                        ? 'Comprehensive fertility assessment including blood tests, ultrasound, and other necessary examinations'
                        : 'रगत परीक्षण, अल्ट्रासाउन्ड, र अन्य आवश्यक परीक्षाहरू सहित व्यापक प्रजनन मूल्याङ्कन'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">
                      {language === 'en' ? 'Personalized Treatment Plan' : 'व्यक्तिगत उपचार योजना'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'en'
                        ? 'Receive a customized treatment plan based on your unique situation and goals'
                        : 'तपाईंको अनौठो स्थिति र लक्ष्यहरूमा आधारित अनुकूलित उपचार योजना प्राप्त गर्नुहोस्'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">
                      {language === 'en' ? 'Treatment & Support' : 'उपचार र समर्थन'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'en'
                        ? 'Begin treatment with continuous support and monitoring from our expert team'
                        : 'हाम्रो विशेषज्ञ टोलीबाट निरन्तर समर्थन र अनुगमनका साथ उपचार सुरु गर्नुहोस्'}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
            {language === 'en' ? 'Frequently Asked Questions' : 'बारम्बार सोधिने प्रश्नहरू'}
          </h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Privacy Policy */}
        <section className="mt-12">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                {language === 'en' ? 'Privacy & Confidentiality' : 'गोपनीयता र गोपनीयता'}
              </h2>
              <p className="text-muted-foreground mb-4">
                {language === 'en'
                  ? 'We are committed to protecting your privacy and maintaining the confidentiality of your medical information. All patient records are kept secure and are only accessible to authorized medical personnel involved in your care.'
                  : 'हामी तपाईंको गोपनीयता सुरक्षित गर्न र तपाईंको चिकित्सा जानकारीको गोपनीयता कायम राख्न प्रतिबद्ध छौं। सबै बिरामी रेकर्डहरू सुरक्षित राखिन्छन् र तपाईंको हेरचाहमा संलग्न अधिकृत चिकित्सा कर्मचारीहरूलाई मात्र पहुँचयोग्य छन्।'}
              </p>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Your personal and medical information will never be shared with third parties without your explicit consent, except as required by law.'
                  : 'तपाईंको व्यक्तिगत र चिकित्सा जानकारी कानूनद्वारा आवश्यक बाहेक, तपाईंको स्पष्ट सहमति बिना कहिल्यै तेस्रो पक्षसँग साझा गरिने छैन।'}
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default PatientCare;
