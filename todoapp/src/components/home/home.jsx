import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div>
      <div className="home d-flex justify-content-center align-items-center" style={{ height:"90vh"}}>
        <div className="container d-flex justify-content-center align-items-center flex-column text-center">
          <h1 className="display-4">
            Organize Your <br /> work and life, finally
          </h1>
          <p className="lead">
            Become focused organized and calm with
            <br /> todo app The world #1 task manager app
          </p>
          <a className="btn-nav" href="#">
            Make Todo List
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
