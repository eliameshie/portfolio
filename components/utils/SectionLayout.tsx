

interface Props {
    title: string,
    section: string,
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
                <h1 className="text-8xl font-semibold lg:w-9/12 md:w-6/12 sm:w-full mb-10">{props.title}</h1>
            </div>

            { props.hr ? 
                <div>
                    <hr />
                </div>
            : <div></div> }

            <div className="flex flex-row space-between items-baseline mt-8">
                <div className="flex-1">
                    <h6 className="mb-4 font-medium uppercase">{props.number} \\\ {props.section}</h6>
                </div>
                <div className="flex-1">
                    <p className="font-medium mb-8">{props.description}</p>
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