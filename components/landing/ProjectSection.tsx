import clsx from "clsx"

import { projects } from "@/config"
import ProjectGrid from "@/components/utils/ProjectGrid"
import ProjectPills from "@/components/ui/ProjectPills"



const ProjectSection = () => {
    return (
        <div id="portfolio" className="my-40">
            <div>

                <ProjectGrid>
                    { projects.map((project) =>
                        <div className={clsx(project.className)} key={project.title}>
                            <ProjectPills title={project.title} description={project.description} label={project.label} href={project.href} />
                        </div>
                    )}
                </ProjectGrid>
                
            
            </div>
        </div>
    )
}

export default ProjectSection;