import React from "react";
import ProjectCard from "./ProjectCard";
import projectlist from "../projectlist.json";
import picture1 from "../images/ClarkPhoto.jpg"; // How get image to load
import picture2 from "../images/Burger.jpg"; // How get image to load

const photos = [{ picture1 }, { picture2 }];

const Projects = () => {
  return (
    <div>
      <p>Click on a Project to learn more</p>
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
        project_name={projectlist[2].project_name}
        image={require("../images/Restaurant.jpg")}
        languages={projectlist[2].languages}
        url={projectlist[2].url}
      />
    </div>
  );
};

// why matters - function {} vs const ()

export default Projects;
