import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// function ProjectCard(props) {
function ProjectCard(props) {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <div className="img-container">
        <img alt={props.project_name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project Title:</strong> {props.project_name}
          </li>
          <li>
            <strong>Skills:</strong> {props.languages}
          </li>
          <li>
            <strong>View:</strong> <a>{props.url}</a>
            {/* //figure out how to pass a url  */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
