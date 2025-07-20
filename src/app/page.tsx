import Header from "@/components/header/Header";
import AboutUsSection from "@/components/aboutUs/AboutUsSection";
import ServicesSection from "@/components/services/ServicesSection";
import RealisationSection from "@/components/realisation/RealisationSection";
import ContactUsSection from "@/components/contactUs/ContactUsSection";
import FooterSection from "@/components/footer/FooterSection";

export default function HomePage() {
  return (
    <main>
      <Header />
      <AboutUsSection />
      <ServicesSection />
      <RealisationSection />
      <ContactUsSection />
      <FooterSection />
    </main>
  );
}
