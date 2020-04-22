import React from "react";

const Contact = () => {
  return (
    <div className="container">
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
            <input
              type="text"
              className="form-control"
              placeholder="Comment Here"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
