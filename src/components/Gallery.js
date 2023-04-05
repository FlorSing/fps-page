import React from "react";

import Col from "../components/Col";
import Card from "../components/Card";
import './gallery.css';

function Gallery(props) {
  return (
    
        <Col className='projCol' size='sm-4'>
          <Card className='cardTitle' heading = {props.title}>
            <img alt={props.title} className='img-fluid' src={props.screenshot}/>
            <p>GitHub Repository:</p>
            <a href={props.repository} class="btn btn-primary">{props.repository}</a> 
            <p>Deployment Page:  </p>
            <a href={props.deployment} class="btn btn-primary">{props.deployment}</a> 
          </Card>
        </Col>

    
  )
};

export default Gallery;
