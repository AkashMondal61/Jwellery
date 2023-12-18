
import { Nabar } from './component/Navbar';
import './component/navbar.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';
import { Fragment } from 'react';
import { Footer } from './component/Footer';
import { Slider } from './component/Slider';
import { Banner } from './component/Banner';
function App() {
  return (
 <Fragment>
  <div class="home_black_version">
  <Nabar/>
  <BrowserRouter>
  </BrowserRouter>
  <Slider/>
  <Banner/>
  <Footer/>
  </div>
 
  </Fragment>
  );
}

export default App;
