import Image from "next/image";
import Link from "next/link";



const Navbar = () => {
    return (
        <div className="flex max-w-full  py-6 ">

            <div className="flex flex-row space-around items-center w-full space-x-4">
                <div className="flex-1 items-center text-center">                    
                    <Link href="#">
                        <span className="mx-3 font-light hover:border hover:py-2 hover:border-b-black transition-all">About</span>
                    </Link>
                    <Link href="#">
                        <span className="mx-3 font-light hover:border hover:py-2 hover:border-b-black transition-all">Portfolio</span>
                    </Link>
                </div>
                <div className="flex-1 items-center text-center">
                    <Image className="align-middle items-center text-center mx-auto" src="/assets/logo.png" alt="Eli Ameshie Portfolio Logo"  width={96} height={96} />
                </div>
                <div className="flex flex-1 items-center justify-center text-center flex-row">  
                    <Link href="#">
                        <p className="mx-3 font-light hover:border hover:py-2 hover:border-b-black transition-all">Resume</p>
                    </Link>
                    <Link href="#">
                        <p className="mx-3 font-light hover:border hover:py-2 hover:border-b-black transition-all">Contact</p>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;