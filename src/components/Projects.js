import React from "react";
import ProjectCard from "./ProjectCard";
import projectlist from "../projectlist.json";

const Projects = () => {
  return (
    <div className="container text-center">
      <p>Click on a project to learn more</p>
      <div className="row card-deck">
        <ProjectCard
          project_name={projectlist[0].project_name}
          image={require("../images/github.png")}
          languages={projectlist[0].languages}
          url={projectlist[0].url}
        />
        <ProjectCard
          project_name={projectlist[1].project_name}
          image={require("../images/Burger.jpg")}
          languages={projectlist[1].languages}
          url={projectlist[1].url}
        />
        <ProjectCard
          project_name={projectlist[2].project_name}
          image={require("../images/Employee.png")}
          languages={projectlist[2].languages}
          url={projectlist[2].url}
        />
        <ProjectCard
          project_name={projectlist[3].project_name}
          image={require("../images/Restaurant.jpg")}
          languages={projectlist[3].languages}
          url={projectlist[3].url}
        />
      </div>
    </div>
  );
};

export default Projects;
