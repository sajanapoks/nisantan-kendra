import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === 'en' ? 'Message Sent!' : 'सन्देश पठाइयो!',
      description: language === 'en'
        ? 'Thank you for contacting us. We will get back to you soon.'
        : 'हामीलाई सम्पर्क गर्नुभएकोमा धन्यवाद। हामी चाँडै तपाईंलाई सम्पर्क गर्नेछौं।',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('location'),
      content: 'Bijulibazar, New Baneshwor, Kathmandu, Nepal',
    },
    {
      icon: Phone,
      title: t('phone'),
      content: '01-4795087\n9851074477\n9868730519',
    },
    {
      icon: Mail,
      title: t('email'),
      content: 'infertilitynepal@gmail.com',
    },
    {
      icon: Clock,
      title: language === 'en' ? 'Hours' : 'समय',
      content: language === 'en' 
        ? 'Sun-Fri: 9:00 AM - 5:00 PM\nSaturday: Closed'
        : 'आइत-शुक्र: बिहान ९ - साँझ ५\nशनिबार: बन्द',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t('contact')}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'en'
              ? 'Get in touch with us for appointments, inquiries, or any questions about our services'
              : 'अपोइन्टमेन्ट, सोधपुछ, वा हाम्रा सेवाहरूको बारेमा कुनै पनि प्रश्नको लागि हामीलाई सम्पर्क गर्नुहोस्'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg mb-1 text-foreground">{info.title}</h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line break-words">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-scale-in">
            <Card className="shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">{t('sendMessage')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        {language === 'en' ? 'Full Name' : 'पूरा नाम'} *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={language === 'en' ? 'John Doe' : 'तपाईंको नाम'}
                        className="transition-all focus:scale-[1.02]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        {language === 'en' ? 'Phone Number' : 'फोन नम्बर'} *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={language === 'en' ? '+977 9800000000' : '+९७७ ९८००००००००'}
                        className="transition-all focus:scale-[1.02]"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {language === 'en' ? 'Email Address' : 'इमेल ठेगाना'} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={language === 'en' ? 'john@example.com' : 'तपाईंको@इमेल.com'}
                      className="transition-all focus:scale-[1.02]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {language === 'en' ? 'Message' : 'सन्देश'} *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={language === 'en' 
                        ? 'Tell us about your inquiry...'
                        : 'हामीलाई तपाईंको सोधपुछको बारेमा बताउनुहोस्...'}
                      rows={6}
                      className="transition-all focus:scale-[1.01]"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full transition-transform hover:scale-105 duration-300">
                    {t('sendMessage')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <section>
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8139876829944!2d85.34095731506193!3d27.692875682796895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f3e1e1c1d9%3A0x9e1e1e1e1e1e1e1e!2sBaneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nisantan Kendra Location"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Contact */}
        <section className="mt-8">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                {language === 'en' ? 'Need Urgent Assistance?' : 'तत्काल सहायता चाहिन्छ?'}
              </h2>
              <p className="text-muted-foreground mb-6">
                {language === 'en'
                  ? 'For urgent matters or immediate appointments, please call us directly'
                  : 'तत्काल मामिला वा तत्काल अपोइन्टमेन्टको लागि, कृपया हामीलाई सिधै कल गर्नुहोस्'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" variant="default">
                  <a href="tel:014795087" className="inline-flex items-center">
                    <Phone className="mr-2 w-5 h-5" />
                    01-4795087
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:9851074477" className="inline-flex items-center">
                    <Phone className="mr-2 w-5 h-5" />
                    9851074477
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;
