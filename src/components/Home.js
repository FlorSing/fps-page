import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import About from './about';
import './Home.css'

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div >
      <div class="jumbotron jumbotron-fluid"  >
        <div class="container">
          <h1 class="display-4">Florante P. Singcak</h1>
          <p class="lead">Front-end Web Developer.</p>
        </div>
       </div>
      </div>
      <Container maxWidth="sm-12" >
        <Box sx={{ bgcolor: '#080e66', height: '50vh' }}>
          <About />
        </Box>
      </Container>
    </React.Fragment>
  );
}