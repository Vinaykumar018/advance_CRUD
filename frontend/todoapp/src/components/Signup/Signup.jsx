import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Features/Counter/AuthSlice"; // Adjust the path as necessary
import "./signup.css";


import {useNavigate} from "react-router-dom"
const Signup = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSignup = () => {
    dispatch(registerUser({ email, password, username }));
    navigate("/signin")
  };

  return (
    <>
      <div className="container" style={{ height: "80vh" }}>
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <div
            className="col-9 d-flex flex-column justify-content-center align-items-center"
            style={{ height: "80vh", borderRight: "2px red solid" }}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                style={{ padding: "0px 15vw 0px 15vw" }}
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                style={{ padding: "0px 15vw 0px 15vw" }}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                style={{ padding: "0px 15vw 0px 15vw" }}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="btn btn-danger text-white form-control"
              style={{ padding: "0px 10vw 0px 10vw" }}
              onClick={handleSignup}
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>

            {error && <p className="text-danger mt-3">{error}</p>}
          </div>

          <div className="col-3 text-center">
            <h1 id="right">
              sign <br />
              up
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
