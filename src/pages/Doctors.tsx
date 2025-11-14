import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { doctorsData } from '@/data/doctorsData';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, Calendar, ArrowRight } from 'lucide-react';

const Doctors = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {language === 'en' ? 'Our Doctors' : 'हाम्रा डाक्टरहरू'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'en'
              ? 'Meet our team of experienced fertility specialists dedicated to helping you achieve your dreams'
              : 'तपाईंको सपना साकार गर्न समर्पित अनुभवी प्रजनन विशेषज्ञहरूको हाम्रो टोलीलाई भेट्नुहोस्'}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {doctorsData.map((doctor, index) => (
            <Card 
              key={doctor.id} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              {/* Doctor Image */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Doctor Info */}
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="text-center">
                  <h2 className="text-xl font-bold text-foreground mb-2">{doctor.name}</h2>
                  <p className="text-muted-foreground font-medium text-sm">
                    {language === 'en' ? doctor.designation.en : doctor.designation.ne}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="space-y-4 mb-6 flex-1">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        {language === 'en' ? 'Qualification' : 'योग्यता'}
                      </p>
                      <p className="font-semibold text-foreground text-sm line-clamp-2">
                        {language === 'en' ? doctor.qualification.en : doctor.qualification.ne}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        {language === 'en' ? 'Experience' : 'अनुभव'}
                      </p>
                      <p className="font-semibold text-foreground">
                        {language === 'en' ? doctor.experience.en : doctor.experience.ne}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        {language === 'en' ? 'Specialization' : 'विशेषज्ञता'}
                      </p>
                      <p className="font-semibold text-foreground text-sm line-clamp-2">
                        {language === 'en' ? doctor.specialization.en : doctor.specialization.ne}
                      </p>
                    </div>
                  </div>

                  <Badge variant="secondary" className="w-fit">
                    {language === 'en' ? doctor.availability.en : doctor.availability.ne}
                  </Badge>
                </div>

                <Link to={`/doctors/${doctor.id}`} className="w-full">
                  <Button className="w-full transition-transform hover:scale-105 duration-300" variant="default">
                    {language === 'en' ? 'View Full Profile' : 'पूर्ण प्रोफाइल हेर्नुहोस्'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Message */}
        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              {language === 'en' ? 'Supported by a Dedicated Team' : 'समर्पित टोलीद्वारा समर्थित'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'en'
                ? 'Our doctors are supported by highly trained embryologists, laboratory technicians, nurses, and support staff who work together to provide comprehensive care at every step of your journey.'
                : 'हाम्रा डाक्टरहरूलाई उच्च तालिम प्राप्त भ्रूणविज्ञानी, प्रयोगशाला प्राविधिक, नर्स र सहयोगी कर्मचारीहरूद्वारा समर्थन गरिन्छ जो तपाईंको यात्राको हरेक चरणमा व्यापक हेरचाह प्रदान गर्न सँगै काम गर्छन्।'}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Doctors;
