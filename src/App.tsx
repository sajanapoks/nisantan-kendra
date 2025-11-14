import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import IVFUnit from "./pages/IVFUnit";
import IVFDetail from "./pages/IVFDetail";
import Doctors from "./pages/Doctors";
import DoctorProfile from "./pages/DoctorProfile";
import Facilities from "./pages/Facilities";
import PatientCare from "./pages/PatientCare";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import DiagnosisSteps from "./pages/DiagnosisSteps";
import TreatmentOptions from "./pages/TreatmentOptions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/ivf-unit" element={<IVFUnit />} />
                <Route path="/ivf-unit/:id" element={<IVFDetail />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/doctors/:id" element={<DoctorProfile />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/patient-care" element={<PatientCare />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/diagnosis-steps" element={<DiagnosisSteps />} />
                <Route path="/treatment-options" element={<TreatmentOptions />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
