export interface Service {
  id: string;
  category: 'primary' | 'diagnostic' | 'treatment' | 'support';
  title: {
    en: string;
    ne: string;
  };
  description: {
    en: string;
    ne: string;
  };
  icon: string;
  successRate?: string;
  cost?: {
    en: string;
    ne: string;
  };
  duration?: {
    en: string;
    ne: string;
  };
  benefits?: {
    en: string[];
    ne: string[];
  };
  procedure?: {
    en: string[];
    ne: string[];
  };
  whoIsItFor?: {
    en: string[];
    ne: string[];
  };
}

export const servicesData: Service[] = [
  // PRIMARY SERVICES
  {
    id: 'basic-investigations',
    category: 'primary',
    title: {
      en: 'Basic Investigations',
      ne: 'आधारभूत जाँचहरू'
    },
    description: {
      en: 'Comprehensive initial screening tests to assess fertility health and identify potential issues.',
      ne: 'प्रजनन स्वास्थ्य मूल्याङ्कन र सम्भावित समस्याहरू पहिचान गर्न व्यापक प्रारम्भिक जाँच परीक्षणहरू।'
    },
    icon: 'TestTube',
    benefits: {
      en: ['Early detection of fertility issues', 'Personalized treatment planning', 'Cost-effective screening'],
      ne: ['प्रजनन समस्याको प्रारम्भिक पत्ता लगाउने', 'व्यक्तिगत उपचार योजना', 'लागत-प्रभावी जाँच']
    }
  },
  {
    id: 'semen-analysis',
    category: 'primary',
    title: {
      en: 'Semen Analysis',
      ne: 'वीर्य विश्लेषण'
    },
    description: {
      en: 'Detailed laboratory testing to evaluate sperm count, motility, morphology and overall male fertility potential.',
      ne: 'शुक्राणु संख्या, गतिशीलता, आकारविज्ञान र समग्र पुरुष प्रजनन क्षमता मूल्याङ्कन गर्न विस्तृत प्रयोगशाला परीक्षण।'
    },
    icon: 'Microscope',
    benefits: {
      en: ['Accurate sperm quality assessment', 'Identifies male factor infertility', 'Guides treatment decisions'],
      ne: ['सटीक शुक्राणु गुणस्तर मूल्याङ्कन', 'पुरुष कारक बांझोपन पहिचान', 'उपचार निर्णयमा मार्गदर्शन']
    }
  },
  {
    id: 'hormone-testing',
    category: 'primary',
    title: {
      en: 'Hormone Testing',
      ne: 'हर्मोन परीक्षण'
    },
    description: {
      en: 'Comprehensive hormone level testing including FSH, LH, AMH, thyroid and other reproductive hormones.',
      ne: 'FSH, LH, AMH, थाइरोइड र अन्य प्रजनन हर्मोनहरू सहित व्यापक हर्मोन स्तर परीक्षण।'
    },
    icon: 'Activity',
    benefits: {
      en: ['Identifies hormonal imbalances', 'Assesses ovarian reserve', 'Optimizes treatment protocols'],
      ne: ['हर्मोनल असन्तुलन पहिचान', 'डिम्बाशय रिजर्व मूल्याङ्कन', 'उपचार प्रोटोकल अनुकूलन']
    }
  },
  {
    id: 'imaging-services',
    category: 'primary',
    title: {
      en: 'Imaging Services (USG/TVS)',
      ne: 'इमेजिङ सेवाहरू (USG/TVS)'
    },
    description: {
      en: 'Advanced ultrasound imaging including transvaginal sonography for detailed reproductive organ assessment.',
      ne: 'विस्तृत प्रजनन अंग मूल्याङ्कनको लागि ट्रान्सभ्याजाइनल सोनोग्राफी सहित उन्नत अल्ट्रासाउन्ड इमेजिङ।'
    },
    icon: 'ScanEye',
    benefits: {
      en: ['Non-invasive diagnostic imaging', 'Detailed organ visualization', 'Monitors follicle development'],
      ne: ['गैर-आक्रामक निदान इमेजिङ', 'विस्तृत अंग दृश्य', 'फोलिकल विकास निगरानी']
    }
  },
  {
    id: 'ovulation-testing',
    category: 'primary',
    title: {
      en: 'Ovulation Testing & Monitoring',
      ne: 'ओभुलेसन परीक्षण र निगरानी'
    },
    description: {
      en: 'Regular monitoring of ovulation cycle through hormone testing and ultrasound tracking.',
      ne: 'हर्मोन परीक्षण र अल्ट्रासाउन्ड ट्र्याकिङ मार्फत ओभुलेसन चक्रको नियमित निगरानी।'
    },
    icon: 'Calendar',
    benefits: {
      en: ['Identifies fertile window', 'Optimizes conception timing', 'Tracks treatment response'],
      ne: ['उर्वर विन्डो पहिचान', 'गर्भधारण समय अनुकूलन', 'उपचार प्रतिक्रिया ट्र्याक']
    }
  },

  // DIAGNOSTIC SERVICES
  {
    id: 'blocked-tubes-treatment',
    category: 'diagnostic',
    title: {
      en: 'Treatment for Blocked Fallopian Tubes',
      ne: 'अवरुद्ध फलोपियन ट्यूबको उपचार'
    },
    description: {
      en: 'Specialized procedures to diagnose and treat fallopian tube blockages including HSG and tubal surgeries.',
      ne: 'HSG र ट्युबल शल्यक्रिया सहित फलोपियन ट्यूब अवरोध निदान र उपचार गर्न विशेष प्रक्रियाहरू।'
    },
    icon: 'Stethoscope',
    benefits: {
      en: ['Restores natural conception ability', 'Minimally invasive options', 'Improves treatment success'],
      ne: ['प्राकृतिक गर्भधारण क्षमता पुनर्स्थापना', 'न्यूनतम आक्रामक विकल्पहरू', 'उपचार सफलता सुधार']
    }
  },
  {
    id: 'laparoscopy-hysteroscopy',
    category: 'diagnostic',
    title: {
      en: 'Laparoscopy & Hysteroscopy',
      ne: 'ल्यापरोस्कोपी र हिस्टेरोस्कोपी'
    },
    description: {
      en: 'Minimally invasive surgical procedures to diagnose and treat reproductive organ abnormalities.',
      ne: 'प्रजनन अंग असामान्यताहरू निदान र उपचार गर्न न्यूनतम आक्रामक शल्य प्रक्रियाहरू।'
    },
    icon: 'Activity',
    benefits: {
      en: ['Direct visualization of organs', 'Minimal scarring', 'Quick recovery time'],
      ne: ['अंगहरूको प्रत्यक्ष दृश्य', 'न्यूनतम दाग', 'द्रुत रिकभरी समय']
    }
  },
  {
    id: 'genetic-testing',
    category: 'diagnostic',
    title: {
      en: 'Genetic Testing',
      ne: 'आनुवंशिक परीक्षण'
    },
    description: {
      en: 'Advanced genetic screening for chromosomal abnormalities and inherited conditions affecting fertility.',
      ne: 'क्रोमोसोमल असामान्यता र प्रजनन क्षमतालाई असर गर्ने वंशाणुगत अवस्थाहरूको लागि उन्नत आनुवंशिक जाँच।'
    },
    icon: 'Dna',
    benefits: {
      en: ['Identifies genetic risks', 'Enables informed decisions', 'Improves pregnancy outcomes'],
      ne: ['आनुवंशिक जोखिम पहिचान', 'सूचित निर्णय सक्षम', 'गर्भावस्था परिणाम सुधार']
    }
  },

  // TREATMENT SERVICES
  {
    id: 'hormone-therapy',
    category: 'treatment',
    title: {
      en: 'Hormone Therapy',
      ne: 'हर्मोन थेरापी'
    },
    description: {
      en: 'Personalized hormone treatments to regulate reproductive function and support fertility.',
      ne: 'प्रजनन कार्य नियमित गर्न र प्रजनन क्षमता समर्थन गर्न व्यक्तिगत हर्मोन उपचार।'
    },
    icon: 'Pill',
    benefits: {
      en: ['Regulates menstrual cycles', 'Improves egg quality', 'Supports embryo development'],
      ne: ['मासिक धर्म नियमित', 'अण्डा गुणस्तर सुधार', 'भ्रूण विकास समर्थन']
    }
  },
  {
    id: 'tight-cervix-treatment',
    category: 'treatment',
    title: {
      en: 'Treatment for Tight Cervix',
      ne: 'कडा गर्भाशय ग्रीवाको उपचार'
    },
    description: {
      en: 'Specialized treatments to address cervical stenosis and improve sperm passage.',
      ne: 'गर्भाशय ग्रीवा स्टेनोसिस सम्बोधन र शुक्राणु मार्ग सुधार गर्न विशेष उपचार।'
    },
    icon: 'Activity',
    benefits: {
      en: ['Improves natural conception', 'Minimally invasive', 'Quick procedure'],
      ne: ['प्राकृतिक गर्भधारण सुधार', 'न्यूनतम आक्रामक', 'छिटो प्रक्रिया']
    }
  },
  {
    id: 'iui',
    category: 'treatment',
    title: {
      en: 'Intrauterine Insemination (IUI)',
      ne: 'इन्ट्रायुटेरिन इन्सेमिनेशन (IUI)'
    },
    description: {
      en: 'Simple fertility treatment that places washed sperm directly into the uterus during ovulation.',
      ne: 'सरल प्रजनन उपचार जसले ओभुलेसनको समयमा धोएको शुक्राणु सीधा गर्भाशयमा राख्छ।'
    },
    icon: 'Baby',
    successRate: '15-20%',
    cost: {
      en: 'NPR 15,000 - 25,000 per cycle',
      ne: 'प्रति चक्र NPR 15,000 - 25,000'
    },
    duration: {
      en: '2-3 weeks per cycle',
      ne: 'प्रति चक्र 2-3 हप्ता'
    },
    benefits: {
      en: ['Less invasive than IVF', 'Cost-effective option', 'Natural conception process'],
      ne: ['IVF भन्दा कम आक्रामक', 'लागत-प्रभावी विकल्प', 'प्राकृतिक गर्भधारण प्रक्रिया']
    }
  },
  {
    id: 'ivf',
    category: 'treatment',
    title: {
      en: 'In Vitro Fertilization (IVF)',
      ne: 'इन भिट्रो फर्टिलाइजेशन (IVF)'
    },
    description: {
      en: 'Advanced assisted reproductive technology combining eggs and sperm in laboratory for embryo creation.',
      ne: 'भ्रूण निर्माणको लागि प्रयोगशालामा अण्डा र शुक्राणु संयोजन गर्ने उन्नत सहायक प्रजनन प्रविधि।'
    },
    icon: 'Heart',
    successRate: '40-50%',
    cost: {
      en: 'NPR 250,000 - 350,000 per cycle',
      ne: 'प्रति चक्र NPR 250,000 - 350,000'
    },
    duration: {
      en: '4-6 weeks per cycle',
      ne: 'प्रति चक्र 4-6 हप्ता'
    },
    benefits: {
      en: ['High success rates', 'Overcomes multiple fertility issues', 'Genetic screening possible'],
      ne: ['उच्च सफलता दर', 'बहु प्रजनन समस्या समाधान', 'आनुवंशिक जाँच सम्भव']
    }
  },
  {
    id: 'icsi',
    category: 'treatment',
    title: {
      en: 'Intracytoplasmic Sperm Injection (ICSI)',
      ne: 'इन्ट्रासाइटोप्लाज्मिक स्पर्म इन्जेक्शन (ICSI)'
    },
    description: {
      en: 'Specialized IVF technique where a single sperm is injected directly into an egg for fertilization.',
      ne: 'विशेष IVF प्रविधि जहाँ एक शुक्राणु सीधा अण्डामा निषेचनको लागि इन्जेक्ट गरिन्छ।'
    },
    successRate: '45-55%',
    cost: {
      en: 'NPR 300,000 - 400,000 per cycle',
      ne: 'प्रति चक्र NPR 300,000 - 400,000'
    },
    duration: {
      en: '4-6 weeks per cycle',
      ne: 'प्रति चक्र 4-6 हप्ता'
    },
    icon: 'Syringe',
    benefits: {
      en: ['Treats severe male infertility', 'Higher fertilization rates', 'Precise fertilization control'],
      ne: ['गम्भीर पुरुष बांझोपन उपचार', 'उच्च निषेचन दर', 'सटीक निषेचन नियन्त्रण']
    }
  },
  {
    id: 'embryo-transfer',
    category: 'treatment',
    title: {
      en: 'Embryo Transfer',
      ne: 'भ्रूण स्थानान्तरण'
    },
    description: {
      en: 'Final step of IVF where developed embryos are carefully placed into the uterus.',
      ne: 'IVF को अन्तिम चरण जहाँ विकसित भ्रूणहरू सावधानीपूर्वक गर्भाशयमा राखिन्छ।'
    },
    icon: 'ArrowRight',
    benefits: {
      en: ['Painless procedure', 'High implantation success', 'Minimal recovery time'],
      ne: ['दुखाइरहित प्रक्रिया', 'उच्च प्रत्यारोपण सफलता', 'न्यूनतम रिकभरी समय']
    }
  },
  {
    id: 'cryopreservation',
    category: 'treatment',
    title: {
      en: 'Sperm, Egg & Embryo Cryopreservation',
      ne: 'शुक्राणु, अण्डा र भ्रूण क्रायोप्रिजर्वेशन'
    },
    description: {
      en: 'Advanced freezing technology to preserve reproductive cells and embryos for future use.',
      ne: 'भविष्यको प्रयोगको लागि प्रजनन कोशिकाहरू र भ्रूणहरू संरक्षण गर्न उन्नत फ्रिजिङ प्रविधि।'
    },
    icon: 'Snowflake',
    benefits: {
      en: ['Fertility preservation', 'Multiple attempts without new cycles', 'Family planning flexibility'],
      ne: ['प्रजनन क्षमता संरक्षण', 'नयाँ चक्र बिना बहु प्रयास', 'परिवार योजना लचीलोपन']
    }
  },
  {
    id: 'donor-programs',
    category: 'treatment',
    title: {
      en: 'Donor Programs (Egg/Sperm)',
      ne: 'दाता कार्यक्रमहरू (अण्डा/शुक्राणु)'
    },
    description: {
      en: 'Comprehensive donor egg and sperm programs with careful screening and matching.',
      ne: 'सावधानीपूर्वक जाँच र मिलान सहित व्यापक दाता अण्डा र शुक्राणु कार्यक्रमहरू।'
    },
    icon: 'Users',
    benefits: {
      en: ['Alternative for genetic issues', 'Screened healthy donors', 'Ethical and confidential'],
      ne: ['आनुवंशिक समस्याको विकल्प', 'जाँच गरिएको स्वस्थ दाताहरू', 'नैतिक र गोप्य']
    }
  },
  {
    id: 'pcos-management',
    category: 'treatment',
    title: {
      en: 'PCOS/PCOD Management',
      ne: 'PCOS/PCOD व्यवस्थापन'
    },
    description: {
      en: 'Comprehensive treatment approach for polycystic ovary syndrome including lifestyle and medical management.',
      ne: 'जीवनशैली र चिकित्सा व्यवस्थापन सहित पोलीसिस्टिक ओभरी सिन्ड्रोमको लागि व्यापक उपचार दृष्टिकोण।'
    },
    icon: 'Activity',
    benefits: {
      en: ['Regulates hormones', 'Improves ovulation', 'Long-term health benefits'],
      ne: ['हर्मोन नियमन', 'ओभुलेसन सुधार', 'दीर्घकालीन स्वास्थ्य लाभ']
    }
  },
  {
    id: 'endometriosis-treatment',
    category: 'treatment',
    title: {
      en: 'Endometriosis Treatment',
      ne: 'एन्डोमेट्रियोसिस उपचार'
    },
    description: {
      en: 'Specialized medical and surgical treatments for endometriosis to improve fertility and reduce pain.',
      ne: 'प्रजनन क्षमता सुधार र दुखाइ कम गर्न एन्डोमेट्रियोसिसको लागि विशेष चिकित्सा र शल्य उपचार।'
    },
    icon: 'AlertCircle',
    benefits: {
      en: ['Reduces pelvic pain', 'Improves conception chances', 'Comprehensive care approach'],
      ne: ['श्रोणि दुखाइ कम', 'गर्भधारण सम्भावना सुधार', 'व्यापक हेरचाह दृष्टिकोण']
    }
  },
  {
    id: 'male-infertility',
    category: 'treatment',
    title: {
      en: 'Male Infertility & Andrology Services',
      ne: 'पुरुष बांझोपन र एन्ड्रोलोजी सेवाहरू'
    },
    description: {
      en: 'Comprehensive male fertility evaluation and treatment including surgical sperm retrieval.',
      ne: 'शल्य शुक्राणु पुन: प्राप्ति सहित व्यापक पुरुष प्रजनन मूल्याङ्कन र उपचार।'
    },
    icon: 'User',
    benefits: {
      en: ['Specialized male fertility care', 'Advanced sperm retrieval techniques', 'Hormonal treatments'],
      ne: ['विशेष पुरुष प्रजनन हेरचाह', 'उन्नत शुक्राणु पुन: प्राप्ति प्रविधि', 'हर्मोनल उपचार']
    }
  },

  // SUPPORT SERVICES
  {
    id: 'infertility-counselling',
    category: 'support',
    title: {
      en: 'Infertility Counselling',
      ne: 'बांझोपन परामर्श'
    },
    description: {
      en: 'Professional psychological support and counselling to help couples navigate their fertility journey.',
      ne: 'दम्पतीहरूलाई उनीहरूको प्रजनन यात्रामा नेभिगेट गर्न मद्दत गर्न व्यावसायिक मनोवैज्ञानिक समर्थन र परामर्श।'
    },
    icon: 'MessageCircle',
    benefits: {
      en: ['Emotional support', 'Stress management', 'Decision-making guidance'],
      ne: ['भावनात्मक समर्थन', 'तनाव व्यवस्थापन', 'निर्णय लिने मार्गदर्शन']
    }
  },
  {
    id: 'antenatal-care',
    category: 'support',
    title: {
      en: 'Antenatal (Pregnancy) Follow-Up',
      ne: 'प्रसवपूर्व (गर्भावस्था) फलोअप'
    },
    description: {
      en: 'Comprehensive pregnancy monitoring and care from conception through delivery.',
      ne: 'गर्भधारणदेखि प्रसव सम्म व्यापक गर्भावस्था निगरानी र हेरचाह।'
    },
    icon: 'Baby',
    benefits: {
      en: ['Regular monitoring', 'Risk assessment', 'Healthy pregnancy support'],
      ne: ['नियमित निगरानी', 'जोखिम मूल्याङ्कन', 'स्वस्थ गर्भावस्था समर्थन']
    }
  },
  {
    id: 'recurrent-pregnancy-loss',
    category: 'support',
    title: {
      en: 'Recurrent Pregnancy Loss Clinic',
      ne: 'पुनरावर्ती गर्भावस्था हानि क्लिनिक'
    },
    description: {
      en: 'Specialized clinic for investigating and managing recurrent miscarriages with comprehensive testing.',
      ne: 'व्यापक परीक्षण सहित पुनरावर्ती गर्भपात अन्वेषण र व्यवस्थापन गर्न विशेष क्लिनिक।'
    },
    icon: 'Heart',
    benefits: {
      en: ['Identifies underlying causes', 'Personalized treatment plans', 'Emotional support'],
      ne: ['अन्तर्निहित कारण पहिचान', 'व्यक्तिगत उपचार योजना', 'भावनात्मक समर्थन']
    }
  }
];
