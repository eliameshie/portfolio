import SectionLayout from "@/components/utils/SectionLayout";
import { contact } from "@/config";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";



const ContactSection = () => {
    return (
        <div id="contact"  className="mt-40">
            <div>
                <SectionLayout
                    title={contact.title}
                    section={contact.section}
                    center={contact.center}
                    number={contact.number}
                    description={contact.description}
                    hr={contact.hr}
                    cta={contact.cta}
                    ctaText={contact.ctaText}
                />

                <div className="relative w-full text-center">
                    <div className="inline justify-center">
                        <div className="inline-block mx-auto text-center max-w-full">
                            <h4 className="w-full mx-auto text-center">Feel free to contact me on one of the following platforms or click the button to email me!</h4>
                            <div className="flex flex-row mt-6 justify-center">
                                <Link href="https://www.linkedin.com/in/eliameshie/"  >
                                    <p className="pr-4">
                                        <LinkedInLogoIcon className="w-5 h-5 hover:text-[#04151F] transition-all cursor-pointer" />
                                    </p>
                                       
                                </Link>
                                <Link href="https://twitter.com/eameshie">
                                    <p className="pr-4">
                                        <TwitterLogoIcon className="w-5 h-5 hover:text-[#04151F] transition-all cursor-pointer" />

                                    </p>
                                </Link>
                                <Link href="https://github.com/eliameshie">
                                    <p className="pr-4">
                                        <GitHubLogoIcon className="w-5 h-5 hover:text-[#04151F] transition-all cursor-pointer" />
                                    </p>
                                </Link>
                                <Link href="mailto:eameshie@gmail.com">
                                    <p className="pr-4  transition-all cursor-pointer">
                                        <EnvelopeClosedIcon className="w-5 h-5 hover:text-[#04151F] transition-all cursor-pointer" />
                                    </p>
                                </Link>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactSection;