import SectionLayout from "@/components/utils/SectionLayout";
import { about } from "@/config";




const AboutSection = () => {
    return (
        <div id="about" className="my-40 h-[80vh]">
            <SectionLayout
                title={about.title}
                section={about.section}
                center={about.center}
                number={about.number}
                description={about.description}
                hr={about.hr}
                cta={about.cta}
                ctaText={about.ctaText}
            />
            <div className="flex">
                <div className="flex justify-start ms-auto w-6/12">
                    <div>
                        <p className="mr-8">» HTML</p>
                        <p className="mr-8">» CSS</p>
                        <p className="mr-8">» Javascript</p>
                        <p className="mr-8">» Typescript</p>
                        <p className="mr-8">» Java</p>
                        <p className="mr-8">» MongoDB</p>


                    </div>
                    <div className="mx-8">
                        <p className="mr-8">» ReactJS</p>
                        <p className="mr-8">» NextJS</p>
                        <p className="mr-8">» ExpressJS</p>
                        <p className="mr-8">» NodeJS</p>

                    </div>
                    <div className="mx-8">
                        <p className="mr-8">» MongoDB</p>
                        <p className="mr-8">» Prisma</p>
                        <p className="mr-8">» MySQL</p>
                        <p className="mr-8">» PostgreSQL</p>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default AboutSection;