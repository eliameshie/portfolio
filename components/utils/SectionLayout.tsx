

interface Props {
    title: string,
    section?: string,
    center: boolean,
    number: string,
    description: string,
    hr: boolean,
    cta: boolean,
    ctaText: string
}


const SectionLayout = (props: Props) => {
    return (
        <div>
            
            <div>
                <h1 className={props.center ? "text-5xl mx-auto text-center break-words font-semibold lg:w-9/12 md:w-5/12 w-full mb-10" : "text-6xl font-semibold lg:w-9/12 md:w-6/12 sm:w-full mb-10"}>{props.title}</h1>
            </div>

            { props.hr ? 
                <div>
                    <hr />
                </div>
            : <div></div> }

            <div className="flex flex-col md:flex-row space-between items-baseline mt-8">
                <div className="flex-1">
                    <h6 className="text-xl mb-4 font-semibold uppercase">{props.section ? `${props.number} | ${props.section}` : ""}</h6>
                </div>
                <div className="flex-1">
                    <p className="font-light mb-8">{props.description}</p>
                    { props.cta ? 
                    <button className="font-medium">{props.ctaText}</button> 
                    : <div></div>
                    }
                    
                </div>
                
            </div>
            
        
        
        </div>
    )
}

export default SectionLayout;