


const ProjectGrid = ( { children } : { children: React.ReactNode } ) => {
    return (
        <div className="grid md:grid-cols-3 md:grid-rows-12 auto-cols-auto gap-x-8 gap-y-4 mb-16">
            { children }
        </div>
    )
}


export default ProjectGrid;