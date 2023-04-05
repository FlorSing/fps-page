import React from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
const photo = require('../assets/FpsIDblue.png');

export default function About(){
    return(
      <div>
          <Container>
            <Row>
              <Col className = 'photo' size='sm-2'>
                  <div className="IDcard"> 
                    <img src={photo} class="img-fluid rounded-circle0" className='img-fluid' alt="photoID"></img>
                  </div>
              </Col>
              <Col size='sm-8'>
                  <div className="headline" style={{fontFamily:'Georgia', fontSize:'18px'}}>
                  <p>Highly competent with vast transferable skills gained from 15 years of work experience that includes data gathering, economic research, industry monitoring, branch banking operations, investment analysis, financial analysis, financial modelling/forecasting, and technical analysis. </p>
                  <p>Currently upgrading skills to keep up with relevant technologies while seeking the right opportunity to dedicate a full-time career for a well-established company</p>
                  </div>
              </Col>
            </Row>
          </Container>
      </div>
    )
 
};

           