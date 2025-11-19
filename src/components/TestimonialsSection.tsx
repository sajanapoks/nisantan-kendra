import { useLanguage } from '@/contexts/LanguageContext';
import { testimonialsData, Testimonial } from '@/data/testimonialsData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';

interface TestimonialsSectionProps {
  category?: 'primary' | 'diagnostic' | 'treatment' | 'support' | 'all';
}

export const TestimonialsSection = ({ category = 'all' }: TestimonialsSectionProps) => {
  const { language } = useLanguage();

  const filteredTestimonials = category === 'all' 
    ? testimonialsData 
    : testimonialsData.filter(t => t.category === category);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
          />
        ))}
      </div>
    );
  };

  if (filteredTestimonials.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-foreground">
          {language === 'en' ? 'Patient Success Stories' : 'बिरामीहरूको सफलता कथाहरू'}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {language === 'en' 
            ? 'Real experiences from our patients who achieved their dream of parenthood'
            : 'हाम्रा बिरामीहरूबाट वास्तविक अनुभवहरू जसले आफ्नो अभिभावकत्वको सपना प्राप्त गरे'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTestimonials.map((testimonial: Testimonial) => (
          <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {language === 'en' ? testimonial.name.en : testimonial.name.ne}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{language === 'en' ? testimonial.location.en : testimonial.location.ne}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {testimonial.category}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between">
                  {renderStars(testimonial.rating)}
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{testimonial.date}</span>
                  </div>
                </div>

                {/* Service Used */}
                <div className="text-sm">
                  <span className="font-medium text-primary">
                    {language === 'en' ? testimonial.serviceUsed.en : testimonial.serviceUsed.ne}
                  </span>
                </div>

                {/* Testimonial */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-1" />
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6 italic">
                    {language === 'en' ? testimonial.testimonial.en : testimonial.testimonial.ne}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
