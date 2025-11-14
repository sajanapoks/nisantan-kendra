import drUmaShrivastava from '@/assets/dr-uma-shrivastava.jpg';
import drDaluckySherpa from '@/assets/dr-dalucky-sherpa.jpg';
import drSangitaChakrabartty from '@/assets/dr-sangita-chakrabartty.jpg';

export interface Doctor {
  id: string;
  name: string;
  image: string;
  designation: {
    en: string;
    ne: string;
  };
  qualification: {
    en: string;
    ne: string;
  };
  experience: {
    en: string;
    ne: string;
  };
  specialization: {
    en: string;
    ne: string;
  };
  bio: {
    en: string;
    ne: string;
  };
  availability: {
    en: string;
    ne: string;
  };
  languages?: {
    en: string;
    ne: string;
  };
  training?: {
    en: string;
    ne: string;
  };
  timeline?: Array<{
    year: string;
    event: {
      en: string;
      ne: string;
    };
  }>;
  publications?: Array<{
    year: string;
    title: string;
    journal: string;
  }>;
  books?: Array<{
    title: string;
    year: string;
    publisher: string;
  }>;
  isDetailed?: boolean;
}

export const doctorsData: Doctor[] = [
  {
    id: 'dr-uma-shrivastava',
    name: 'Dr. Uma Shrivastava',
    image: drUmaShrivastava,
    designation: {
      en: 'Executive Director & IVF Specialist',
      ne: 'कार्यकारी निर्देशक र आईभीएफ विशेषज्ञ'
    },
    qualification: {
      en: 'M.Sc. (Reproductive Endocrinology & Infertility, University of London - UCL), M.D. (L\'vov Institute of Medicine, Ukraine)',
      ne: 'M.Sc. (प्रजनन एन्डोक्रिनोलोजी र बाँझोपन, युनिभर्सिटी अफ लन्डन - UCL), M.D. (L\'vov इन्स्टिच्युट अफ मेडिसिन, युक्रेन)'
    },
    experience: {
      en: '30+ Years',
      ne: '३०+ वर्ष'
    },
    specialization: {
      en: 'Reproductive Endocrinology, IVF, ICSI, Infertility Management, Male Infertility, PCOS Treatment',
      ne: 'प्रजनन एन्डोक्रिनोलोजी, आईभीएफ, आईसीएसआई, बाँझोपन व्यवस्थापन, पुरुष बाँझोपन, PCOS उपचार'
    },
    bio: {
      en: 'Pioneer of infertility treatment in Nepal with over 30 years of experience. Founded Nepal\'s first dedicated Infertility Diagnostic & Treatment Centre in 1993. Trained in Reproductive Endocrinology at University College London (1988-1990). Credited with establishing the first IVF service in Nepal and helping conceive thousands of children via advanced infertility services. Served as Chapter Secretary of the Indian Fertility Society (Nepal chapter) and authored "Fundamentals of Infertility Treatment" (2022).',
      ne: 'नेपालमा बाँझोपन उपचारको अग्रगामी ३० वर्षभन्दा बढी अनुभवका साथ। १९९३ मा नेपालको पहिलो समर्पित बाँझोपन निदान र उपचार केन्द्र स्थापना गर्नुभयो। युनिभर्सिटी कलेज लन्डनमा प्रजनन एन्डोक्रिनोलोजीमा तालिम लिनुभयो (१९८८-१९९०)। नेपालमा पहिलो आईभीएफ सेवा स्थापना गर्ने र उन्नत बाँझोपन सेवाहरू मार्फत हजारौं बच्चाहरू जन्माउन सहयोग गर्ने श्रेय पाउनुभएको छ।'
    },
    availability: {
      en: 'Monday - Friday',
      ne: 'सोमबार - शुक्रबार'
    },
    languages: {
      en: 'Nepali, English, Hindi, Russian, Ukrainian',
      ne: 'नेपाली, अंग्रेजी, हिन्दी, रूसी, युक्रेनी'
    },
    training: {
      en: 'Advanced training in Reproductive Endocrinology from University College London (1988-1990). Extensive training and accreditation in IVF/ICSI procedures and ultrasonography.',
      ne: 'युनिभर्सिटी कलेज लन्डनबाट प्रजनन एन्डोक्रिनोलोजीमा उन्नत तालिम (१९८८-१९९०)। आईभीएफ/आईसीएसआई प्रक्रिया र अल्ट्रासोनोग्राफीमा व्यापक तालिम र मान्यता।'
    },
    timeline: [
      { 
        year: '1993', 
        event: {
          en: 'Founded Nepal\'s first Infertility Centre',
          ne: 'नेपालको पहिलो बाँझोपन केन्द्र स्थापना'
        }
      },
      { 
        year: '2002', 
        event: {
          en: 'Established first IVF service in Nepal',
          ne: 'नेपालमा पहिलो आईभीएफ सेवा स्थापना'
        }
      },
      { 
        year: '2022', 
        event: {
          en: 'Published "Fundamentals of Infertility Treatment"',
          ne: '"बाँझोपन उपचारको आधारभूत" प्रकाशित'
        }
      },
    ],
    publications: [
      {
        year: '2015',
        title: 'A Study on Management of An-ovulatory Infertility in Urban Nepalese Population',
        journal: 'World Journal of Pharmaceutical Sciences'
      },
      {
        year: '2019',
        title: 'Combined Clomiphene Citrate-Metformin Versus Letrozole-Metformin in Achieving Pregnancy among Women with PCOS',
        journal: 'Gynecol & Reprod Health'
      },
      {
        year: '2020',
        title: 'Pioneering In Vitro Fertilization in Nepal: Effectiveness in Different Age-Groups',
        journal: 'Gynecology & Reproductive Health'
      },
      {
        year: '2021',
        title: 'A Randomized Controlled Trial of Combination Therapy in Ovulation Induction',
        journal: 'Fertility Science & Research'
      },
    ],
    books: [
      {
        title: 'Fundamentals of Infertility Treatment',
        year: '2022',
        publisher: 'Samiksha Publication, Kathmandu'
      }
    ],
    isDetailed: true,
  },
  {
    id: 'dr-dalucky-sherpa',
    name: 'Dr. Dalucky Sherpa',
    image: drDaluckySherpa,
    designation: {
      en: 'Consultant Gynecologist',
      ne: 'परामर्शदाता स्त्री रोग विशेषज्ञ'
    },
    qualification: {
      en: 'MD (Obstetrics & Gynecology)',
      ne: 'MD (प्रसूति र स्त्री रोग विज्ञान)'
    },
    experience: {
      en: '10+ Years',
      ne: '१०+ वर्ष'
    },
    specialization: {
      en: 'IVF Procedures, Women\'s Reproductive Health, Fertility Assessment',
      ne: 'आईभीएफ प्रक्रियाहरू, महिला प्रजनन स्वास्थ्य, प्रजनन मूल्याङ्कन'
    },
    bio: {
      en: 'Experienced gynecologist specializing in assisted reproductive technologies with focus on personalized patient care and treatment optimization.',
      ne: 'व्यक्तिगत बिरामी हेरचाह र उपचार अनुकूलनमा ध्यान केन्द्रित गर्दै सहायक प्रजनन प्रविधिहरूमा विशेषज्ञता राख्ने अनुभवी स्त्री रोग विशेषज्ञ।'
    },
    availability: {
      en: 'Monday - Friday',
      ne: 'सोमबार - शुक्रबार'
    },
  },
  {
    id: 'dr-sangita-chakrabartty',
    name: 'Dr. Sangita Chakrabartty',
    image: drSangitaChakrabartty,
    designation: {
      en: 'Consultant Gynecologist & Embryologist',
      ne: 'परामर्शदाता स्त्री रोग विशेषज्ञ र भ्रूणविज्ञानी'
    },
    qualification: {
      en: 'MD (Obstetrics & Gynecology)',
      ne: 'MD (प्रसूति र स्त्री रोग विज्ञान)'
    },
    experience: {
      en: '10+ Years',
      ne: '१०+ वर्ष'
    },
    specialization: {
      en: 'Embryology, IVF Laboratory Management, Reproductive Medicine',
      ne: 'भ्रूणविज्ञान, आईभीएफ प्रयोगशाला व्यवस्थापन, प्रजनन चिकित्सा'
    },
    bio: {
      en: 'Expert in embryology and laboratory procedures with extensive experience in IVF culture techniques and quality management.',
      ne: 'आईभीएफ संस्कृति प्रविधिहरू र गुणस्तर व्यवस्थापनमा व्यापक अनुभव भएका भ्रूणविज्ञान र प्रयोगशाला प्रक्रियाहरूमा विशेषज्ञ।'
    },
    availability: {
      en: 'Monday - Saturday',
      ne: 'सोमबार - शनिबार'
    },
  },
];
