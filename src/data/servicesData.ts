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
  Scale,
  LucideIcon
} from 'lucide-react';

export interface ServiceData {
  id: string;
  icon: LucideIcon;
  title: {
    en: string;
    ne: string;
  };
  shortDescription: {
    en: string;
    ne: string;
  };
  fullDescription: {
    en: string;
    ne: string;
  };
  category: string;
  benefits: {
    en: string[];
    ne: string[];
  };
  procedure: {
    en: string[];
    ne: string[];
  };
  whoIsItFor: {
    en: string[];
    ne: string[];
  };
  successRate?: {
    en: string;
    ne: string;
  };
  duration?: {
    en: string;
    ne: string;
  };
}

export const servicesData: ServiceData[] = [
  {
    id: 'ivf',
    icon: TestTube,
    title: {
      en: 'IVF (In Vitro Fertilization)',
      ne: 'आईभीएफ (इन भिट्रो फर्टिलाइजेशन)'
    },
    shortDescription: {
      en: 'Advanced IVF treatment with high success rates using state-of-the-art technology and personalized protocols.',
      ne: 'अत्याधुनिक प्रविधि र व्यक्तिगत प्रोटोकल प्रयोग गरी उच्च सफलता दरसहित उन्नत आईभीएफ उपचार।'
    },
    fullDescription: {
      en: 'In Vitro Fertilization (IVF) is a comprehensive assisted reproductive technology that involves retrieving eggs from a woman\'s ovaries, fertilizing them with sperm in a laboratory, and transferring the resulting embryo(s) back into the uterus. Our state-of-the-art IVF unit offers personalized treatment protocols tailored to each patient\'s unique medical history and needs.',
      ne: 'इन भिट्रो फर्टिलाइजेशन (आईभीएफ) एक व्यापक सहायक प्रजनन प्रविधि हो जसमा महिलाको अंडाशयबाट अण्डा निकाल्ने, प्रयोगशालामा शुक्राणुसँग निषेचन गर्ने र परिणामी भ्रूण गर्भाशयमा स्थानान्तरण गर्ने समावेश छ।'
    },
    category: 'Primary',
    benefits: {
      en: [
        'High success rates with advanced technology',
        'Personalized treatment protocols',
        'Comprehensive pre-treatment assessment',
        'Experienced medical team',
        'State-of-the-art laboratory facilities'
      ],
      ne: [
        'उन्नत प्रविधिसँग उच्च सफलता दर',
        'व्यक्तिगत उपचार प्रोटोकल',
        'व्यापक पूर्व-उपचार मूल्याङ्कन',
        'अनुभवी चिकित्सा टोली',
        'अत्याधुनिक प्रयोगशाला सुविधाहरू'
      ]
    },
    procedure: {
      en: [
        'Initial consultation and medical assessment',
        'Ovarian stimulation with hormone medications',
        'Egg retrieval procedure',
        'Fertilization in the laboratory',
        'Embryo culture and monitoring',
        'Embryo transfer to the uterus',
        'Pregnancy test after 2 weeks'
      ],
      ne: [
        'प्रारम्भिक परामर्श र चिकित्सा मूल्याङ्कन',
        'हर्मोन औषधि संग अंडाशय उत्तेजना',
        'अण्डा निकाल्ने प्रक्रिया',
        'प्रयोगशालामा निषेचन',
        'भ्रूण संस्कृति र निगरानी',
        'गर्भाशयमा भ्रूण स्थानान्तरण',
        '२ हप्ता पछि गर्भावस्था परीक्षण'
      ]
    },
    whoIsItFor: {
      en: [
        'Women with blocked or damaged fallopian tubes',
        'Male factor infertility',
        'Unexplained infertility',
        'Endometriosis',
        'Ovulation disorders',
        'Previous tubal sterilization or removal'
      ],
      ne: [
        'अवरुद्ध वा क्षतिग्रस्त फलोपियन ट्यूब भएका महिलाहरू',
        'पुरुष कारक बाँझोपन',
        'अस्पष्ट बाँझोपन',
        'एन्डोमेट्रियोसिस',
        'ओव्युलेशन विकारहरू',
        'पूर्व ट्यूबल नसबंदी वा हटाउने'
      ]
    },
    successRate: {
      en: 'Success rates vary by age, typically 40-50% per cycle for women under 35',
      ne: 'सफलता दर उमेर अनुसार भिन्न हुन्छ, सामान्यतया ३५ वर्ष मुनिका महिलाहरूको लागि प्रति चक्र ४०-५०%'
    },
    duration: {
      en: 'Full cycle takes approximately 4-6 weeks',
      ne: 'पूर्ण चक्र लगभग ४-६ हप्ता लाग्छ'
    }
  },
  {
    id: 'icsi',
    icon: Microscope,
    title: {
      en: 'ICSI (Intracytoplasmic Sperm Injection)',
      ne: 'आईसीएसआई (इन्ट्रासाइटोप्लाज्मिक स्पर्म इन्जेक्शन)'
    },
    shortDescription: {
      en: 'Specialized procedure for male infertility where a single sperm is injected directly into an egg.',
      ne: 'पुरुष बाँझोपनको लागि विशेष प्रक्रिया जहाँ एकल शुक्राणु सिधै अण्डामा इन्जेक्ट गरिन्छ।'
    },
    fullDescription: {
      en: 'Intracytoplasmic Sperm Injection (ICSI) is an advanced micromanipulation technique used in conjunction with IVF. A single healthy sperm is carefully selected and injected directly into the center of an egg using specialized microscopic equipment. This technique is particularly beneficial for couples dealing with male factor infertility.',
      ne: 'इन्ट्रासाइटोप्लाज्मिक स्पर्म इन्जेक्शन (आईसीएसआई) आईभीएफसँग संयोजनमा प्रयोग गरिने उन्नत माइक्रोम्यानिपुलेशन प्रविधि हो। विशेष माइक्रोस्कोपिक उपकरण प्रयोग गरेर एकल स्वस्थ शुक्राणु सावधानीपूर्वक चयन गरी अण्डाको केन्द्रमा सिधै इन्जेक्ट गरिन्छ।'
    },
    category: 'Primary',
    benefits: {
      en: [
        'Overcomes severe male factor infertility',
        'Higher fertilization rates',
        'Suitable for low sperm count or quality',
        'Can use surgically retrieved sperm',
        'Precise sperm selection process'
      ],
      ne: [
        'गम्भीर पुरुष कारक बाँझोपन पार गर्दछ',
        'उच्च निषेचन दर',
        'कम शुक्राणु संख्या वा गुणस्तरको लागि उपयुक्त',
        'शल्यक्रिया प्राप्त शुक्राणु प्रयोग गर्न सकिन्छ',
        'सटीक शुक्राणु चयन प्रक्रिया'
      ]
    },
    procedure: {
      en: [
        'Egg retrieval following ovarian stimulation',
        'Sperm collection or surgical extraction',
        'Sperm preparation and selection',
        'Individual sperm injection into each egg',
        'Embryo culture and development monitoring',
        'Embryo transfer',
        'Follow-up pregnancy testing'
      ],
      ne: [
        'अंडाशय उत्तेजना पछि अण्डा निकाल्ने',
        'शुक्राणु संकलन वा शल्यक्रिया निकासी',
        'शुक्राणु तयारी र चयन',
        'प्रत्येक अण्डामा व्यक्तिगत शुक्राणु इन्जेक्शन',
        'भ्रूण संस्कृति र विकास निगरानी',
        'भ्रूण स्थानान्तरण',
        'फलो-अप गर्भावस्था परीक्षण'
      ]
    },
    whoIsItFor: {
      en: [
        'Severe male factor infertility',
        'Low sperm count or motility',
        'Abnormal sperm morphology',
        'Previous failed IVF attempts',
        'Need for surgical sperm retrieval',
        'Immunological infertility'
      ],
      ne: [
        'गम्भीर पुरुष कारक बाँझोपन',
        'कम शुक्राणु संख्या वा गतिशीलता',
        'असामान्य शुक्राणु आकारविज्ञान',
        'पूर्व असफल आईभीएफ प्रयासहरू',
        'शल्यक्रिया शुक्राणु निकासीको आवश्यकता',
        'इम्युनोलोजिकल बाँझोपन'
      ]
    },
    successRate: {
      en: 'Fertilization rates of 70-80% with quality sperm',
      ne: 'गुणस्तर शुक्राणु संग ७०-८०% को निषेचन दर'
    },
    duration: {
      en: 'Similar to IVF, approximately 4-6 weeks',
      ne: 'आईभीएफ जस्तै, लगभग ४-६ हप्ता'
    }
  },
  {
    id: 'iui',
    icon: Syringe,
    title: {
      en: 'IUI (Intrauterine Insemination)',
      ne: 'आईयूआई (इन्ट्रायूटेराइन इन्सेमिनेशन)'
    },
    shortDescription: {
      en: 'Less invasive fertility treatment where prepared sperm is placed directly in the uterus.',
      ne: 'कम आक्रामक प्रजनन उपचार जहाँ तयार शुक्राणु सिधै गर्भाशयमा राखिन्छ।'
    },
    fullDescription: {
      en: 'Intrauterine Insemination (IUI) is a fertility treatment that involves placing specially prepared sperm directly into the uterus around the time of ovulation. This simpler, less invasive procedure increases the number of sperm that reach the fallopian tubes and subsequently increases the chance of fertilization.',
      ne: 'इन्ट्रायूटेराइन इन्सेमिनेशन (आईयूआई) एक प्रजनन उपचार हो जसमा विशेष रूपमा तयार शुक्राणु ओव्युलेशनको समयमा सिधै गर्भाशयमा राखिन्छ। यो सरल, कम आक्रामक प्रक्रियाले फलोपियन ट्यूबमा पुग्ने शुक्राणुको संख्या बढाउँछ।'
    },
    category: 'Primary',
    benefits: {
      en: [
        'Less invasive than IVF',
        'Lower cost treatment option',
        'Natural conception process',
        'Minimal side effects',
        'Can be repeated multiple times',
        'Quick and simple procedure'
      ],
      ne: [
        'आईभीएफ भन्दा कम आक्रामक',
        'कम लागत उपचार विकल्प',
        'प्राकृतिक गर्भधारण प्रक्रिया',
        'न्यूनतम साइड इफेक्ट',
        'धेरै पटक दोहोर्याउन सकिन्छ',
        'द्रुत र सरल प्रक्रिया'
      ]
    },
    procedure: {
      en: [
        'Monitoring of menstrual cycle',
        'Optional ovarian stimulation',
        'Ovulation tracking via ultrasound',
        'Sperm collection and preparation',
        'Sperm washing and concentration',
        'Catheter insertion and sperm placement',
        'Post-procedure rest and monitoring'
      ],
      ne: [
        'मासिक धर्म चक्र निगरानी',
        'वैकल्पिक अंडाशय उत्तेजना',
        'अल्ट्रासाउन्ड मार्फत ओव्युलेशन ट्र्याकिङ',
        'शुक्राणु संकलन र तयारी',
        'शुक्राणु धुने र एकाग्रता',
        'क्याथेटर सम्मिलन र शुक्राणु स्थान',
        'प्रक्रिया पछि आराम र निगरानी'
      ]
    },
    whoIsItFor: {
      en: [
        'Unexplained infertility',
        'Mild endometriosis',
        'Cervical mucus issues',
        'Mild male factor infertility',
        'Ovulation problems',
        'Same-sex couples using donor sperm'
      ],
      ne: [
        'अस्पष्ट बाँझोपन',
        'हल्का एन्डोमेट्रियोसिस',
        'ग्रीवा श्लेष्म समस्याहरू',
        'हल्का पुरुष कारक बाँझोपन',
        'ओव्युलेशन समस्याहरू',
        'दाता शुक्राणु प्रयोग गर्ने समलिंगी जोडीहरू'
      ]
    },
    successRate: {
      en: 'Success rate of 10-20% per cycle',
      ne: 'प्रति चक्र १०-२०% को सफलता दर'
    },
    duration: {
      en: 'Treatment timing coordinated with natural cycle, procedure takes minutes',
      ne: 'प्राकृतिक चक्रसँग समन्वयित उपचार समय, प्रक्रिया मिनेट लाग्छ'
    }
  },
  {
    id: 'counseling',
    icon: Heart,
    title: {
      en: 'Counseling & Assessment',
      ne: 'परामर्श र मूल्याङ्कन'
    },
    shortDescription: {
      en: 'Comprehensive fertility counseling and medical assessment to determine the best treatment approach.',
      ne: 'उत्तम उपचार दृष्टिकोण निर्धारण गर्न व्यापक प्रजनन परामर्श र चिकित्सा मूल्याङ्कन।'
    },
    fullDescription: {
      en: 'Our comprehensive counseling and assessment services provide couples with a thorough understanding of their fertility health. Through detailed medical history, physical examinations, and diagnostic tests, we create personalized treatment plans. Our counselors offer emotional support and guidance throughout your fertility journey.',
      ne: 'हाम्रो व्यापक परामर्श र मूल्याङ्कन सेवाहरूले जोडीहरूलाई उनीहरूको प्रजनन स्वास्थ्यको गहन समझ प्रदान गर्दछ। विस्तृत चिकित्सा इतिहास, शारीरिक परीक्षा र निदान परीक्षणहरू मार्फत, हामी व्यक्तिगत उपचार योजनाहरू सिर्जना गर्छौं।'
    },
    category: 'Support',
    benefits: {
      en: [
        'Personalized fertility assessment',
        'Emotional support and guidance',
        'Clear understanding of treatment options',
        'Risk factor identification',
        'Lifestyle recommendations',
        'Financial counseling available'
      ],
      ne: [
        'व्यक्तिगत प्रजनन मूल्याङ्कन',
        'भावनात्मक समर्थन र मार्गदर्शन',
        'उपचार विकल्पहरूको स्पष्ट समझ',
        'जोखिम कारक पहिचान',
        'जीवनशैली सिफारिसहरू',
        'वित्तीय परामर्श उपलब्ध'
      ]
    },
    procedure: {
      en: [
        'Initial consultation appointment',
        'Detailed medical history review',
        'Physical examination',
        'Diagnostic test recommendations',
        'Results discussion and interpretation',
        'Treatment plan development',
        'Ongoing counseling support'
      ],
      ne: [
        'प्रारम्भिक परामर्श नियुक्ति',
        'विस्तृत चिकित्सा इतिहास समीक्षा',
        'शारीरिक परीक्षा',
        'निदान परीक्षण सिफारिसहरू',
        'परिणाम छलफल र व्याख्या',
        'उपचार योजना विकास',
        'चलिरहेको परामर्श समर्थन'
      ]
    },
    whoIsItFor: {
      en: [
        'Couples trying to conceive for over a year',
        'Women over 35 trying for 6 months',
        'Known fertility issues',
        'Previous pregnancy complications',
        'Genetic concerns',
        'Anyone seeking fertility guidance'
      ],
      ne: [
        'एक वर्ष भन्दा बढी गर्भधारण गर्न कोसिस गर्दै जोडीहरू',
        '६ महिना कोसिस गर्दै ३५ वर्ष माथिका महिलाहरू',
        'ज्ञात प्रजनन समस्याहरू',
        'पूर्व गर्भावस्था जटिलताहरू',
        'आनुवंशिक चिन्ताहरू',
        'प्रजनन मार्गदर्शन खोज्ने जो कोही'
      ]
    },
    duration: {
      en: 'Initial consultation typically 60-90 minutes',
      ne: 'प्रारम्भिक परामर्श सामान्यतया ६०-९० मिनेट'
    }
  },
  {
    id: 'ovulation-induction',
    icon: Activity,
    title: {
      en: 'Ovulation Induction',
      ne: 'ओव्युलेशन इन्डक्शन'
    },
    shortDescription: {
      en: 'Hormone therapy to stimulate egg production in women with ovulation disorders.',
      ne: 'ओव्युलेशन विकार भएका महिलाहरूमा अण्डा उत्पादन उत्तेजित गर्न हर्मोन थेरापी।'
    },
    fullDescription: {
      en: 'Ovulation induction uses fertility medications to stimulate the ovaries to produce and release eggs. This treatment is particularly effective for women who don\'t ovulate regularly or at all. Through careful monitoring and medication adjustment, we help restore normal ovulation patterns.',
      ne: 'ओव्युलेशन इन्डक्शनले अंडाशयलाई अण्डा उत्पादन र रिलीज गर्न उत्तेजित गर्न प्रजनन औषधिहरू प्रयोग गर्दछ। यो उपचार विशेष गरी नियमित रूपमा वा पूर्णतया ओव्युलेट नगर्ने महिलाहरूको लागि प्रभावकारी छ।'
    },
    category: 'Treatment',
    benefits: {
      en: [
        'Restores regular ovulation',
        'Increases pregnancy chances',
        'Non-invasive treatment',
        'Can be combined with IUI',
        'Closely monitored process',
        'Adjustable medication protocols'
      ],
      ne: [
        'नियमित ओव्युलेशन पुनर्स्थापित गर्दछ',
        'गर्भावस्था सम्भावना बढाउँछ',
        'गैर-आक्रामक उपचार',
        'आईयूआई संग संयोजन गर्न सकिन्छ',
        'नजिकबाट निगरानी प्रक्रिया',
        'समायोज्य औषधि प्रोटोकलहरू'
      ]
    },
    procedure: {
      en: [
        'Baseline ultrasound and blood tests',
        'Oral or injectable medication administration',
        'Regular monitoring via ultrasound',
        'Hormone level tracking',
        'Timing guidance for intercourse or IUI',
        'Post-ovulation monitoring',
        'Pregnancy testing when appropriate'
      ],
      ne: [
        'आधारभूत अल्ट्रासाउन्ड र रगत परीक्षण',
        'मौखिक वा इन्जेक्टेबल औषधि प्रशासन',
        'अल्ट्रासाउन्ड मार्फत नियमित निगरानी',
        'हर्मोन स्तर ट्र्याकिङ',
        'संभोग वा आईयूआईको लागि समय मार्गदर्शन',
        'पोस्ट-ओव्युलेशन निगरानी',
        'उपयुक्त हुँदा गर्भावस्था परीक्षण'
      ]
    },
    whoIsItFor: {
      en: [
        'PCOS (Polycystic Ovary Syndrome)',
        'Irregular or absent periods',
        'Anovulation (lack of ovulation)',
        'Unexplained infertility',
        'Hormonal imbalances',
        'Women preparing for IUI'
      ],
      ne: [
        'PCOS (पॉलीसिस्टिक ओभरी सिन्ड्रोम)',
        'अनियमित वा अनुपस्थित पीरियड',
        'एनोव्युलेशन (ओव्युलेशनको कमी)',
        'अस्पष्ट बाँझोपन',
        'हर्मोनल असंतुलन',
        'आईयूआईको लागि तयारी गर्ने महिलाहरू'
      ]
    },
    successRate: {
      en: 'Ovulation success in 70-80% of cases; pregnancy rates vary',
      ne: '७०-८०% मामिलाहरूमा ओव्युलेशन सफलता; गर्भावस्था दर फरक हुन्छ'
    },
    duration: {
      en: 'Typically one menstrual cycle (4-6 weeks) per attempt',
      ne: 'सामान्यतया प्रति प्रयास एक मासिक धर्म चक्र (४-६ हप्ता)'
    }
  },
  {
    id: 'embryo-freezing',
    icon: Baby,
    title: {
      en: 'Embryo Freezing',
      ne: 'भ्रूण फ्रीजिङ'
    },
    shortDescription: {
      en: 'Cryopreservation of embryos for future use, providing flexibility in family planning.',
      ne: 'भविष्यको प्रयोगको लागि भ्रूणहरूको क्रायोप्रिजर्भेसन, परिवार योजनामा लचिलोपन प्रदान गर्दै।'
    },
    fullDescription: {
      en: 'Embryo freezing (cryopreservation) involves carefully preserving embryos at sub-zero temperatures for future use. This advanced technique allows couples to store excess embryos from IVF cycles, preserve fertility before medical treatments, or plan the timing of future pregnancies.',
      ne: 'भ्रूण फ्रीजिङ (क्रायोप्रिजर्भेसन) मा भविष्यको प्रयोगको लागि भ्रूणहरूलाई सब-शून्य तापमानमा सावधानीपूर्वक संरक्षण गर्ने समावेश छ। यो उन्नत प्रविधिले जोडीहरूलाई आईभीएफ चक्रबाट अतिरिक्त भ्रूणहरू भण्डारण गर्न अनुमति दिन्छ।'
    },
    category: 'Advanced',
    benefits: {
      en: [
        'Preserves fertility for future use',
        'Reduces need for repeated IVF cycles',
        'Allows delayed family planning',
        'High embryo survival rates',
        'No time limit on storage',
        'Cost-effective for multiple pregnancies'
      ],
      ne: [
        'भविष्यको प्रयोगको लागि प्रजनन क्षमता संरक्षित गर्दछ',
        'दोहोरिने आईभीएफ चक्रको आवश्यकता घटाउँछ',
        'ढिलो परिवार योजना अनुमति दिन्छ',
        'उच्च भ्रूण बाँच्ने दर',
        'भण्डारणमा समय सीमा छैन',
        'धेरै गर्भावस्थाको लागि लागत-प्रभावी'
      ]
    },
    procedure: {
      en: [
        'IVF cycle with embryo creation',
        'Embryo quality assessment',
        'Vitrification (rapid freezing) process',
        'Secure storage in liquid nitrogen',
        'Documentation and consent',
        'When ready: thawing process',
        'Embryo transfer procedure'
      ],
      ne: [
        'भ्रूण निर्माण संग आईभीएफ चक्र',
        'भ्रूण गुणस्तर मूल्याङ्कन',
        'भिट्रिफिकेशन (द्रुत फ्रीजिङ) प्रक्रिया',
        'तरल नाइट्रोजनमा सुरक्षित भण्डारण',
        'कागजात र सहमति',
        'तयार हुँदा: पग्लने प्रक्रिया',
        'भ्रूण स्थानान्तरण प्रक्रिया'
      ]
    },
    whoIsItFor: {
      en: [
        'Couples with excess embryos from IVF',
        'Cancer patients before treatment',
        'Medical conditions affecting fertility',
        'Career or lifestyle planning',
        'Genetic testing requirements',
        'Multiple pregnancy planning'
      ],
      ne: [
        'आईभीएफबाट अतिरिक्त भ्रूण भएका जोडीहरू',
        'उपचार अघि क्यान्सर रोगीहरू',
        'प्रजनन क्षमता प्रभावित गर्ने चिकित्सा अवस्थाहरू',
        'क्यारियर वा जीवनशैली योजना',
        'आनुवंशिक परीक्षण आवश्यकताहरू',
        'धेरै गर्भावस्था योजना'
      ]
    },
    successRate: {
      en: '95%+ embryo survival rate after thawing with vitrification',
      ne: 'भिट्रिफिकेशनसँग पग्लने पछि ९५%+ भ्रूण बाँच्ने दर'
    }
  },
  {
    id: 'male-infertility',
    icon: Users,
    title: {
      en: 'Male Infertility Treatment',
      ne: 'पुरुष बाँझोपन उपचार'
    },
    shortDescription: {
      en: 'Comprehensive evaluation and treatment options for male factor infertility.',
      ne: 'पुरुष कारक बाँझोपनको लागि व्यापक मूल्याङ्कन र उपचार विकल्पहरू।'
    },
    fullDescription: {
      en: 'Our male infertility program offers comprehensive diagnosis and treatment for various male reproductive issues. Through advanced testing, we identify the root causes and provide targeted treatments including hormonal therapy, surgical interventions, and assisted reproductive techniques.',
      ne: 'हाम्रो पुरुष बाँझोपन कार्यक्रमले विभिन्न पुरुष प्रजनन समस्याहरूको लागि व्यापक निदान र उपचार प्रदान गर्दछ। उन्नत परीक्षण मार्फत, हामी मूल कारणहरू पहिचान गर्छौं र लक्षित उपचारहरू प्रदान गर्छौं।'
    },
    category: 'Specialized',
    benefits: {
      en: [
        'Comprehensive male fertility assessment',
        'Advanced sperm analysis',
        'Hormonal treatment options',
        'Surgical sperm retrieval techniques',
        'Lifestyle counseling',
        'Combined treatment with ICSI'
      ],
      ne: [
        'व्यापक पुरुष प्रजनन मूल्याङ्कन',
        'उन्नत शुक्राणु विश्लेषण',
        'हर्मोनल उपचार विकल्पहरू',
        'शल्यक्रिया शुक्राणु निकासी प्रविधिहरू',
        'जीवनशैली परामर्श',
        'आईसीएसआई संग संयुक्त उपचार'
      ]
    },
    procedure: {
      en: [
        'Detailed medical history',
        'Physical examination',
        'Semen analysis',
        'Hormone blood tests',
        'Genetic testing if needed',
        'Ultrasound examination',
        'Treatment plan development'
      ],
      ne: [
        'विस्तृत चिकित्सा इतिहास',
        'शारीरिक परीक्षा',
        'वीर्य विश्लेषण',
        'हर्मोन रक्त परीक्षण',
        'आवश्यक भएमा आनुवंशिक परीक्षण',
        'अल्ट्रासाउन्ड परीक्षा',
        'उपचार योजना विकास'
      ]
    },
    whoIsItFor: {
      en: [
        'Low sperm count or motility',
        'Abnormal sperm morphology',
        'Hormonal imbalances',
        'Varicocele',
        'Erectile or ejaculation problems',
        'Previous vasectomy'
      ],
      ne: [
        'कम शुक्राणु संख्या वा गतिशीलता',
        'असामान्य शुक्राणु आकारविज्ञान',
        'हर्मोनल असंतुलन',
        'भेरिकोसेल',
        'इरेक्शन वा स्खलन समस्याहरू',
        'पूर्व नसबंदी'
      ]
    },
    duration: {
      en: 'Varies based on treatment approach',
      ne: 'उपचार दृष्टिकोण मा आधारित फरक हुन्छ'
    }
  },
  {
    id: 'cryopreservation',
    icon: Snowflake,
    title: {
      en: 'Cryopreservation',
      ne: 'क्रायोप्रिजर्भेसन'
    },
    shortDescription: {
      en: 'Advanced freezing technology for sperm, eggs, and embryos with high survival rates.',
      ne: 'शुक्राणु, अण्डा र भ्रूणहरूको लागि उच्च बाँच्ने दरसहित उन्नत फ्रीजिङ प्रविधि।'
    },
    fullDescription: {
      en: 'Cryopreservation is the process of freezing and storing biological materials at ultra-low temperatures. Our facility uses cutting-edge vitrification technology to preserve sperm, eggs, and embryos with exceptional survival rates, giving you control over your reproductive timeline.',
      ne: 'क्रायोप्रिजर्भेसन अति निम्न तापमानमा जैविक सामग्री फ्रिज गर्ने र भण्डारण गर्ने प्रक्रिया हो। हाम्रो सुविधाले असाधारण बाँच्ने दरसँग शुक्राणु, अण्डा र भ्रूणहरू संरक्षित गर्न अत्याधुनिक भिट्रिफिकेशन प्रविधि प्रयोग गर्दछ।'
    },
    category: 'Advanced',
    benefits: {
      en: [
        'Preserves fertility for future',
        'Multiple storage options available',
        'High post-thaw survival rates',
        'Secure long-term storage',
        'Flexible family planning',
        'Medical fertility preservation'
      ],
      ne: [
        'भविष्यको लागि प्रजनन क्षमता संरक्षित गर्दछ',
        'धेरै भण्डारण विकल्पहरू उपलब्ध',
        'उच्च पोस्ट-थाव बाँच्ने दर',
        'सुरक्षित दीर्घकालीन भण्डारण',
        'लचिलो परिवार योजना',
        'चिकित्सा प्रजनन संरक्षण'
      ]
    },
    procedure: {
      en: [
        'Initial consultation and consent',
        'Sperm/egg collection or IVF cycle',
        'Quality assessment',
        'Vitrification process',
        'Liquid nitrogen storage',
        'Regular monitoring and maintenance',
        'Thawing when needed'
      ],
      ne: [
        'प्रारम्भिक परामर्श र सहमति',
        'शुक्राणु/अण्डा संकलन वा आईभीएफ चक्र',
        'गुणस्तर मूल्याङ्कन',
        'भिट्रिफिकेशन प्रक्रिया',
        'तरल नाइट्रोजन भण्डारण',
        'नियमित निगरानी र मर्मत',
        'आवश्यक पर्दा पग्लने'
      ]
    },
    whoIsItFor: {
      en: [
        'Cancer patients before treatment',
        'Delayed family planning',
        'High-risk occupations',
        'Medical conditions',
        'Age-related fertility decline',
        'Genetic disease carriers'
      ],
      ne: [
        'उपचार अघि क्यान्सर रोगीहरू',
        'ढिलो परिवार योजना',
        'उच्च जोखिम पेशाहरू',
        'चिकित्सा अवस्थाहरू',
        'उमेर-सम्बन्धित प्रजनन गिरावट',
        'आनुवंशिक रोग वाहकहरू'
      ]
    },
    successRate: {
      en: '90-95% survival rates with vitrification technology',
      ne: 'भिट्रिफिकेशन प्रविधिसँग ९०-९५% बाँच्ने दर'
    }
  },
  {
    id: 'pcos-treatment',
    icon: Activity,
    title: {
      en: 'PCOS Treatment & Management',
      ne: 'PCOS उपचार र व्यवस्थापन'
    },
    shortDescription: {
      en: 'Comprehensive PCOS treatment including hormonal therapy, lifestyle management, and fertility optimization.',
      ne: 'हर्मोनल थेरापी, जीवनशैली व्यवस्थापन र प्रजनन अनुकूलन सहित व्यापक PCOS उपचार।'
    },
    fullDescription: {
      en: 'Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder affecting women of reproductive age. Our comprehensive PCOS program combines medical treatment, nutritional guidance, and lifestyle modifications to manage symptoms, restore fertility, and improve overall health.',
      ne: 'पॉलीसिस्टिक ओभरी सिन्ड्रोम (PCOS) प्रजनन उमेरका महिलाहरूलाई असर गर्ने एक सामान्य हर्मोनल विकार हो। हाम्रो व्यापक PCOS कार्यक्रमले लक्षणहरू व्यवस्थापन गर्न, प्रजनन क्षमता पुनर्स्थापित गर्न र समग्र स्वास्थ्य सुधार गर्न चिकित्सा उपचार, पोषण मार्गदर्शन र जीवनशैली संशोधनहरू संयोजन गर्दछ।'
    },
    category: 'Specialized',
    benefits: {
      en: [
        'Hormone balance restoration',
        'Improved fertility',
        'Weight management support',
        'Reduced symptoms',
        'Lower long-term health risks',
        'Personalized treatment plans'
      ],
      ne: [
        'हर्मोन सन्तुलन पुनर्स्थापना',
        'सुधारिएको प्रजनन क्षमता',
        'वजन व्यवस्थापन समर्थन',
        'घटेको लक्षणहरू',
        'कम दीर्घकालीन स्वास्थ्य जोखिम',
        'व्यक्तिगत उपचार योजनाहरू'
      ]
    },
    procedure: {
      en: [
        'Comprehensive diagnostic testing',
        'Hormone level assessment',
        'Ultrasound examination',
        'Metabolic screening',
        'Customized treatment protocol',
        'Regular monitoring and adjustment',
        'Lifestyle and diet counseling'
      ],
      ne: [
        'व्यापक निदान परीक्षण',
        'हर्मोन स्तर मूल्याङ्कन',
        'अल्ट्रासाउन्ड परीक्षा',
        'मेटाबोलिक स्क्रीनिङ',
        'अनुकूलित उपचार प्रोटोकल',
        'नियमित निगरानी र समायोजन',
        'जीवनशैली र आहार परामर्श'
      ]
    },
    whoIsItFor: {
      en: [
        'Irregular or absent periods',
        'Difficulty conceiving',
        'Excessive hair growth',
        'Acne and skin issues',
        'Weight gain or obesity',
        'Insulin resistance'
      ],
      ne: [
        'अनियमित वा अनुपस्थित पीरियड',
        'गर्भधारण गर्न कठिनाई',
        'अत्यधिक कपाल वृद्धि',
        'मुँहासे र छाला समस्याहरू',
        'वजन वृद्धि वा मोटोपना',
        'इन्सुलिन प्रतिरोध'
      ]
    },
    duration: {
      en: 'Ongoing management with regular follow-ups every 3-6 months',
      ne: 'प्रत्येक ३-६ महिनामा नियमित फलो-अपको साथ चलिरहेको व्यवस्थापन'
    }
  },
  {
    id: 'pcos-diet',
    icon: Apple,
    title: {
      en: 'PCOS Diet Management',
      ne: 'PCOS आहार व्यवस्थापन'
    },
    shortDescription: {
      en: 'Personalized nutrition plans to manage PCOS symptoms, regulate hormones, and improve fertility naturally.',
      ne: 'PCOS लक्षणहरू व्यवस्थापन गर्न, हर्मोनहरू नियमन गर्न र प्राकृतिक रूपमा प्रजनन क्षमता सुधार गर्न व्यक्तिगत पोषण योजनाहरू।'
    },
    fullDescription: {
      en: 'Diet plays a crucial role in managing PCOS symptoms. Our registered dietician creates personalized meal plans focused on balancing blood sugar, reducing inflammation, and supporting hormonal health. Learn sustainable eating habits that improve fertility and overall well-being.',
      ne: 'PCOS लक्षणहरू व्यवस्थापन गर्नमा आहारले महत्त्वपूर्ण भूमिका खेल्छ। हाम्रो दर्ता डाइटिसियनले रक्त चिनी सन्तुलन, सूजन कम गर्न र हर्मोनल स्वास्थ्य समर्थन गर्न केन्द्रित व्यक्तिगत खाना योजनाहरू सिर्जना गर्दछ।'
    },
    category: 'Nutrition',
    benefits: {
      en: [
        'Hormone regulation through diet',
        'Weight management support',
        'Improved insulin sensitivity',
        'Reduced inflammation',
        'Enhanced fertility',
        'Sustainable lifestyle changes'
      ],
      ne: [
        'आहार मार्फत हर्मोन नियमन',
        'वजन व्यवस्थापन समर्थन',
        'सुधारिएको इन्सुलिन संवेदनशीलता',
        'घटेको सूजन',
        'बढेको प्रजनन क्षमता',
        'दिगो जीवनशैली परिवर्तनहरू'
      ]
    },
    procedure: {
      en: [
        'Initial nutrition assessment',
        'PCOS-specific dietary analysis',
        'Personalized meal planning',
        'Grocery shopping guidance',
        'Recipe suggestions',
        'Regular follow-up consultations',
        'Progress tracking and adjustments'
      ],
      ne: [
        'प्रारम्भिक पोषण मूल्याङ्कन',
        'PCOS-विशिष्ट आहार विश्लेषण',
        'व्यक्तिगत खाना योजना',
        'किराना किनमेल मार्गदर्शन',
        'रेसिपी सुझावहरू',
        'नियमित फलो-अप परामर्शहरू',
        'प्रगति ट्र्याकिङ र समायोजन'
      ]
    },
    whoIsItFor: {
      en: [
        'Women diagnosed with PCOS',
        'Insulin resistance concerns',
        'Weight management needs',
        'Fertility optimization',
        'Hormone imbalance',
        'Looking for natural management'
      ],
      ne: [
        'PCOS निदान भएका महिलाहरू',
        'इन्सुलिन प्रतिरोध चिन्ताहरू',
        'वजन व्यवस्थापन आवश्यकताहरू',
        'प्रजनन अनुकूलन',
        'हर्मोन असंतुलन',
        'प्राकृतिक व्यवस्थापन खोज्दै'
      ]
    },
    duration: {
      en: 'Initial plan with monthly follow-ups for 3-6 months',
      ne: 'प्रारम्भिक योजना ३-६ महिनाको लागि मासिक फलो-अपको साथ'
    }
  },
  {
    id: 'fertility-nutrition',
    icon: Utensils,
    title: {
      en: 'Fertility Nutrition Counseling',
      ne: 'प्रजनन पोषण परामर्श'
    },
    shortDescription: {
      en: 'Evidence-based dietary guidance to optimize reproductive health and improve conception chances.',
      ne: 'प्रजनन स्वास्थ्य अनुकूलन गर्न र गर्भधारण सम्भावना सुधार गर्न प्रमाणमा आधारित आहार मार्गदर्शन।'
    },
    fullDescription: {
      en: 'Nutrition significantly impacts fertility for both men and women. Our specialized fertility nutrition counseling provides evidence-based dietary recommendations to optimize reproductive health, support hormone production, and improve egg and sperm quality.',
      ne: 'पोषणले पुरुष र महिला दुवैको प्रजनन क्षमतामा महत्त्वपूर्ण प्रभाव पार्छ। हाम्रो विशेष प्रजनन पोषण परामर्शले प्रजनन स्वास्थ्य अनुकूलन गर्न, हर्मोन उत्पादन समर्थन गर्न र अण्डा र शुक्राणु गुणस्तर सुधार गर्न प्रमाणमा आधारित आहार सिफारिसहरू प्रदान गर्दछ।'
    },
    category: 'Nutrition',
    benefits: {
      en: [
        'Improved egg and sperm quality',
        'Hormone optimization',
        'Enhanced fertility naturally',
        'Better IVF outcomes',
        'Nutritional deficiency correction',
        'Personalized supplement guidance'
      ],
      ne: [
        'सुधारिएको अण्डा र शुक्राणु गुणस्तर',
        'हर्मोन अनुकूलन',
        'प्राकृतिक रूपमा बढेको प्रजनन क्षमता',
        'राम्रो आईभीएफ परिणामहरू',
        'पोषण कमी सुधार',
        'व्यक्तिगत पूरक मार्गदर्शन'
      ]
    },
    procedure: {
      en: [
        'Comprehensive nutrition assessment',
        'Dietary habit analysis',
        'Nutrient deficiency testing',
        'Personalized fertility meal plans',
        'Supplement recommendations',
        'Lifestyle modification guidance',
        'Ongoing support and monitoring'
      ],
      ne: [
        'व्यापक पोषण मूल्याङ्कन',
        'आहार बानी विश्लेषण',
        'पोषक तत्व कमी परीक्षण',
        'व्यक्तिगत प्रजनन खाना योजनाहरू',
        'पूरक सिफारिसहरू',
        'जीवनशैली संशोधन मार्गदर्शन',
        'चलिरहेको समर्थन र निगरानी'
      ]
    },
    whoIsItFor: {
      en: [
        'Couples trying to conceive',
        'Preparing for IVF/IUI',
        'Poor egg or sperm quality',
        'Unexplained infertility',
        'Previous miscarriages',
        'Optimizing reproductive health'
      ],
      ne: [
        'गर्भधारण गर्न कोसिस गर्ने जोडीहरू',
        'आईभीएफ/आईयूआईको लागि तयारी',
        'खराब अण्डा वा शुक्राणु गुणस्तर',
        'अस्पष्ट बाँझोपन',
        'पूर्व गर्भपातहरू',
        'प्रजनन स्वास्थ्य अनुकूलन'
      ]
    },
    duration: {
      en: 'Initial consultation with 2-4 follow-ups over 3 months',
      ne: 'प्रारम्भिक परामर्श ३ महिनामा २-४ फलो-अपको साथ'
    }
  },
  {
    id: 'weight-management',
    icon: Scale,
    title: {
      en: 'Weight Management for Fertility',
      ne: 'प्रजननको लागि वजन व्यवस्थापन'
    },
    shortDescription: {
      en: 'Specialized weight management programs designed to enhance fertility and support healthy pregnancy.',
      ne: 'प्रजनन क्षमता बढाउन र स्वस्थ गर्भावस्था समर्थन गर्न डिजाइन गरिएको विशेष वजन व्यवस्थापन कार्यक्रमहरू।'
    },
    fullDescription: {
      en: 'Body weight significantly affects fertility in both men and women. Our specialized weight management program combines nutritional counseling, exercise guidance, and behavioral support to help you achieve and maintain a healthy weight that optimizes your fertility potential.',
      ne: 'शरीरको तौलले पुरुष र महिला दुवैको प्रजनन क्षमतामा महत्त्वपूर्ण प्रभाव पार्छ। हाम्रो विशेष वजन व्यवस्थापन कार्यक्रमले तपाईंलाई स्वस्थ तौल प्राप्त गर्न र कायम राख्न मद्दत गर्न पोषण परामर्श, व्यायाम मार्गदर्शन र व्यवहार समर्थन संयोजन गर्दछ।'
    },
    category: 'Nutrition',
    benefits: {
      en: [
        'Improved fertility outcomes',
        'Better hormone regulation',
        'Enhanced IVF success rates',
        'Reduced pregnancy complications',
        'Sustainable weight loss methods',
        'Holistic health improvement'
      ],
      ne: [
        'सुधारिएको प्रजनन परिणामहरू',
        'राम्रो हर्मोन नियमन',
        'बढेको आईभीएफ सफलता दर',
        'घटेको गर्भावस्था जटिलताहरू',
        'दिगो वजन घटाउने विधिहरू',
        'समग्र स्वास्थ्य सुधार'
      ]
    },
    procedure: {
      en: [
        'Initial health and weight assessment',
        'Body composition analysis',
        'Metabolic rate testing',
        'Personalized nutrition plan',
        'Exercise program design',
        'Behavioral coaching',
        'Regular progress monitoring'
      ],
      ne: [
        'प्रारम्भिक स्वास्थ्य र वजन मूल्याङ्कन',
        'शरीर संरचना विश्लेषण',
        'मेटाबोलिक दर परीक्षण',
        'व्यक्तिगत पोषण योजना',
        'व्यायाम कार्यक्रम डिजाइन',
        'व्यवहार कोचिङ',
        'नियमित प्रगति निगरानी'
      ]
    },
    whoIsItFor: {
      en: [
        'Overweight or underweight individuals',
        'PCOS-related weight issues',
        'Pre-IVF optimization',
        'Difficulty conceiving due to weight',
        'Metabolic syndrome',
        'Preparing for healthy pregnancy'
      ],
      ne: [
        'अधिक वजन वा कम तौल भएका व्यक्तिहरू',
        'PCOS-सम्बन्धित वजन समस्याहरू',
        'पूर्व-आईभीएफ अनुकूलन',
        'वजनको कारण गर्भधारण गर्न कठिनाई',
        'मेटाबोलिक सिन्ड्रोम',
        'स्वस्थ गर्भावस्थाको लागि तयारी'
      ]
    },
    duration: {
      en: '3-6 month program with ongoing support',
      ne: 'चलिरहेको समर्थनको साथ ३-६ महिना कार्यक्रम'
    }
  }
];
