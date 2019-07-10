import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcBUgzoRRIUFTR60hvhh2vU6j3f7BhkQvZyXPjeWAE2Ty9iLk"
              alt="/"
            />
          </div>
          <div className="col-md-8">
            <form action="/">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                className="form-control"
                placeholder="Your name.."
              />
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                className="form-control"
                placeholder="Your last name.."
              />
              <label htmlFor="country">Country</label>
              <select className="form-control" id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <label htmlFor="subject">Subject</label>
              <textarea
                className="form-control"
                id="subject"
                name="subject"
                placeholder="Write something.."
              />
              <input
                type="submit"
                className="btn btn-info"
                defaultValue="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
