import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/projects';
import Design from './components/design';
import Photography from './components/photography';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/design' element={<Design/>} />
        <Route path='/photography' element={<Photography/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}


export default App;
