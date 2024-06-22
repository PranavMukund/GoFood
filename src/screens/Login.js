import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

import email from './email.svg';
import pwd from './pwd.svg';

export default function Login() {

  const [credentials, setcredentials] = useState({

    email: "",
    password: "",

  });

  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        email: credentials.email,
        password: credentials.password,

      }),
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }


    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"))
      navigate("/");

    }
  };

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center  font-monospace" style={{ background: '#3572EF' }}>
        <form onSubmit={handleSubmit} style={{ background: '#83B4FF', margin: '100px', padding: '3rem', border: '2px solid #ccc', borderRadius: '5px' }} >

          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="fs-3 fw-bold form-label text-white">
              <img src={email} alt="email Icon" style={{ margin: '0px 20px 0px 0px' }} />
              Email address
            </label>
            <input
              s="true"
              type="email"
              className="form-control bg-light"
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
            <label htmlFor="exampleInputPassword1" className=" fs-3 fw-bold  form-label text-white">
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



          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/createuser" className="m-3 btn btn-success" >
            I'm a new user
          </Link>
        </form>
      </div>

    </>
  )
}
