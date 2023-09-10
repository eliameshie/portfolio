import Link from "next/link";


interface Props {
    title: string,
    label: string,
    description: string,
    href: string,
    // className: string,

}


const ProjectPills = ( props: Props ) => {
    return (
        <div>
            <Link href={props.href}>
                <div className="flex bg-black rounded-lg w-full h-full hover:bg-[#04151F] transition-all cursor-pointer">
                    

                    <div className="flex relative w-full h-full">

                            <div className="flex flex-col h-full space-between overflow-hidden p-4">

                                {/* Card Title */}
                                <div className="flex max-w-full relative z-10 space-between items-start">
                                    <h3 className="text-white">{props.title}</h3>
                                </div>

                                {/* Card Description */}
                                <div className="flex max-w-full relative">
                                    <p className="text-white mt-3 mb-9">{props.description}</p>
                                </div>

                            </div>

                            {/* Card Role Container */}
                            <a className="flex max-w-full items-center">
                                {/* Card Role */}
                                <div className="flex rounded-lg absolute items-center right-4 bottom-3">
                                    <p className="text-white">{props.label}</p>
                                </div>
                            </a>
                            
                        
                        
                    </div>
                </div>
            </Link>
        </div>


    )
}

export default ProjectPills;