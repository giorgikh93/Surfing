import React from 'react';
import './App.css';
import Header from './components/Header'
import SurfingSlider from './components/SurfingSlider'
import SurfingVideo from './components/SurfingVideo'

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
      </div>

  );
}

export default App;
