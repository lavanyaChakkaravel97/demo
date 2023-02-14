import React from 'react';
import '../App.css';
import { Button } from '../Button';
import './Home.css'
import Typical from 'react-typical';

function Home() {
  return (
    <div id="Home">
     <div className='hero-container'>
      
    <video src='/videos/video-1.mp4' autoPlay loop muted />
     <h1> I' am a
            <Typical
           steps={[
             " Devloper 💻",
             2000,
             " Designer 🎨",
             2500,
             " Traveller ✈️",
             2000,
             " Gamer 🎮",
             2000,
            " Photographer",
             2000
           ]}
           loop={Infinity}
           wrapper="b"
         /> 
         </h1>
        {/* <div className='hero-btns'>
         <Button
           className='btns'
           buttonStyle='btn--outline'
           buttonSize='btn--large'
         >
           GET STARTED
         </Button>
          <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
           onClick={console.log('hey')}
         >
           WATCH TRAILER <i className='far fa-play-circle' />
         </Button> 
      </div>  */}
     </div>
     </div>
  );
}

export default Home;