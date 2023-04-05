import React, { Component } from "react";
import projects from "../projects.json"
import Gallery from "../components/Gallery";
import Container from "../components/Container";
import Row from "../components/Row";
import Wrapper from "../components/Wrapper";


class Projects extends Component {

  state = {
    projects
  }


render() {
  return (
    <Wrapper>
    <Container >
      <Row>
          {this.state.projects.map(project => (
            <Gallery
              id = {project.id}
              key = {project.id}
              title = {project.title}
              repository = {project.repository}
              screenshot = {project.screenshot}
              deployment = {project.deployment}>
            </Gallery>
          ))}            
          
      </Row>
    </Container>
    </Wrapper>
    );
}
}

export default Projects;
