import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header'
import SurfingSlider from './components/SurfingSlider'
import SurfingVideo from './components/SurfingVideo'
import Shop from './components/Shop'
import SurfTraining from './components/SurfTraining'
import PointBreak from './components/PointBreak'
import JoinTheClub from './components/JoinTheClub'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
  return (
    <div className='relative'>
      <div className='wrapper' >
        <div className='linesWrapper'>
          <span className='line' ></span>
          <span className='line' ></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
        <Header />
        <SurfingSlider />
        <SurfingVideo />
        <Shop />
        <SurfTraining />
        <PointBreak />
        <JoinTheClub />
        <Contact />
        <Footer />
      </div>
      <img className='background' src="http://localhost:3000/images/background.png" alt="bckg" />
      <img className='background2' src="http://localhost:3000/images/background2.png" alt="bc" />

    </div>

  );
}

export default App;
