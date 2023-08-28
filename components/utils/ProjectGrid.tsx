


const ProjectGrid = ( { children } : { children: React.ReactNode } ) => {
    return (
        <div className="grid grid-cols-12 grid-rows-12 auto-cols-auto gap-x-8 gap-y-4 mb-16">
            { children }
        </div>
    )
}


export default ProjectGrid;