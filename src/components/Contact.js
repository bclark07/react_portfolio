import React, { useState } from "react";

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
      <div className="col-sm-6 text-white">
        Social Media:
        <div clasName="social"></div>
      </div>
    </div>
  );
  console.log(contactName);
};

export default Contact;
