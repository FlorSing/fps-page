import About from "./about";
import React from "react";
import './home.css';

function Home() {
  return (
  <div>
    <div className="jumbotron">
        <h1 id='name'>Florante P. Singcak</h1>
        <h3>Front-end Web Developer</h3>
    </div>
    <About />
  </div>
    );
  }



export default Home;

