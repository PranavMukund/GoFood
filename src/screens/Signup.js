import React, { useState } from "react";
import { Link } from "react-router-dom";

import profile from './profile.svg';
import email from './email.svg';
import pwd from './pwd.svg';
import location from './location.svg';


export default function Signup() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
  };

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center  font-monospace " style={{ background: '#3572EF' }} >
        <form onSubmit={handleSubmit} style={{ background: '#83B4FF', margin: '100px', padding: '3rem', border: '2px solid #ccc', borderRadius: '5px' }}>
          <div className="mb-3">
            <label htmlFor="name" className="fs-3 fw-bold form-label text-white">
              <img src={profile} alt="profile Icon" style={{ margin: '0px 20px 0px 0px' }} />
              Name
            </label>
            <input
              s="true"
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="fs-3 fw-bold form-label text-white">
              <img src={email} alt="email Icon" style={{ margin: '0px 20px 0px 0px' }} />
              Email address
            </label>
            <input
              s="true"
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text fst-italic fw-normal">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="fs-3 fw-bold  form-label text-white">
              <img src={pwd} alt="pwd Icon" style={{ margin: '0px 20px 0px 0px' }} />
              Password
            </label>
            <input
              s="true"
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="fs-3 fw-bold  form-label text-white">
              <img src={location} alt="location Icon" style={{ margin: '0px 20px 0px 0px' }} />
              Address
            </label>
            <input
              s="true"
              type="text"
              className="form-control"
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-success">
            Already a user ?
          </Link>
        </form>
      </div>
    </>
  );
}
