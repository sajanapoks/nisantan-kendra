import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { ivfFacilities } from '@/data/ivfData';

const IVFDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const facility = ivfFacilities.find((f) => f.id === id);

  if (!facility) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            {language === 'en' ? 'Facility Not Found' : 'सुविधा फेला परेन'}
          </h1>
          <Button onClick={() => navigate('/ivf-unit')}>
            {language === 'en' ? 'Back to IVF Unit' : 'आईभीएफ युनिटमा फर्कनुहोस्'}
          </Button>
        </div>
      </div>
    );
  }

  const Icon = facility.icon;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/ivf-unit')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === 'en' ? 'Back to IVF Unit' : 'आईभीएफ युनिटमा फर्कनुहोस्'}
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              {language === 'en' ? facility.title.en : facility.title.np}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            {language === 'en' ? facility.description.en : facility.description.np}
          </p>
        </div>

        {/* Full Description */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              {language === 'en' ? 'Overview' : 'सिंहावलोकन'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'en' ? facility.fullDescription.en : facility.fullDescription.np}
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              {language === 'en' ? 'Key Features' : 'मुख्य विशेषताहरू'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(language === 'en' ? facility.features.en : facility.features.np).map(
                (feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>

        {/* Procedures */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              {language === 'en' ? 'Procedures Performed' : 'गरिएका प्रक्रियाहरू'}
            </h2>
            <div className="space-y-3">
              {(language === 'en' ? facility.procedures.en : facility.procedures.np).map(
                (procedure, index) => (
                  <div
                    key={index}
                    className="bg-secondary/10 p-4 rounded-lg border border-border"
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{index + 1}</Badge>
                      <span className="font-medium text-foreground">{procedure}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>

        {/* Equipment */}
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              {language === 'en' ? 'Equipment & Technology' : 'उपकरण र प्रविधि'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(language === 'en' ? facility.equipment.en : facility.equipment.np).map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <span className="text-foreground">{item}</span>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {language === 'en'
                  ? 'Ready to Start Your Journey?'
                  : 'आफ्नो यात्रा सुरु गर्न तयार हुनुहुन्छ?'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'en'
                  ? 'Schedule a consultation with our specialists to learn more about our services.'
                  : 'हाम्रो सेवाहरूको बारेमा थप जान्नको लागि हाम्रा विशेषज्ञहरूसँग परामर्श तालिका बनाउनुहोस्।'}
              </p>
              <Button size="lg" onClick={() => navigate('/contact')}>
                {language === 'en' ? 'Contact Us' : 'हामीलाई सम्पर्क गर्नुहोस्'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IVFDetail;
