import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Award, Users, Building } from 'lucide-react';

const About = () => {
  const { language, t } = useLanguage();

  const milestones = [
    {
      year: '1992',
      title: language === 'en' ? 'Foundation' : 'स्थापना',
      description: language === 'en'
        ? 'Reproductive Health Care Center established'
        : 'प्रजनन स्वास्थ्य हेरचाह केन्द्र स्थापना',
    },
    {
      year: '1993',
      title: language === 'en' ? 'Renamed as Infertility Center' : 'इनफर्टिलिटी सेन्टरको रूपमा पुनर्नामाकरण',
      description: language === 'en'
        ? "Nepal's first infertility center & first hormone laboratory"
        : 'नेपालको पहिलो बाँझोपन केन्द्र र पहिलो हर्मोन प्रयोगशाला',
    },
    {
      year: '1995',
      title: language === 'en' ? 'First IUI Center' : 'पहिलो आईयूआई केन्द्र',
      description: language === 'en'
        ? 'Pioneered IUI treatments in Nepal'
        : 'नेपालमा आईयूआई उपचारको अग्रणी',
    },
    {
      year: '2002',
      title: language === 'en' ? 'First IVF Center' : 'पहिलो आईभीएफ केन्द्र',
      description: language === 'en'
        ? 'Started IVF services with state-of-the-art facility'
        : 'अत्याधुनिक सुविधासहित आईभीएफ सेवा सुरु',
    },
    {
      year: '2003',
      title: language === 'en' ? 'First IVF Baby' : 'पहिलो आईभीएफ बच्चा',
      description: language === 'en'
        ? 'First IVF baby in Nepal by Nepalese specialist'
        : 'नेपाली विशेषज्ञद्वारा नेपालमा पहिलो आईभीएफ बच्चा',
    },
    {
      year: '2024',
      title: language === 'en' ? '8000+ Happy Parents' : '८०००+ खुशी आमाबुवा',
      description: language === 'en'
        ? '32 years of trusted service with modern lab'
        : 'आधुनिक प्रयोगशालासहित ३२ वर्षको विश्वसनीय सेवा',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">{t('aboutTitle')}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'en'
              ? 'Leading the way in fertility treatment in Nepal since 1992, helping over 25,000 couples'
              : '१९९२ देखि नेपालमा प्रजनन उपचारमा अग्रणी, २५,०००+ दम्पतीहरूलाई सहयोग'}
          </p>
        </div>

        {/* History */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">{t('ourHistory')}</h2>
              </div>
              <div className="prose max-w-none text-muted-foreground">
                <p className="mb-4">
                  {language === 'en'
                    ? 'Nisantan Kendra was established in 1992, pioneering fertility treatment in Nepal. Since our foundation, we have been dedicated to providing comprehensive fertility, hormone, and specialized health treatments to all patients.'
                    : 'निसन्तान केन्द्र १९९२ मा स्थापित भएको थियो, नेपालमा प्रजनन उपचारको अग्रणी। हाम्रो स्थापनादेखि नै, हामी सबै बिरामीहरूलाई व्यापक प्रजनन, हार्मोन र विशेष स्वास्थ्य उपचार प्रदान गर्न समर्पित छौं।'}
                </p>
                <p className="mb-4">
                  {language === 'en'
                    ? 'Over the past three decades, we have helped more than 25,000 couples realize their dreams of parenthood. Our commitment to excellence and compassionate care has made us a trusted name in reproductive health in Nepal.'
                    : 'विगत तीन दशकमा, हामीले २५,०००+ दम्पतीहरूलाई आमाबुवा हुने सपना साकार गर्न मद्दत गरेका छौं। उत्कृष्टता र दयालु हेरचाहप्रतिको हाम्रो प्रतिबद्धताले हामीलाई नेपालमा प्रजनन स्वास्थ्यमा विश्वसनीय नाम बनाएको छ।'}
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Milestones */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-foreground">
            {language === 'en' ? 'Our Journey' : 'हाम्रो यात्रा'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-foreground">
            {language === 'en' ? 'Why Choose Nisantan Kendra' : 'किन निसन्तान केन्द्र छन्नुहोस्'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 text-foreground">
                  {language === 'en' ? 'Experienced Leadership' : 'अनुभवी नेतृत्व'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'en'
                    ? 'Most experienced doctors in Nepal with 32+ years of expertise in reproductive medicine and fertility treatment.'
                    : 'प्रजनन चिकित्सा र प्रजनन उपचारमा ३२+ वर्षको विशेषज्ञतासहित नेपालका सबैभन्दा अनुभवी डाक्टरहरू।'}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 text-foreground">
                  {language === 'en' ? 'Affordable Care' : 'किफायती हेरचाह'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'en'
                    ? 'Services accessible to all socio-economic groups with transparent pricing and honest counseling approach.'
                    : 'पारदर्शी मूल्य निर्धारण र इमानदार परामर्श दृष्टिकोणका साथ सबै सामाजिक-आर्थिक समूहहरूलाई पहुँचयोग्य सेवाहरू।'}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-accent/5 to-accent/10">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 text-foreground">
                  {language === 'en' ? 'State-of-the-art Lab' : 'अत्याधुनिक प्रयोगशाला'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'en'
                    ? 'Modern laboratory with advanced technology ensuring accurate diagnosis and effective treatment protocols.'
                    : 'सटीक निदान र प्रभावकारी उपचार प्रोटोकल सुनिश्चित गर्ने उन्नत प्रविधिसहित आधुनिक प्रयोगशाला।'}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/5">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 text-foreground">
                  {language === 'en' ? 'Ethical & Evidence-Based' : 'नैतिक र प्रमाण-आधारित'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'en'
                    ? 'Honest, transparent counseling with evidence-based treatments. 15% of Nepali couples face infertility - we understand and help.'
                    : 'प्रमाण-आधारित उपचारसहित इमानदार, पारदर्शी परामर्श। १५% नेपाली दम्पतीहरूले बाँझोपनको सामना गर्छन् - हामी बुझ्छौं र मद्दत गर्छौं।'}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">{t('ourMission')}</h2>
              </div>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'To provide comprehensive, ethical, advanced infertility care to help every couple achieve parenthood. We are committed to evidence-based treatment, transparent counseling, and making quality care affordable for all socio-economic groups in Nepal.'
                  : 'हरेक दम्पतीलाई आमाबुवा हुन मद्दत गर्न व्यापक, नैतिक, उन्नत बाँझोपन हेरचाह प्रदान गर्ने। हामी प्रमाण-आधारित उपचार, पारदर्शी परामर्श र नेपालका सबै सामाजिक-आर्थिक समूहहरूका लागि गुणस्तरीय हेरचाह किफायती बनाउन प्रतिबद्ध छौं।'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">{t('ourVision')}</h2>
              </div>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'To be Nepal\'s leading infertility center, recognized for innovation, excellence, and compassionate care. We envision helping thousands more couples achieve parenthood through honest counseling, modern technology, and experienced specialists.'
                  : 'नवीनता, उत्कृष्टता र दयालु हेरचाहका लागि मान्यता प्राप्त, नेपालको अग्रणी बाँझोपन केन्द्र बन्ने। हामी इमानदार परामर्श, आधुनिक प्रविधि र अनुभवी विशेषज्ञहरू मार्फत हजारौं थप दम्पतीहरूलाई आमाबुवा हुन मद्दत गर्ने परिकल्पना गर्छौं।'}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Affiliations */}
        <section>
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  {language === 'en' ? 'Affiliations' : 'सम्बन्धता'}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Medicity Hospital</h3>
                  <p className="text-muted-foreground">
                    {language === 'en'
                      ? 'Partner hospital for comprehensive medical support and facilities'
                      : 'व्यापक चिकित्सा सहयोग र सुविधाहरूको लागि साझेदार अस्पताल'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Reliable Lab</h3>
                  <p className="text-muted-foreground">
                    {language === 'en'
                      ? 'Advanced laboratory services for accurate diagnostic testing'
                      : 'सटीक निदान परीक्षणको लागि उन्नत प्रयोगशाला सेवाहरू'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
