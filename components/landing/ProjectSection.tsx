import { projects } from "@/config"
import clsx from "clsx"
import ProjectGrid from "@/components/utils/ProjectGrid"
import ProjectCards from "@/components/ui/ProjectCards"



const ProjectSection = () => {
    return (
        <div>
            <ProjectGrid>
                { projects.map((project) =>
                    <div className={clsx(project.className)} key={project.title}>
                        <ProjectCards title={project.title} label={project.label} image={project.image} />
                    </div>
                )}
            </ProjectGrid>
        </div>
    )
}

export default ProjectSection;