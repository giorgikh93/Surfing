import React, { useContext } from 'react';
import './App.css';
import { Consumer } from './useUrl'
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
import { Switch, Route } from 'react-router-dom'


function App() {

  const { IMAGE_PATH } = useContext(Consumer)
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
      <img className='background' src={`${IMAGE_PATH}/images/background.png`} alt="bckg" />
      <img className='background2' src={`${IMAGE_PATH}/images/background2.png`} alt="bckg2" />
      <Switch >
        <Route path='/stories'>
          'Component for Stories'
      </Route>
        <Route path='/events'>
          'Component for Events'
      </Route>
        <Route path='/places'>
          'Component for Places'
      </Route>
        <Route path='/boards'>
          'Component for Boards'
      </Route>

      </Switch>

    </div>

  );
}

export default App;
