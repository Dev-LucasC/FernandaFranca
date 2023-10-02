import React from "react";
import logo from "./logo.svg";
import "./sobre.css";
import foto from "./foto.svg"

const sobre = () => {
  return (
    <section>
      <main>
        <div className="container">
          <div className="container_sobremim">
            <h1>Fernanda</h1>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </p>
            
            <img src={logo} alt="" />
            <a className="btn-cta" href="http://" target="_blank" rel="noopener noreferrer" >SAIBA MAIS</a>
          </div>
          <div className="container-img">
            <img src={foto} alt="" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default sobre;
