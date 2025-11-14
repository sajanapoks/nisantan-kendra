import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { doctorsData } from '@/data/doctorsData';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, Calendar, BookOpen, Languages, Microscope, ArrowLeft } from 'lucide-react';

const DoctorProfile = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  
  const doctor = doctorsData.find(d => d.id === id);

  if (!doctor) {
    return <Navigate to="/doctors" replace />;
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/doctors">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Back to Doctors' : 'डाक्टरहरूमा फर्कनुहोस्'}
          </Button>
        </Link>

        {/* Doctor Profile */}
        <Card className="overflow-hidden">
          {/* Header Section */}
          <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-background shadow-lg shrink-0">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-foreground mb-2">{doctor.name}</h1>
                <p className="text-xl text-muted-foreground font-medium mb-4">
                  {language === 'en' ? doctor.designation.en : doctor.designation.ne}
                </p>
                <Badge variant="secondary" className="text-base px-4 py-2">
                  {language === 'en' ? doctor.availability.en : doctor.availability.ne}
                </Badge>
              </div>
            </div>
          </div>

          <CardContent className="p-8">
            {/* Key Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {language === 'en' ? 'Qualification' : 'योग्यता'}
                  </p>
                  <p className="font-semibold text-foreground">
                    {language === 'en' ? doctor.qualification.en : doctor.qualification.ne}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {language === 'en' ? 'Experience' : 'अनुभव'}
                  </p>
                  <p className="font-semibold text-foreground text-lg">
                    {language === 'en' ? doctor.experience.en : doctor.experience.ne}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {language === 'en' ? 'Specialization' : 'विशेषज्ञता'}
                  </p>
                  <p className="font-semibold text-foreground">
                    {language === 'en' ? doctor.specialization.en : doctor.specialization.ne}
                  </p>
                </div>
              </div>

              {doctor.languages && (
                <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg md:col-span-2 lg:col-span-3">
                  <Languages className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {language === 'en' ? 'Languages' : 'भाषाहरू'}
                    </p>
                    <p className="font-semibold text-foreground">
                      {language === 'en' ? doctor.languages.en : doctor.languages.ne}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Professional Summary */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                {language === 'en' ? 'Professional Summary' : 'व्यावसायिक सारांश'}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {language === 'en' ? doctor.bio.en : doctor.bio.ne}
              </p>
            </div>

            {/* Advanced Training */}
            {doctor.training && (
              <div className="mb-8 border-t border-border pt-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <Microscope className="w-6 h-6 text-primary" />
                  {language === 'en' ? 'Advanced Training' : 'उन्नत तालिम'}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {language === 'en' ? doctor.training.en : doctor.training.ne}
                </p>
              </div>
            )}

            {/* Career Milestones */}
            {doctor.timeline && doctor.timeline.length > 0 && (
              <div className="mb-8 border-t border-border pt-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  {language === 'en' ? 'Career Milestones' : 'क्यारियर माइलस्टोनहरू'}
                </h2>
                <div className="space-y-4">
                  {doctor.timeline.map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-start">
                      <div className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-lg font-bold shrink-0 min-w-[80px] text-center">
                        {item.year}
                      </div>
                      <p className="text-muted-foreground leading-relaxed pt-2 text-lg">
                        {language === 'en' ? item.event.en : item.event.ne}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Publications */}
            {doctor.publications && doctor.publications.length > 0 && (
              <div className="mb-8 border-t border-border pt-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  {language === 'en' ? 'Selected Publications' : 'चयनित प्रकाशनहरू'}
                </h2>
                <div className="space-y-4">
                  {doctor.publications.map((pub, idx) => (
                    <div key={idx} className="bg-muted/30 p-6 rounded-lg hover:bg-muted/50 transition-colors">
                      <p className="font-semibold text-foreground text-lg mb-2">{pub.title}</p>
                      <p className="text-muted-foreground">
                        {pub.journal} • {pub.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Books */}
            {doctor.books && doctor.books.length > 0 && (
              <div className="mb-8 border-t border-border pt-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  {language === 'en' ? 'Books & Monographs' : 'पुस्तकहरू र मोनोग्राफहरू'}
                </h2>
                <div className="space-y-4">
                  {doctor.books.map((book, idx) => (
                    <div key={idx} className="bg-primary/5 p-6 rounded-lg border-2 border-primary/20 hover:border-primary/40 transition-colors">
                      <p className="font-bold text-foreground text-xl mb-2">{book.title}</p>
                      <p className="text-muted-foreground text-lg">
                        {book.publisher} • {book.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact CTA */}
            <div className="border-t border-border pt-8">
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardHeader>
                  <h3 className="text-xl font-bold text-foreground text-center">
                    {language === 'en' ? 'Schedule an Appointment' : 'भेटघाट तय गर्नुहोस्'}
                  </h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    {language === 'en' 
                      ? 'Ready to start your fertility journey with our expert team?' 
                      : 'हाम्रो विशेषज्ञ टोलीसँग तपाईंको प्रजनन यात्रा सुरु गर्न तयार हुनुहुन्छ?'}
                  </p>
                  <Link to="/contact">
                    <Button size="lg" className="text-lg px-8">
                      {language === 'en' ? 'Contact Us' : 'हामीलाई सम्पर्क गर्नुहोस्'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoctorProfile;
