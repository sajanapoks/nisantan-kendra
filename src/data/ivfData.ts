import { FlaskConical, Building2, Microscope, ThermometerSnowflake, ShieldCheck } from 'lucide-react';

export interface IVFFacility {
  id: string;
  icon: any;
  title: {
    en: string;
    np: string;
  };
  description: {
    en: string;
    np: string;
  };
  fullDescription: {
    en: string;
    np: string;
  };
  features: {
    en: string[];
    np: string[];
  };
  procedures: {
    en: string[];
    np: string[];
  };
  equipment: {
    en: string[];
    np: string[];
  };
}

export const ivfFacilities: IVFFacility[] = [
  {
    id: 'reception-consultation',
    icon: Building2,
    title: {
      en: 'Reception & Consultation',
      np: 'स्वागत र परामर्श',
    },
    description: {
      en: 'Comfortable waiting area and private consultation rooms for patient privacy',
      np: 'बिरामी गोपनीयताको लागि आरामदायक प्रतीक्षा क्षेत्र र निजी परामर्श कोठाहरू',
    },
    fullDescription: {
      en: 'Our reception and consultation area is designed with patient comfort and privacy in mind. The welcoming environment helps ease anxiety while maintaining the highest standards of confidentiality.',
      np: 'हाम्रो स्वागत र परामर्श क्षेत्र बिरामी आराम र गोपनीयतालाई ध्यानमा राखेर डिजाइन गरिएको छ। स्वागतयोग्य वातावरणले गोपनीयताको उच्चतम मापदण्ड कायम राख्दै चिन्ता कम गर्न मद्दत गर्दछ।',
    },
    features: {
      en: [
        'Comfortable waiting lounge with refreshments',
        'Private consultation rooms with soundproofing',
        'Dedicated counseling areas for emotional support',
        'Digital check-in system for reduced wait times',
        'Multilingual staff for diverse patient needs',
      ],
      np: [
        'खाजा सहित आरामदायक प्रतीक्षा लाउन्ज',
        'साउन्डप्रूफिङ सहित निजी परामर्श कोठाहरू',
        'भावनात्मक समर्थनको लागि समर्पित परामर्श क्षेत्रहरू',
        'कम प्रतीक्षा समयको लागि डिजिटल चेक-इन प्रणाली',
        'विविध बिरामी आवश्यकताहरूको लागि बहुभाषिक कर्मचारीहरू',
      ],
    },
    procedures: {
      en: [
        'Initial fertility assessment and consultation',
        'Treatment planning and protocol discussion',
        'Financial counseling and insurance coordination',
        'Psychological counseling and support',
      ],
      np: [
        'प्रारम्भिक प्रजनन मूल्यांकन र परामर्श',
        'उपचार योजना र प्रोटोकल छलफल',
        'वित्तीय परामर्श र बीमा समन्वय',
        'मनोवैज्ञानिक परामर्श र समर्थन',
      ],
    },
    equipment: {
      en: [
        'Secure patient data management system',
        'Video consultation facilities',
        'Educational material display screens',
      ],
      np: [
        'सुरक्षित बिरामी डाटा व्यवस्थापन प्रणाली',
        'भिडियो परामर्श सुविधाहरू',
        'शैक्षिक सामग्री प्रदर्शन स्क्रिनहरू',
      ],
    },
  },
  {
    id: 'embryology-laboratory',
    icon: FlaskConical,
    title: {
      en: 'Embryology Laboratory',
      np: 'भ्रूणविज्ञान प्रयोगशाला',
    },
    description: {
      en: 'State-of-the-art lab with controlled environment for embryo culture and development',
      np: 'भ्रूण संस्कृति र विकासको लागि नियन्त्रित वातावरण सहित अत्याधुनिक प्रयोगशाला',
    },
    fullDescription: {
      en: 'Our embryology laboratory is the heart of our IVF unit, equipped with cutting-edge technology and maintained under strict environmental controls to ensure optimal conditions for embryo development and success.',
      np: 'हाम्रो भ्रूणविज्ञान प्रयोगशाला हाम्रो आईभीएफ युनिटको मुटु हो, अत्याधुनिक प्रविधिले सुसज्जित र भ्रूण विकास र सफलताको लागि इष्टतम अवस्था सुनिश्चित गर्न कडा वातावरणीय नियन्त्रण अन्तर्गत राखिएको छ।',
    },
    features: {
      en: [
        'HEPA filtered air circulation system',
        'Positive pressure environment',
        'Temperature and humidity control (±0.1°C accuracy)',
        'Specialized lighting to protect embryos',
        'ISO Class 5 cleanroom standards',
      ],
      np: [
        'HEPA फिल्टर्ड एयर सर्कुलेशन प्रणाली',
        'सकारात्मक दबाव वातावरण',
        'तापक्रम र आर्द्रता नियन्त्रण (±०.१°C सटीकता)',
        'भ्रूणहरूलाई सुरक्षित गर्न विशेष प्रकाश',
        'ISO Class 5 क्लिनरूम मापदण्डहरू',
      ],
    },
    procedures: {
      en: [
        'Oocyte (egg) handling and preparation',
        'Embryo culture and monitoring',
        'Embryo grading and selection',
        'Time-lapse imaging for embryo development tracking',
        'Assisted hatching procedures',
      ],
      np: [
        'oocyte (अण्डा) ह्यान्डलिंग र तयारी',
        'भ्रूण संस्कृति र अनुगमन',
        'भ्रूण ग्रेडिङ र चयन',
        'भ्रूण विकास ट्र्याकिङको लागि टाइम-ल्याप्स इमेजिङ',
        'सहायक ह्याचिङ प्रक्रियाहरू',
      ],
    },
    equipment: {
      en: [
        'CO₂ incubators with time-lapse imaging',
        'Inverted microscopes with micromanipulators',
        'HEPA and VOC filtration systems',
        'Embryoscope for continuous monitoring',
        'Culture media warming systems',
      ],
      np: [
        'टाइम-ल्याप्स इमेजिङ सहित CO₂ इन्क्यूबेटरहरू',
        'माइक्रोम्यानिपुलेटर सहित उल्टो माइक्रोस्कोपहरू',
        'HEPA र VOC फिल्टरेशन प्रणालीहरू',
        'निरन्तर अनुगमनको लागि Embryoscope',
        'कल्चर मिडिया वार्मिङ प्रणालीहरू',
      ],
    },
  },
  {
    id: 'icsi-laboratory',
    icon: Microscope,
    title: {
      en: 'ICSI Laboratory',
      np: 'आईसीएसआई प्रयोगशाला',
    },
    description: {
      en: 'Specialized equipment for intracytoplasmic sperm injection procedures',
      np: 'इन्ट्रासाइटोप्लाज्मिक स्पर्म इन्जेक्शन प्रक्रियाहरूको लागि विशेष उपकरण',
    },
    fullDescription: {
      en: 'Our ICSI laboratory is equipped with precision micromanipulation systems for performing intracytoplasmic sperm injection, a technique used to overcome male infertility issues by directly injecting a single sperm into an egg.',
      np: 'हाम्रो आईसीएसआई प्रयोगशाला इन्ट्रासाइटोप्लाज्मिक स्पर्म इन्जेक्शन गर्नको लागि परिशुद्धता माइक्रोम्यानिपुलेसन प्रणालीहरूले सुसज्जित छ, यो एक प्रविधि हो जुन अण्डामा एकल स्पर्म सीधा इन्जेक्शन गरेर पुरुष बांझपन समस्याहरू समाधान गर्न प्रयोग गरिन्छ।',
    },
    features: {
      en: [
        'Advanced micromanipulation workstations',
        'Anti-vibration tables for precision work',
        'High-resolution imaging systems',
        'Sterile laminar flow hoods',
        'Real-time quality control monitoring',
      ],
      np: [
        'उन्नत माइक्रोम्यानिपुलेसन वर्कस्टेशनहरू',
        'परिशुद्धता कार्यको लागि एन्टी-भाइब्रेसन टेबलहरू',
        'उच्च रिजोल्युसन इमेजिङ प्रणालीहरू',
        'बाँझ लामिनार फ्लो हुडहरू',
        'वास्तविक-समय गुणस्तर नियन्त्रण अनुगमन',
      ],
    },
    procedures: {
      en: [
        'Sperm selection and preparation',
        'Intracytoplasmic sperm injection (ICSI)',
        'Physiological ICSI (PICSI)',
        'Testicular sperm extraction (TESE) procedures',
        'Sperm DNA fragmentation assessment',
      ],
      np: [
        'स्पर्म चयन र तयारी',
        'इन्ट्रासाइटोप्लाज्मिक स्पर्म इन्जेक्शन (ICSI)',
        'फिजियोलोजिकल ICSI (PICSI)',
        'टेस्टिकुलर स्पर्म एक्सट्र्याक्शन (TESE) प्रक्रियाहरू',
        'स्पर्म DNA विखण्डन मूल्यांकन',
      ],
    },
    equipment: {
      en: [
        'Micromanipulator systems with joystick control',
        'Inverted microscopes with Hoffman modulation',
        'Piezo-driven ICSI systems',
        'Sperm analysis systems (CASA)',
        'Heated stages for optimal temperature',
      ],
      np: [
        'जोयस्टिक नियन्त्रण सहित माइक्रोम्यानिपुलेटर प्रणालीहरू',
        'होफम्यान मोड्युलेसन सहित उल्टो माइक्रोस्कोपहरू',
        'Piezo-driven ICSI प्रणालीहरू',
        'स्पर्म विश्लेषण प्रणालीहरू (CASA)',
        'इष्टतम तापक्रमको लागि तातो चरणहरू',
      ],
    },
  },
  {
    id: 'cryopreservation-unit',
    icon: ThermometerSnowflake,
    title: {
      en: 'Cryopreservation Unit',
      np: 'क्रायोप्रिजर्भेसन युनिट',
    },
    description: {
      en: 'Advanced freezing technology with backup systems for safe storage',
      np: 'सुरक्षित भण्डारणको लागि ब्याकअप प्रणालीहरू सहित उन्नत फ्रीजिङ प्रविधि',
    },
    fullDescription: {
      en: 'Our cryopreservation unit uses advanced vitrification technology to safely freeze and store embryos, eggs, and sperm for future use. The facility is equipped with multiple backup systems to ensure continuous optimal storage conditions.',
      np: 'हाम्रो क्रायोप्रिजर्भेसन युनिटले भविष्यको प्रयोगको लागि भ्रूण, अण्डा र स्पर्म सुरक्षित रूपमा फ्रिज र भण्डारण गर्न उन्नत भिट्रिफिकेशन प्रविधि प्रयोग गर्दछ। सुविधा निरन्तर इष्टतम भण्डारण अवस्था सुनिश्चित गर्न धेरै ब्याकअप प्रणालीहरूले सुसज्जित छ।',
    },
    features: {
      en: [
        'Vitrification for rapid freezing',
        'Liquid nitrogen storage tanks',
        'Automated temperature monitoring',
        'Dual backup power systems',
        'Alarm systems for temperature deviations',
      ],
      np: [
        'द्रुत फ्रीजिङको लागि भिट्रिफिकेशन',
        'तरल नाइट्रोजन भण्डारण ट्याङ्कहरू',
        'स्वचालित तापक्रम अनुगमन',
        'दोहोरो ब्याकअप पावर प्रणालीहरू',
        'तापक्रम विचलनको लागि अलार्म प्रणालीहरू',
      ],
    },
    procedures: {
      en: [
        'Embryo freezing (vitrification)',
        'Egg (oocyte) freezing',
        'Sperm cryopreservation',
        'Thawing procedures',
        'Long-term storage management',
      ],
      np: [
        'भ्रूण फ्रीजिङ (भिट्रिफिकेशन)',
        'अण्डा (oocyte) फ्रीजिङ',
        'स्पर्म क्रायोप्रिजर्भेसन',
        'पग्लाउने प्रक्रियाहरू',
        'दीर्घकालीन भण्डारण व्यवस्थापन',
      ],
    },
    equipment: {
      en: [
        'Liquid nitrogen storage dewars',
        'Controlled-rate freezers',
        'Vitrification devices',
        'Cryogenic storage racks',
        'Temperature monitoring systems',
      ],
      np: [
        'तरल नाइट्रोजन भण्डारण dewars',
        'नियन्त्रित-दर फ्रीजरहरू',
        'भिट्रिफिकेशन उपकरणहरू',
        'क्रायोजेनिक भण्डारण र्याकहरू',
        'तापक्रम अनुगमन प्रणालीहरू',
      ],
    },
  },
  {
    id: 'operation-theatre',
    icon: ShieldCheck,
    title: {
      en: 'Operation Theatre',
      np: 'शल्यक्रिया कक्ष',
    },
    description: {
      en: 'Sterile environment equipped for egg retrieval and embryo transfer',
      np: 'अण्डा पुनर्प्राप्ति र भ्रूण स्थानान्तरणको लागि सुसज्जित बाँझ वातावरण',
    },
    fullDescription: {
      en: 'Our operation theatre is a specialized sterile environment designed for performing egg retrieval and embryo transfer procedures with precision and patient comfort. The facility follows international standards for surgical safety and infection control.',
      np: 'हाम्रो शल्यक्रिया कक्ष परिशुद्धता र बिरामी आरामको साथ अण्डा पुनर्प्राप्ति र भ्रूण स्थानान्तरण प्रक्रियाहरू गर्न डिजाइन गरिएको विशेष बाँझ वातावरण हो। सुविधाले शल्य सुरक्षा र संक्रमण नियन्त्रणको लागि अन्तर्राष्ट्रिय मापदण्डहरू पालना गर्दछ।',
    },
    features: {
      en: [
        'HEPA filtered laminar airflow',
        'Operating microscopes with recording',
        'Anesthesia monitoring equipment',
        'Patient recovery area',
        'Direct communication with embryology lab',
      ],
      np: [
        'HEPA फिल्टर्ड लामिनार एयरफ्लो',
        'रेकर्डिङ सहित अपरेटिङ माइक्रोस्कोपहरू',
        'एनेस्थेसिया अनुगमन उपकरण',
        'बिरामी रिकभरी क्षेत्र',
        'भ्रूणविज्ञान प्रयोगशालासँग प्रत्यक्ष संचार',
      ],
    },
    procedures: {
      en: [
        'Ovarian follicle aspiration (egg retrieval)',
        'Embryo transfer procedures',
        'Hysteroscopy for uterine assessment',
        'Minor surgical corrections',
        'Semen collection procedures',
      ],
      np: [
        'डिम्बग्रंथि फोलिकल एस्पिरेशन (अण्डा पुनर्प्राप्ति)',
        'भ्रूण स्थानान्तरण प्रक्रियाहरू',
        'गर्भाशय मूल्यांकनको लागि हिस्टेरोस्कोपी',
        'सानो शल्य सुधार',
        'वीर्य सङ्कलन प्रक्रियाहरू',
      ],
    },
    equipment: {
      en: [
        'Ultrasound machines for guided procedures',
        'Aspiration pumps and needles',
        'Embryo transfer catheters',
        'Anesthesia delivery systems',
        'Vital signs monitoring equipment',
      ],
      np: [
        'निर्देशित प्रक्रियाहरूको लागि अल्ट्रासाउन्ड मेसिनहरू',
        'एस्पिरेशन पम्प र सुईहरू',
        'भ्रूण स्थानान्तरण क्याथेटरहरू',
        'एनेस्थेसिया वितरण प्रणालीहरू',
        'महत्त्वपूर्ण संकेत अनुगमन उपकरण',
      ],
    },
  },
];
