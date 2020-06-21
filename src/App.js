import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header'
import SurfingSlider from './components/SurfingSlider'
import SurfingVideo from './components/SurfingVideo'
import Shop from './components/Shop'
import SurfTraining from './components/SurfTraining'

function App() {
  return (
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
    </div>

  );
}

export default App;
