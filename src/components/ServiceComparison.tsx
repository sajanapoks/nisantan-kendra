import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Service } from '@/data/servicesData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { X, TrendingUp, DollarSign, Clock } from 'lucide-react';

interface ServiceComparisonProps {
  services: Service[];
}

export const ServiceComparison = ({ services }: ServiceComparisonProps) => {
  const { language } = useLanguage();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : prev.length < 3 ? [...prev, serviceId] : prev
    );
  };

  const comparedServices = services.filter(s => selectedServices.includes(s.id));

  return (
    <div className="space-y-6">
      {/* Selection Section */}
      {!showComparison && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>
                {language === 'en' ? 'Compare Treatments' : 'उपचार तुलना गर्नुहोस्'}
              </span>
              <Badge variant="secondary">
                {selectedServices.length}/3 {language === 'en' ? 'selected' : 'चयन गरिएको'}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {services.filter(s => s.successRate || s.cost).map(service => (
                <div 
                  key={service.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedServices.includes(service.id) 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex items-start gap-3">
                    <Checkbox 
                      checked={selectedServices.includes(service.id)}
                      onCheckedChange={() => toggleService(service.id)}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">
                        {language === 'en' ? service.title.en : service.title.ne}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {service.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {selectedServices.length >= 2 && (
              <Button 
                onClick={() => setShowComparison(true)}
                className="w-full"
              >
                {language === 'en' 
                  ? `Compare ${selectedServices.length} Treatments` 
                  : `${selectedServices.length} उपचार तुलना गर्नुहोस्`}
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Comparison Table */}
      {showComparison && comparedServices.length >= 2 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>
                {language === 'en' ? 'Treatment Comparison' : 'उपचार तुलना'}
              </CardTitle>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowComparison(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">
                      {language === 'en' ? 'Feature' : 'विशेषता'}
                    </th>
                    {comparedServices.map(service => (
                      <th key={service.id} className="text-left p-4 font-semibold">
                        <div className="space-y-1">
                          <div>{language === 'en' ? service.title.en : service.title.ne}</div>
                          <Badge variant="secondary" className="text-xs">
                            {service.category}
                          </Badge>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Success Rate Row */}
                  <tr className="border-b">
                    <td className="p-4">
                      <div className="flex items-center gap-2 font-medium">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        {language === 'en' ? 'Success Rate' : 'सफलता दर'}
                      </div>
                    </td>
                    {comparedServices.map(service => (
                      <td key={service.id} className="p-4">
                        <span className="text-primary font-semibold">
                          {service.successRate || 'N/A'}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Cost Row */}
                  <tr className="border-b">
                    <td className="p-4">
                      <div className="flex items-center gap-2 font-medium">
                        <DollarSign className="w-4 h-4 text-primary" />
                        {language === 'en' ? 'Estimated Cost' : 'अनुमानित लागत'}
                      </div>
                    </td>
                    {comparedServices.map(service => (
                      <td key={service.id} className="p-4">
                        {service.cost 
                          ? (language === 'en' ? service.cost.en : service.cost.ne)
                          : 'N/A'}
                      </td>
                    ))}
                  </tr>

                  {/* Duration Row */}
                  <tr className="border-b">
                    <td className="p-4">
                      <div className="flex items-center gap-2 font-medium">
                        <Clock className="w-4 h-4 text-primary" />
                        {language === 'en' ? 'Duration' : 'अवधि'}
                      </div>
                    </td>
                    {comparedServices.map(service => (
                      <td key={service.id} className="p-4">
                        {service.duration 
                          ? (language === 'en' ? service.duration.en : service.duration.ne)
                          : 'N/A'}
                      </td>
                    ))}
                  </tr>

                  {/* Description Row */}
                  <tr>
                    <td className="p-4 font-medium">
                      {language === 'en' ? 'Description' : 'विवरण'}
                    </td>
                    {comparedServices.map(service => (
                      <td key={service.id} className="p-4 text-sm text-muted-foreground">
                        {language === 'en' ? service.description.en : service.description.ne}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
