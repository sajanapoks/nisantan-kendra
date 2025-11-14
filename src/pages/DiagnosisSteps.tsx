import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  TestTube, 
  Activity, 
  FileText, 
  ClipboardList,
  CheckCircle2
} from 'lucide-react';

const DiagnosisSteps = () => {
  const { language } = useLanguage();

  const steps = [
    {
      number: 1,
      icon: Users,
      title: language === 'en' ? 'Initial Consultation' : 'प्रारम्भिक परामर्श',
      points: [
        language === 'en' 
          ? 'Both partners meet Reproductive Endocrinologist'
          : 'दुवै साझेदार प्रजनन एन्डोक्रिनोलोजिस्टलाई भेट्छन्',
        language === 'en'
          ? 'Bring all previous medical reports'
          : 'सबै अघिल्लो चिकित्सा रिपोर्टहरू ल्याउनुहोस्',
        language === 'en'
          ? 'Detailed counseling session explaining treatment pattern'
          : 'उपचार ढाँचा व्याख्या गर्ने विस्तृत परामर्श सत्र',
      ],
    },
    {
      number: 2,
      icon: TestTube,
      title: language === 'en' ? 'Hormonal Evaluation' : 'हर्मोनल मूल्याङ्कन',
      subtitle: language === 'en' ? 'Day 2/3 of Menstrual Cycle' : 'महिनावारी चक्रको दिन २/३',
      points: [
        language === 'en'
          ? "Wife's hormone testing"
          : 'पत्नीको हर्मोन परीक्षण',
        language === 'en'
          ? 'Husband semen analysis (after 3 days abstinence)'
          : 'पतिको वीर्य विश्लेषण (३ दिन परहेज पछि)',
        language === 'en'
          ? 'Normal: >40M count, >50% motility, >4% morphology'
          : 'सामान्य: >४०M संख्या, >५०% गतिशीलता, >४% आकारविज्ञान',
        language === 'en'
          ? 'Additional hormone tests if semen abnormal'
          : 'वीर्य असामान्य भएमा थप हर्मोन परीक्षण',
      ],
    },
    {
      number: 3,
      icon: Activity,
      title: language === 'en' ? 'Ultrasound Evaluation' : 'अल्ट्रासाउन्ड मूल्याङ्कन',
      subtitle: language === 'en' ? 'Day 2-5 of Cycle' : 'चक्रको दिन २-५',
      points: [
        language === 'en'
          ? 'Transvaginal USG performed'
          : 'ट्रान्सभ्याजिनल यूएसजी गरिन्छ',
        language === 'en'
          ? 'Check for cysts, tumors, fibroids'
          : 'सिस्ट, ट्युमर, फाइब्रोइड जाँच',
        language === 'en'
          ? 'Assess ovarian health and structure'
          : 'डिम्बग्रंथि स्वास्थ्य र संरचना मूल्याङ्कन',
      ],
    },
    {
      number: 4,
      icon: FileText,
      title: language === 'en' ? 'Tube Patency Test (HSG)' : 'ट्यूब प्याटेन्सी परीक्षण (HSG)',
      subtitle: language === 'en' ? 'Day 6-9 of Cycle' : 'चक्रको दिन ६-९',
      points: [
        language === 'en'
          ? 'Radiologic or Sonographic HSG'
          : 'रेडियोलोजिक वा सोनोग्राफिक HSG',
        language === 'en'
          ? 'Checks if fallopian tubes are open'
          : 'फलोपियन ट्यूब खुला छन् कि छैनन् जाँच गर्छ',
        language === 'en'
          ? 'Normal result: Both tubes patent'
          : 'सामान्य परिणाम: दुवै ट्यूब खुला',
      ],
    },
    {
      number: 5,
      icon: ClipboardList,
      title: language === 'en' ? 'Special Tests' : 'विशेष परीक्षणहरू',
      subtitle: language === 'en' ? 'If Recurrent Abortion' : 'यदि बारम्बार गर्भपात',
      points: [
        language === 'en'
          ? 'TORCH screening'
          : 'TORCH स्क्रिनिङ',
        language === 'en'
          ? 'Blood glucose levels'
          : 'रगत ग्लुकोज स्तर',
        language === 'en'
          ? 'Genetic testing if indicated'
          : 'संकेत गरिएमा आनुवंशिक परीक्षण',
        language === 'en'
          ? 'Additional investigations as needed'
          : 'आवश्यकता अनुसार थप अनुसन्धान',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {language === 'en' ? 'Infertility Diagnosis Steps' : 'बाँझोपन निदान चरणहरू'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'en'
              ? 'A comprehensive 5-step process to accurately diagnose and plan your treatment'
              : 'तपाईंको उपचारको सटीक निदान र योजना बनाउनको लागि व्यापक ५-चरण प्रक्रिया'}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={step.number}
              className="hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {language === 'en' ? 'Step' : 'चरण'} {step.number}
                        </Badge>
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        {step.subtitle && (
                          <p className="text-sm text-muted-foreground mt-1">{step.subtitle}</p>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-16">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                {language === 'en' ? 'Ready to Start Your Diagnosis?' : 'आफ्नो निदान सुरु गर्न तयार हुनुहुन्छ?'}
              </h2>
              <p className="text-muted-foreground mb-6">
                {language === 'en'
                  ? 'Book a consultation with our experienced specialists today'
                  : 'आज नै हाम्रा अनुभवी विशेषज्ञहरूसँग परामर्श बुक गर्नुहोस्'}
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default DiagnosisSteps;
