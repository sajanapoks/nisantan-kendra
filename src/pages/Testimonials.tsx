import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      name: 'Rachana Sigdel',
      location: 'Kathmandu',
      rating: 5,
      text: language === 'en'
        ? 'I had the privilege of meeting Dr. Uma Shrivastava. She is an exceptional doctor with a truly patient-centered approach. From the very first consultation, she made me feel heard, comfortable, and confident in the care I was receiving. Dr. Shrivastava takes the time to thoroughly explain diagnoses and treatment options in a way that is easy to understand. She genuinely cares about her patients and their well-being, which is evident in every interaction. Her professionalism, combined with her compassionate nature, sets her apart. I wholeheartedly recommend Dr. Uma Shrivastava to anyone seeking a knowledgeable and caring physician.'
        : 'मैले डा. उमा श्रीवास्तवलाई भेट्ने सौभाग्य पाएँ। उहाँ एक असाधारण डाक्टर हुनुहुन्छ र वास्तवमै बिरामी-केन्द्रित दृष्टिकोण राख्नुहुन्छ। पहिलो परामर्शदेखि नै, उहाँले मलाई सुनिएको, सहज र मैले प्राप्त गरिरहेको हेरचाहमा विश्वस्त महसुस गराउनुभयो। डा. श्रीवास्तवले निदान र उपचार विकल्पहरू राम्रोसँग बुझ्न सजिलो तरिकाले समय लिएर व्याख्या गर्नुहुन्छ। उहाँ आफ्ना बिरामीहरू र तिनीहरूको कल्याणको बारेमा साँच्चै ध्यान दिनुहुन्छ, जुन हरेक अन्तरक्रियामा स्पष्ट हुन्छ।',
    },
    {
      name: language === 'en' ? 'Happy Parent' : 'खुशी आमाबुवा',
      location: 'Kathmandu',
      rating: 5,
      text: language === 'en'
        ? "We were childless for 8 years and had lost hope. After various failed treatments elsewhere, we came to Nisantan Kendra. Dr. Uma Shrivastava's thorough diagnosis revealed issues that were previously missed. With her expert guidance and the center's advanced facilities, we successfully conceived through IVF. Today, we are proud parents of a healthy baby. The transparent counseling, honest approach, and affordable treatment made all the difference. We're forever grateful to the entire team."
        : 'हामी ८ वर्षसम्म सन्तानहीन थियौं र आशा गुमाइसकेका थियौं। अन्यत्र विभिन्न असफल उपचार पछि, हामी निसन्तान केन्द्र आयौं। डा. उमा श्रीवास्तवको पूर्ण निदानले पहिले छुटेका समस्याहरू पत्ता लगायो। उहाँको विशेषज्ञ मार्गदर्शन र केन्द्रको उन्नत सुविधाहरूले, हामीले आईभीएफ मार्फत सफलतापूर्वक गर्भधारण गर्यौं। आज, हामी स्वस्थ बच्चाका गर्वित आमाबुवा छौं।',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {language === 'en' ? 'Patient Testimonials' : 'बिरामी प्रशंसापत्र'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'en'
              ? 'Real stories from families we have helped achieve their dreams of parenthood'
              : 'हामीले आमाबुवा हुने सपना साकार गर्न मद्दत गरेका परिवारहरूका वास्तविक कथाहरू'}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center bg-gradient-to-br from-primary/10 to-primary/5">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">8000+</div>
              <p className="text-muted-foreground">
                {language === 'en' ? 'Happy Parents' : 'खुशी आमाबुवा'}
              </p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-secondary/10 to-secondary/5">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">32+</div>
              <p className="text-muted-foreground">
                {language === 'en' ? 'Years of Experience' : 'वर्षको अनुभव'}
              </p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-accent/10 to-accent/5">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <p className="text-muted-foreground">
                {language === 'en' ? 'Medical Workers' : 'चिकित्सा कर्मचारी'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Quote className="w-12 h-12 text-primary/20 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {testimonial.text}
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
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
                {language === 'en' ? 'Start Your Parenthood Journey' : 'आफ्नो आमाबुवाको यात्रा सुरु गर्नुहोस्'}
              </h2>
              <p className="text-muted-foreground mb-6">
                {language === 'en'
                  ? 'Join thousands of couples who trusted us with their dreams'
                  : 'हजारौं दम्पतीहरूसँग सामेल हुनुहोस् जसले हामीलाई आफ्नो सपनामा विश्वास गरे'}
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
