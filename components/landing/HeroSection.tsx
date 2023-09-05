import Pills from "@/components/ui/Pills";
import { me } from "@/config";




const HeroSection = () => {
    return (
        <div className="container my-30 text-center items-center max-w-full h-[100vh]">
            <h1 className="text-6xl lg:text-[12rem]/[9rem] w-full text-center font-semibold mb-8">Eli <br /> <span className="italic">A</span>meshie</h1>
            <p>{me.blurb}</p>
            <div className="mt-8">
                <button className="bg-[#04151F] text-white mx-4 px-8 py-3 my-2 rounded-md">Learn More</button>
                <button className="mx-4 border border-gray-400 px-8 py-3 my-2 rounded-md hover:border-[#04151F] transition-all">My Resume</button>
            </div>
            
        </div>
    )
}

export default HeroSection;