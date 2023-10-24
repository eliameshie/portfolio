import SectionLayout from "@/components/utils/SectionLayout";
import { about } from "@/config";




const AboutSection = () => {
    return (
        <div id="about" className="my-40">
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
                <div className="flex flex-col md:flex-row justify-start md:ms-auto w-full md:w-6/12">
                    <div className="max-w-full">
                        <p className="md:mr-8">» HTML</p>
                        <p className="md:mr-8">» CSS</p>
                        <p className="md:mr-8">» Javascript</p>
                        <p className="md:mr-8">» Typescript</p>
                        <p className="md:mr-8">» Java</p>
                        <p className="md:mr-8">» MongoDB</p>


                    </div>
                    <div className="md:mx-8 ">
                        <p className="md:mr-8">» ReactJS</p>
                        <p className="md:mr-8">» NextJS</p>
                        <p className="md:mr-8">» ExpressJS</p>
                        <p className="md:mr-8">» NodeJS</p>

                    </div>
                    <div className="md:mx-8 ">
                        <p className="md:mr-8">» MongoDB</p>
                        <p className="md:mr-8">» Prisma</p>
                        <p className="md:mr-8">» MySQL</p>
                        <p className="md:mr-8">» PostgreSQL</p>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default AboutSection;