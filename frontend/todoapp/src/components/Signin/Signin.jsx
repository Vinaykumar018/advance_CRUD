import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Features/Counter/AuthSlice"; // Adjust the path as necessary
import "./signin.css";
import {useNavigate} from "react-router-dom"
const Signin = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSignin = () => {
    dispatch(loginUser({ email, password })).then((response) => {
      if (!response.error) {
        console.log(response)

        // Store the email in sessionStorage after a successful login
        sessionStorage.setItem("email", email);
        navigate("/todo")
     
      }
    });
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
              onClick={handleSignin}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            {error && <p className="text-danger mt-3">{error}</p>}
          </div>

          <div className="col-3 text-center">
            <h1 id="right">
              sign <br />
              in
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
