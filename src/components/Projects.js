import React from "react";
import ProjectCard from "./ProjectCard";
import projectlist from "../projectlist.json";

const Projects = () => {
  return (
    <div>
      <p>Click on a Project to learn more</p>
      <ProjectCard
        project_name={projectlist[0].project_name}
        image={projectlist[0].image}
        languages={projectlist[0].languages}
        url={projectlist[0].url}
      />
      <ProjectCard
        project_name={projectlist[1].project_name}
        image={projectlist[1].image}
        languages={projectlist[1].languages}
        url={projectlist[1].url}
      />
      <ProjectCard
        project_name={projectlist[2].project_name}
        image={projectlist[2].image}
        languages={projectlist[2].languages}
        url={projectlist[2].url}
      />
    </div>
  );
};

// why matters - function {} vs const ()

export default Projects;
