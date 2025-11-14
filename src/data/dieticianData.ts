export interface Dietician {
  id: string;
  name: string;
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
}

export const dieticianData: Dietician = {
  id: 'sajana-pokharel',
  name: 'Sajana Pokharel',
  designation: {
    en: 'Certified Dietician & Nutritionist',
    ne: 'प्रमाणित आहार विशेषज्ञ र पोषण विशेषज्ञ'
  },
  qualification: {
    en: 'M.Sc. in Nutrition and Dietetics, Certified Fertility Nutrition Specialist',
    ne: 'M.Sc. पोषण र आहार विज्ञान, प्रमाणित प्रजनन पोषण विशेषज्ञ'
  },
  experience: {
    en: '8+ Years',
    ne: '८+ वर्ष'
  },
  specialization: {
    en: 'PCOS Diet Management, Fertility Nutrition, Prenatal & Postnatal Nutrition, Weight Management for Fertility',
    ne: 'PCOS आहार व्यवस्थापन, प्रजनन पोषण, प्रसवपूर्व र प्रसवपछिको पोषण, प्रजननको लागि वजन व्यवस्थापन'
  },
  bio: {
    en: 'Sajana Pokharel is a certified dietician specializing in fertility nutrition and PCOS management. With over 8 years of experience, she has helped hundreds of women optimize their fertility through personalized nutrition plans. She focuses on evidence-based dietary interventions for PCOS, hormonal balance, and overall reproductive health.',
    ne: 'सजना पोखरेल प्रजनन पोषण र PCOS व्यवस्थापनमा विशेषज्ञता भएको प्रमाणित आहार विशेषज्ञ हुन्। ८ वर्षभन्दा बढी अनुभवका साथ, उनले सयौं महिलाहरूलाई व्यक्तिगत पोषण योजनाहरू मार्फत उनीहरूको प्रजनन क्षमता अनुकूलन गर्न मद्दत गरेका छन्। उनी PCOS, हर्मोनल सन्तुलन र समग्र प्रजनन स्वास्थ्यको लागि प्रमाणमा आधारित आहार हस्तक्षेपमा ध्यान केन्द्रित गर्छिन्।'
  },
  availability: {
    en: 'Sunday - Friday',
    ne: 'आइतबार - शुक्रबार'
  }
};
