import React, { useState } from "react";
import git from "../images/github.png"; // How get image to load
import linked from "../images/linkedIn.png"; // How get image to load

const Contact = () => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [comments, setComments] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for reaching out, ${contactName}`);
    //goal is to generate an email to myself with this information
    console.log(contactEmail);
    console.log(comments);
  };

  return (
    <div className="container rounded float-left border border-secondary mt-3">
      <div className="form-group contact">
        <label htmlFor="examphtmlFeFormControlInput1">
          Contact Information
        </label>

        <input
          onChange={(e) => setContactName(e.target.value)}
          value={contactName}
          name="search"
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
        />
        <input
          onChange={(e) => setContactEmail(e.target.value)}
          value={contactEmail}
          name="search"
          type="text"
          className="form-control mt-2"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className="form-group social">
        <label htmlFor="examphtmlFeFormControlInput1">Comment</label>
        <div className="row">
          <div className="col">
            <textarea
              onChange={(e) => setComments(e.target.value)}
              value={comments}
              name="comments"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
        <button className="btn btn-secondary mt-2" onClick={handleFormSubmit}>
          Submit
        </button>
      </div>
      <div className="social m-3">
        <div className="row justify-content-center">
          <h5>Social Media: </h5>
        </div>

        <div className="row justify-content-around">
          <div className="col-4">
            <a href="https://github.com/bclark07" title="Github">
              <div class="sharethis-inline-follow-buttons"></div>
              <img src={git} /> GitHub
            </a>
          </div>
          <div className="col-4">
            <a
              href="https://www.linkedin.com/in/brittany-j-clark-bbbb7693/"
              title="LinkedIn"
            >
              <img src={linked} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
