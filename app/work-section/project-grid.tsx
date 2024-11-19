import React from "react";
import { devProjects, ProjectDetailProps } from "./project-detail";
import ProjectCard from "./project-card";

const ProjectGrid = () => {
  return (
    <>
      <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
        {devProjects.map((project: ProjectDetailProps) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
};

export default ProjectGrid;
