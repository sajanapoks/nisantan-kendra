import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Activity, 
  TestTube2, 
  Heart, 
  Syringe, 
  FlaskConical,
  UserX,
  Ban,
  Baby
} from 'lucide-react';

const TreatmentOptions = () => {
  const { language } = useLanguage();

  const treatments = [
    {
      icon: Activity,
      title: language === 'en' ? 'Hormonal Imbalance' : 'हर्मोनल असंतुलन',
      points: [
        language === 'en' ? 'Hormone regulation therapy' : 'हर्मोन नियमन थेरापी',
        language === 'en' ? 'Period regularization' : 'महिनावारी नियमितीकरण',
        language === 'en' ? 'Ovarian stimulants' : 'डिम्बग्रंथि उत्तेजक',
        language === 'en' ? 'USG follow-up monitoring' : 'यूएसजी फलोअप निगरानी',
      ],
      color: 'from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20',
    },
    {
      icon: TestTube2,
      title: language === 'en' ? 'Poor Sperm Count' : 'कम शुक्राणु संख्या',
      points: [
        language === 'en' ? 'Hormone therapy for men' : 'पुरुषहरूको लागि हर्मोन थेरापी',
        language === 'en' ? 'Sperm health supplements' : 'शुक्राणु स्वास्थ्य पूरक',
        language === 'en' ? "IUI with husband's sperm" : 'पतिको शुक्राणुसँग आईयूआई',
        language === 'en' ? 'Lifestyle counseling' : 'जीवनशैली परामर्श',
      ],
      color: 'from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20',
    },
    {
      icon: UserX,
      title: language === 'en' ? 'Nil Sperm (Azoospermia)' : 'शून्य शुक्राणु',
      points: [
        language === 'en' ? 'Donor IUI option available' : 'दाता आईयूआई विकल्प उपलब्ध',
        language === 'en' ? 'Written consent required' : 'लिखित सहमति आवश्यक',
        language === 'en' ? 'Ethical & confidential process' : 'नैतिक र गोप्य प्रक्रिया',
        language === 'en' ? 'Complete counseling provided' : 'पूर्ण परामर्श प्रदान गरिएको',
      ],
      color: 'from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20',
    },
    {
      icon: Heart,
      title: language === 'en' ? 'Recurrent Abortions' : 'बारम्बार गर्भपात',
      points: [
        language === 'en' ? 'Thorough diagnostic testing' : 'पूर्ण निदान परीक्षण',
        language === 'en' ? 'TORCH screening' : 'TORCH स्क्रिनिङ',
        language === 'en' ? 'Genetic counseling' : 'आनुवंशिक परामर्श',
        language === 'en' ? 'Treatment based on root cause' : 'मूल कारणमा आधारित उपचार',
      ],
      color: 'from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20',
    },
    {
      icon: Ban,
      title: language === 'en' ? 'Blocked Tubes' : 'अवरुद्ध ट्यूबहरू',
      points: [
        language === 'en' ? 'Clear Passage Therapy' : 'क्लियर पासेज थेरापी',
        language === 'en' ? 'Hydrotubation procedure' : 'हाइड्रोट्यूबेशन प्रक्रिया',
        language === 'en' ? '1-3 treatment cycles' : '१-३ उपचार चक्र',
        language === 'en' ? 'Non-surgical options first' : 'पहिले गैर-शल्यक्रिया विकल्प',
      ],
      color: 'from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20',
    },
    {
      icon: FlaskConical,
      title: language === 'en' ? 'IVF/ICSI Treatment' : 'आईभीएफ/आईसीएसआई उपचार',
      points: [
        language === 'en' ? 'Both tubes blocked' : 'दुवै ट्यूब अवरुद्ध',
        language === 'en' ? 'Severe male factor' : 'गम्भीर पुरुष कारक',
        language === 'en' ? 'Poor egg quality' : 'खराब अण्डा गुणस्तर',
        language === 'en' ? 'Genetic disorders' : 'आनुवंशिक विकार',
        language === 'en' ? 'Multiple failed IUI cycles' : 'धेरै असफल आईयूआई चक्र',
      ],
      color: 'from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20',
    },
    {
      icon: Baby,
      title: language === 'en' ? 'Adoption Counseling' : 'धर्मपुत्र परामर्श',
      points: [
        language === 'en' ? 'For couples who prefer adoption' : 'धर्मपुत्र रुचाउने दम्पतीहरूको लागि',
        language === 'en' ? 'Complete guidance provided' : 'पूर्ण मार्गदर्शन प्रदान गरिएको',
        language === 'en' ? 'Legal process support' : 'कानुनी प्रक्रिया समर्थन',
        language === 'en' ? 'Emotional counseling' : 'भावनात्मक परामर्श',
      ],
      color: 'from-teal-50 to-teal-100 dark:from-teal-950/20 dark:to-teal-900/20',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {language === 'en' ? 'Treatment Options' : 'उपचार विकल्पहरू'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'en'
              ? 'Personalized treatment plans based on your specific diagnosis and needs'
              : 'तपाईंको विशेष निदान र आवश्यकतामा आधारित व्यक्तिगत उपचार योजनाहरू'}
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {treatments.map((treatment, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <CardContent className={`p-6 bg-gradient-to-br ${treatment.color}`}>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <treatment.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-3 text-foreground">
                      {treatment.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {treatment.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="space-y-6">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                {language === 'en' ? 'Not Sure Which Treatment is Right for You?' : 'कुन उपचार तपाईंका लागि सही छ भनेर निश्चित छैन?'}
              </h2>
              <p className="text-muted-foreground mb-6">
                {language === 'en'
                  ? 'Start with our comprehensive diagnosis process to determine the best treatment plan'
                  : 'उत्तम उपचार योजना निर्धारण गर्न हाम्रो व्यापक निदान प्रक्रियाबाट सुरु गर्नुहोस्'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/diagnosis-steps">
                    {language === 'en' ? 'View Diagnosis Steps' : 'निदान चरणहरू हेर्नुहोस्'}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">
                    {language === 'en' ? 'Book Consultation' : 'परामर्श बुक गर्नुहोस्'}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default TreatmentOptions;
