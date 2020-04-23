import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// function ProjectCard(props) {
function ProjectCard(props) {
  return (
    <div className="card border-secondary">
      <div className="text-center">
        <h3>{props.project_name}</h3>
      </div>
      <div className="card border-white img-container">
        <img
          alt={props.project_name}
          src={props.image}
          className="card-img-top border border-secondary"
        />
        <div className="card-body p-0">
          <ul className="text-left list-group">
            <li className="list-group-item p-0 border-white">
              <strong>Project Title:</strong> {props.project_name}
            </li>
            <li className="list-group-item p-0 border-white">
              <strong>Skills:</strong> {props.languages}
            </li>
            <li className="list-group-item p-0 border-white">
              <strong>View: </strong>
              <a href={props.url} target="_blank" className="card-link">
                Deployed Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
