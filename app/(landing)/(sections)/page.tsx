import ProjectCards from "@/components/ui/ProjectCards";
import ProjectGrid from "@/components/utils/ProjectGrid";

import { projects } from "@/config.js"

export default function Home() {



    return (
        <main className="flex min-h-screen flex-col p-24">
            <h1>Hi. I am eli.</h1>
            
                <ProjectGrid>
                    { projects.map((project) =>
                        <div className={project.className} key={project.title}>
                            <ProjectCards title={project.title} label={project.label} image={project.image} />
                        </div>
                    )}
                </ProjectGrid>
        </main>
    )
}
