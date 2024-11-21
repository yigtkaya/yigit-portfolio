import React from "react";
import { devProjects, ProjectDetailProps } from "./project-detail";
import WorkCard from "./work-card";
import { WorkDetailProps, workDetails } from "./work-detail";

const WorkGrid = () => {
  return (
    <>
      <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
        {workDetails.map((project: WorkDetailProps) => (
          <WorkCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
};

export default WorkGrid;
