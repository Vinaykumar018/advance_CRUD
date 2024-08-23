import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaSquareInstagram, FaTwitter } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";



const Footer = () => {
    return (
        <div>
           <div className="container-fluid my-5 sticky-bottom">
  <footer className="bg-light text-center text-white">
    <div className="container p-4 pb-0">
      <section className="mb-4">
        <a
          className="btn btn-primary btn-floating m-1"
          style={{ backgroundColor: "#3b5998" }}
          href="#!"
          role="button"
        >
          <FaFacebookF></FaFacebookF>
        </a>
        <a
          className="btn btn-primary btn-floating m-1"
          style={{ backgroundColor: "#55acee" }}
          href="#!"
          role="button"
        >
        <FaTwitter></FaTwitter>
        </a>
        <a
          className="btn btn-primary btn-floating m-1"
          style={{ backgroundColor: "#dd4b39" }}
          href="#!"
          role="button"
        >
        <FaGooglePlusG></FaGooglePlusG>
        </a>
        <a
          className="btn btn-primary btn-floating m-1"
          style={{ backgroundColor: "#ac2bac" }}
          href="#!"
          role="button"
        >
          <FaSquareInstagram></FaSquareInstagram>
        </a>
        <a
          className="btn btn-primary btn-floating m-1"
          style={{ backgroundColor: "#0082ca" }}
          href="#!"
          role="button"
        >
        <FaLinkedin></FaLinkedin>
        </a>
        <a
          className="btn btn-primary btn-floating m-1"
          style={{ backgroundColor: "#333333" }}
          href="#!"
          role="button"
        >
         <FaGithub></FaGithub>
        </a>
      </section>
    </div>
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      &copy; 2020 Copyright:{" "}
      <a className="text-white" href="(link unavailable)">
        (vinayTODO)
      </a>
    </div>
  </footer>
</div>


            
        </div>
    );
}

export default Footer;
