import React from "react";

const Contact = () => {
  return (
    <div className="container rounded float-left border border-secondary mt-3">
      <div className="form-group contact">
        <label htmlFor="examphtmlFeFormControlInput1">
          Contact Information
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Name"
        />
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Email"
        />
      </div>
      <div className="form-group social">
        <label htmlFor="examphtmlFeFormControlInput1">Comment</label>
        <div className="row">
          <div className="col">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
