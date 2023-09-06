/***
    
    Version: 0.0.1
    Component: Project Cards
    Description:

***/


interface Props {
    title: string,
    label: string,
    image: string,
    // className: string,

}


const ProjectCards = ( props: Props ) => {
    return (
        <div className="flex bg-black rounded-lg w-full h-full hover:bg-[#04151F] transition-all cursor-pointer">
            <div className="relative flex w-full h-full">

                    <div className="flex h-[20vw] space-between overflow-hidden">
                        {/* Card Image */}
                        <div className="absolute overflow-hidden w-full h-full rounded-lg">
                            {/* Card Title */}
                            <img className="w-full h-full max-w-none object-cover" src={props.image}/>
                        </div>
                        <div className="flex relative z-10 mb-3 ml-3 space-between items-start">
                            {/* Card Title */}
                            <h3 className="text-white">{props.title}</h3>
                        </div>
                    </div>
                    <a className="flex max-w-full right-3 bottom-3 items-center">
                        <div className="flex rounded-lg absolute items-center right-3 bottom-3">
                            {/* Card Thumbnail */}
                            <div className="text-white">{props.label}</div>
                        </div>
                    </a>
                    
                   
                
            </div>
        </div>
    )
}

export default ProjectCards;