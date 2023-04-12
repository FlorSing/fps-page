import About from "./about";
import React from "react";
import Footer from "./Footer";
import './home.css';

function Home() {
  return (
  <div>
    <div className="jumbotron">
        <h1 id='name'>Florante P. Singcak</h1>
        <h3>Front-end Web Developer</h3>
    </div>
    <About />
    <Footer>
      <div className="footer">
        <p>
          Copyright: FPS
        </p>
      </div>
    </Footer>
  </div>
    );
  }



export default Home;

