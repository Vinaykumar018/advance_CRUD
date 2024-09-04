import React from "react";
import { counterActions } from "../../Features/Counter/Counter";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(counterActions.logout())
      sessionStorage.clear();
      navigate("/signin");
    ;
  }

  function handleClose() {
    navigate("/todo");
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="mb-4 text-danger display-4">
        Are you sure you want to logout?
      </h1>

      <p className="mb-4">
        Click the button below to confirm your logout or close this page.
      </p>

      <div>
        <button
          type="button"
          className="btn btn-outline-danger me-3"
          onClick={handleLogout}
        >
          Logout
        </button>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Logout;
