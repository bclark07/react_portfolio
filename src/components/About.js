import React from "react";
import photo from "../images/ClarkPhoto.jpg"; // How get image to load

const About = () => (
  <div>
    <div class="container">
      <div class="headerSection text-center">
        <h1>Brittany J. Clark</h1>
      </div>
      <img alt="headshot" src={photo} />
      <p>
        My name is Brittany Clark and I live in Raleigh, NC. I currently work as
        a Client Success Manager for a software company based out of Cary, NC. I
        have a dual Masters degrees from the University of North Carolina at
        Chapel Hill in Social Work and Public Administration, and I decided to
        return to UNC Chapel Hill to complete the Full-stack Coding Bootcamp
        certificate program and graduated in April 2020. The program covered
        languages that include HTML5, CSS3, JavaScript, jQuery, Bootstrap,
        Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command
        Line, Git, and more. I enjoy working in the full stack aspects and
        ultimately strive to create quality user interface that help people
        track and organize their data. THe projects in my portfolio are an
        example of this.
      </p>
    </div>
  </div>
);

export default About;
