import { useState } from 'react';
import './App.css';
import SideBarLeft from './components/SideBarLeft.jsx';
import './index.css'

import Carousel from './components/Carousel';
import Betslip from './components/BetSlip';
import Footer from './components/Footer.jsx';
import { PreLiveMarkets, PreLiveMarketsTop } from './components/Prelive/PreLiveMarkets';
import { PRELIVE_MARKETS } from './components/Prelive/DummyData.js';
import { IMAGES } from './components/Carousel'
import AuthWrapper from './components/Auth/AuthWrapper.jsx';


function App() {


  return (
    <>
      <AuthWrapper/>
  
      <div className="relative min-h-screen flex  ">
        <SideBarLeft />        
        <div className="flex-1 flex-col">
          {/* Carousel */}
          <div className="carousel_card m-8 h-44 flex flex-row rounded-xl">
            {IMAGES.map((image, index) => (
              <Carousel key={index} {...image} />
            ))}
          </div>

          {/* PreLive-Markets */}
          <div className="events_outside_container relative flex">
            <div className="events_container m-8 h-full flex-1 flex-col rounded-md z-10 ">
              <div className="events_card flex-1 flex-col rounded-md bg-gray-800 shadow-2xl" id="events_card">
                <PreLiveMarketsTop />
                {PRELIVE_MARKETS.map((market, index) => (
                  <PreLiveMarkets key={index} {...market} />
                ))}

              </div>
            </div><Betslip />
          </div>
          
          <Footer/>
        </div>
      </div>

    </>
  );
}

export default App;
