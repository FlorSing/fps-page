import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import NavTabs from './components/NavTabs';
import Design from './components/design';
import Photography from './components/photography';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  
    return (
      <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          {/* <Route path="projects" element={<Projects />} /> */}
          <Route path="projects" element={<Projects />} />
          <Route path="design" element={<Design />} />
          <Route path="photography" element={<Photography />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
      );
  }


export default App;
