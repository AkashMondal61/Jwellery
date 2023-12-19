
import { Navbar } from './component/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './component/navbar.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';
import { Fragment,useEffect } from 'react';
import { Footer } from './component/Footer';
import { Slider } from './component/Slider';
import { Banner } from './component/Banner';
import Product from './component/Product';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
 <Fragment>
  <div class="home_black_version">
  <Navbar/>
  <BrowserRouter>
  </BrowserRouter>
  <Slider/>
  <Product/>
  <Banner/>
  <Footer/>
  </div>
 
  </Fragment>
  );
}

export default App;
