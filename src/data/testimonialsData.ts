export interface Testimonial {
  id: string;
  category: 'primary' | 'diagnostic' | 'treatment' | 'support';
  name: {
    en: string;
    ne: string;
  };
  location: {
    en: string;
    ne: string;
  };
  serviceUsed: {
    en: string;
    ne: string;
  };
  rating: number;
  testimonial: {
    en: string;
    ne: string;
  };
  date: string;
}

export const testimonialsData: Testimonial[] = [
  // PRIMARY SERVICES TESTIMONIALS
  {
    id: 'test-1',
    category: 'primary',
    name: { en: 'Sita Sharma', ne: 'सीता शर्मा' },
    location: { en: 'Kathmandu', ne: 'काठमाडौं' },
    serviceUsed: { en: 'IVF Treatment', ne: 'IVF उपचार' },
    rating: 5,
    testimonial: {
      en: 'After years of struggle, we finally conceived through IVF. The doctors were compassionate and the process was well-explained. We now have a beautiful baby girl!',
      ne: 'वर्षौंको संघर्ष पछि, हामीले अन्ततः IVF मार्फत गर्भधारण गर्यौं। डाक्टरहरू दयालु थिए र प्रक्रिया राम्रोसँग व्याख्या गरियो। हामीसँग अब एउटा सुन्दर छोरी छ!'
    },
    date: '2024-03'
  },
  {
    id: 'test-2',
    category: 'primary',
    name: { en: 'Rajesh Thapa', ne: 'राजेश थापा' },
    location: { en: 'Pokhara', ne: 'पोखरा' },
    serviceUsed: { en: 'ICSI Treatment', ne: 'ICSI उपचार' },
    rating: 5,
    testimonial: {
      en: 'The ICSI procedure gave us hope when nothing else worked. The success rate was excellent and the staff was very supportive throughout our journey.',
      ne: 'ICSI प्रक्रियाले हामीलाई आशा दियो जब अरू केही काम गरेन। सफलता दर उत्कृष्ट थियो र कर्मचारीहरू हाम्रो यात्रामा धेरै सहयोगी थिए।'
    },
    date: '2024-02'
  },
  {
    id: 'test-3',
    category: 'primary',
    name: { en: 'Maya Gurung', ne: 'माया गुरुङ' },
    location: { en: 'Bhaktapur', ne: 'भक्तपुर' },
    serviceUsed: { en: 'IUI Treatment', ne: 'IUI उपचार' },
    rating: 4,
    testimonial: {
      en: 'IUI was a less invasive option for us and it worked! The clinic provided excellent care and made us feel comfortable throughout the process.',
      ne: 'IUI हाम्रो लागि कम आक्रामक विकल्प थियो र यसले काम गर्यो! क्लिनिकले उत्कृष्ट हेरचाह प्रदान गर्‍यो र प्रक्रिया भरि हामीलाई सहज महसुस गराएको छ।'
    },
    date: '2024-04'
  },

  // DIAGNOSTIC SERVICES TESTIMONIALS
  {
    id: 'test-4',
    category: 'diagnostic',
    name: { en: 'Anita Rai', ne: 'अनिता राई' },
    location: { en: 'Lalitpur', ne: 'ललितपुर' },
    serviceUsed: { en: 'Hormone Testing', ne: 'हर्मोन परीक्षण' },
    rating: 5,
    testimonial: {
      en: 'The comprehensive hormone testing helped identify my thyroid issue which was affecting fertility. Early detection made all the difference!',
      ne: 'व्यापक हर्मोन परीक्षणले मेरो थाइरोइड समस्या पहिचान गर्न मद्दत गर्‍यो जसले प्रजनन क्षमतालाई असर गरिरहेको थियो। प्रारम्भिक पत्ता लगाउनले सबै फरक पार्यो!'
    },
    date: '2024-01'
  },
  {
    id: 'test-5',
    category: 'diagnostic',
    name: { en: 'Prakash Karki', ne: 'प्रकाश कार्की' },
    location: { en: 'Butwal', ne: 'बुटवल' },
    serviceUsed: { en: 'Semen Analysis', ne: 'वीर्य विश्लेषण' },
    rating: 5,
    testimonial: {
      en: 'Accurate and detailed semen analysis helped us understand the issue. The lab facilities are world-class and results were quick.',
      ne: 'सटीक र विस्तृत वीर्य विश्लेषणले हामीलाई समस्या बुझ्न मद्दत गर्‍यो। प्रयोगशाला सुविधाहरू विश्व स्तरीय छन् र परिणामहरू छिटो थिए।'
    },
    date: '2024-03'
  },

  // TREATMENT SERVICES TESTIMONIALS
  {
    id: 'test-6',
    category: 'treatment',
    name: { en: 'Sunita Adhikari', ne: 'सुनिता अधिकारी' },
    location: { en: 'Biratnagar', ne: 'विराटनगर' },
    serviceUsed: { en: 'PCOS Management', ne: 'PCOS व्यवस्थापन' },
    rating: 5,
    testimonial: {
      en: 'The PCOS management program transformed my life. From lifestyle changes to medication, everything was perfectly planned and executed.',
      ne: 'PCOS व्यवस्थापन कार्यक्रमले मेरो जीवन परिवर्तन गर्यो। जीवनशैली परिवर्तनदेखि औषधि सम्म, सबै कुरा पूर्ण रूपमा योजनाबद्ध र कार्यान्वयन गरिएको थियो।'
    },
    date: '2024-02'
  },
  {
    id: 'test-7',
    category: 'treatment',
    name: { en: 'Ram Bahadur Tamang', ne: 'राम बहादुर तामाङ' },
    location: { en: 'Dharan', ne: 'धरान' },
    serviceUsed: { en: 'Laparoscopy Treatment', ne: 'ल्याप्रोस्कोपी उपचार' },
    rating: 4,
    testimonial: {
      en: 'Minimally invasive laparoscopy solved our tubal blockage issue. Recovery was quick and the surgical team was highly skilled.',
      ne: 'न्यूनतम आक्रामक ल्याप्रोस्कोपीले हाम्रो ट्युबल अवरोध समस्या समाधान गर्यो। रिकभरी छिटो थियो र शल्य चिकित्सा टोली अत्यधिक कुशल थियो।'
    },
    date: '2024-04'
  },
  {
    id: 'test-8',
    category: 'treatment',
    name: { en: 'Gita Shrestha', ne: 'गीता श्रेष्ठ' },
    location: { en: 'Bhairahawa', ne: 'भैरहवा' },
    serviceUsed: { en: 'Endometriosis Treatment', ne: 'एन्डोमेट्रियोसिस उपचार' },
    rating: 5,
    testimonial: {
      en: 'Living with endometriosis was painful, but the treatment here gave me my life back. The doctors truly understood my condition.',
      ne: 'एन्डोमेट्रियोसिस संग बाँच्नु पीडादायी थियो, तर यहाँको उपचारले मलाई मेरो जीवन फिर्ता दियो। डाक्टरहरूले मेरो अवस्था साँच्चै बुझे।'
    },
    date: '2024-01'
  },

  // SUPPORT SERVICES TESTIMONIALS
  {
    id: 'test-9',
    category: 'support',
    name: { en: 'Kamala Poudel', ne: 'कमला पौडेल' },
    location: { en: 'Chitwan', ne: 'चितवन' },
    serviceUsed: { en: 'Infertility Counselling', ne: 'बांझोपन परामर्श' },
    rating: 5,
    testimonial: {
      en: 'The counselling sessions helped us cope with the emotional stress of infertility. It was a crucial part of our healing journey.',
      ne: 'परामर्श सत्रहरूले हामीलाई बांझोपनको भावनात्मक तनावसँग सामना गर्न मद्दत गर्‍यो। यो हाम्रो निको पार्ने यात्राको एक महत्वपूर्ण भाग थियो।'
    },
    date: '2024-03'
  },
  {
    id: 'test-10',
    category: 'support',
    name: { en: 'Deepak Basnet', ne: 'दीपक बस्नेत' },
    location: { en: 'Janakpur', ne: 'जनकपुर' },
    serviceUsed: { en: 'Embryo Cryopreservation', ne: 'भ्रूण क्रायोप्रिजर्भेसन' },
    rating: 5,
    testimonial: {
      en: 'Preserving our embryos gave us peace of mind and options for the future. The facility uses cutting-edge technology.',
      ne: 'हाम्रो भ्रूणहरू संरक्षण गर्नाले हामीलाई मानसिक शान्ति र भविष्यको लागि विकल्पहरू दियो। सुविधाले अत्याधुनिक प्रविधि प्रयोग गर्दछ।'
    },
    date: '2024-02'
  }
];
