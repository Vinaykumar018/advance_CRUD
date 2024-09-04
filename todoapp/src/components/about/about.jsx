import React from "react";
import "./about.css";


const About = () => {
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-left flex-column"
        style={{ height: "80vh" }}
      >
        <div>
          {" "}
          <span
            className="h1 display-4 "
            style={{ borderBottom: "2px red solid" }}
          >
            About Us
          </span>
        </div>
        <p className="text-justify lead-1 mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ratione
          amet accusamus reprehenderit eveniet consectetur dolore dolores nulla
          nesciunt. Voluptate, consequuntur. Vero perspiciatis accusamus nobis
          magnam sed quidem tempore quibusdam. Dignissimos, ea doloremque!
          Consequuntur, aperiam. Eligendi modi tempore enim laboriosam adipisci
          voluptatum dicta suscipit corrupti quibusdam praesentium architecto
          temporibus aliquam vero nesciunt neque facere repellendus eos,
          obcaecati expedita placeat voluptates! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolores culpa repellat ex, aperiam
          ratione, vel placeat iusto consectetur facilis, corrupti debitis.
          Eveniet, repellendus! <br /> Nemo exercitationem aliquid quis nam, cumque
          debitis. Rerum, ipsam! Eligendi nihil distinctio beatae labore
          mollitia asperiores cumque laboriosam, blanditiis voluptas laudantium
          deserunt, dicta sed officiis error deleniti voluptatem quia alias
          consequuntur? Blanditiis sed mollitia laborum illum ipsam.
        </p>
      </div>
    </>
  );
};

export default About;
