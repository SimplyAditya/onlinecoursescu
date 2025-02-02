import AboutUsSection from "@/components/AboutUsSection";
import ContactForm from "@/components/ContactForm";
import ContactUs from "@/components/ContactUs";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <AboutUsSection/>
    <Courses/>
    <ContactUs/>
    <ContactForm/>
    <Footer/>
    </>
  );
}
