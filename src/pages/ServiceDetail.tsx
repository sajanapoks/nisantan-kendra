import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { servicesData } from '@/data/servicesData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, Clock, TrendingUp } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/services">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'en' ? 'Back to Services' : 'सेवाहरूमा फर्कनुहोस्'}
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-foreground">
                  {language === 'en' ? service.title.en : service.title.ne}
                </h1>
                <Badge variant="secondary">{service.category}</Badge>
              </div>
              <p className="text-lg text-muted-foreground">
                {language === 'en' ? service.shortDescription.en : service.shortDescription.ne}
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          {(service.successRate || service.duration) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {service.successRate && (
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en' ? 'Success Rate' : 'सफलता दर'}
                      </p>
                      <p className="font-semibold text-foreground">
                        {language === 'en' ? service.successRate.en : service.successRate.ne}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
              {service.duration && (
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en' ? 'Duration' : 'अवधि'}
                      </p>
                      <p className="font-semibold text-foreground">
                        {language === 'en' ? service.duration.en : service.duration.ne}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Full Description */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'en' ? 'About This Service' : 'यो सेवाको बारेमा'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'en' ? service.fullDescription.en : service.fullDescription.ne}
                </p>
              </CardContent>
            </Card>

            {/* Procedure */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'en' ? 'Treatment Procedure' : 'उपचार प्रक्रिया'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {(language === 'en' ? service.procedure.en : service.procedure.ne).map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'en' ? 'Key Benefits' : 'मुख्य फाइदाहरू'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {(language === 'en' ? service.benefits.en : service.benefits.ne).map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Who Is It For */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle>
                  {language === 'en' ? 'Who Is This For?' : 'यो कसको लागि हो?'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {(language === 'en' ? service.whoIsItFor.en : service.whoIsItFor.ne).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-xl font-bold">
                  {language === 'en' ? 'Ready to Get Started?' : 'सुरु गर्न तयार हुनुहुन्छ?'}
                </h3>
                <p className="text-sm opacity-90">
                  {language === 'en'
                    ? 'Contact us today to schedule a consultation and learn more about this service.'
                    : 'परामर्श तालिका बनाउन र यो सेवाको बारेमा थप जान्न आज हामीलाई सम्पर्क गर्नुहोस्।'}
                </p>
                <Link to="/contact">
                  <Button variant="secondary" className="w-full">
                    {language === 'en' ? 'Contact Us' : 'सम्पर्क गर्नुहोस्'}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Related Services */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'en' ? 'Related Services' : 'सम्बन्धित सेवाहरू'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {servicesData
                    .filter(s => s.category === service.category && s.id !== service.id)
                    .slice(0, 3)
                    .map((relatedService) => (
                      <Link key={relatedService.id} to={`/services/${relatedService.id}`}>
                        <div className="p-3 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer">
                          <p className="text-sm font-medium text-foreground">
                            {language === 'en' ? relatedService.title.en : relatedService.title.ne}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
