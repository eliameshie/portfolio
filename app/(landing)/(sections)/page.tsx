
import HeroSection from "@/components/landing/HeroSection";


import Navbar from "@/components/ui/Navbar";
import ProjectSection from "@/components/landing/ProjectSection";
import AboutSection from "@/components/landing/AboutSection";
import ContactSection from "@/components/landing/ContactSection";


export default function Home() {



    return (
        <div>
            <div>
                <Navbar />
            </div>
            <main className="container max-w-full flex min-h-screen flex-col p-24">

                <HeroSection />
                <AboutSection />
                <ProjectSection />
                <ContactSection />
                
            </main>
        </div>
    )
}
