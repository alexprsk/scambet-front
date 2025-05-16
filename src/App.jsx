import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Registration from './components/Registration';
import Login from './components/Login';
import SideBar from './components/SideBar';
import Carousel from './components/Carousel';
import Betslip from './components/BetSlip';
import { PreLiveMarkets, PreLiveMarketsTop } from './components/Prelive/PreLiveMarkets';
import { PRELIVE_MARKETS } from './components/Prelive/DummyData.js';
import { IMAGES } from './components/Carousel'

function App() {

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseLogin = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <NavBar onLoginClick={handleLoginClick} />
      <Registration />
      <Login show={showLoginModal} onClose={handleCloseLogin} />
      <div className="relative min-h-screen flex ">
        <SideBar />
        <div className="flex-1 flex-col">

          {/* Carousel */}
          <div className="carousel_card m-8 h-56 flex flex-row rounded-xl">
            {IMAGES.map((image, index) => (
              <Carousel key={index} {...image} />
            ))}
          </div>

          {/* PreLive-Markets */}
          <div className="events_outside_container relative ">
            <div className="events_container m-8 h-full flex flex-col  rounded-md z-10 border border-solid border-white">
              <div className="events_card flex-1 flex-col rounded-md" id="events_card">

                <PreLiveMarketsTop />

                {PRELIVE_MARKETS.map((market, index) => (
                  <PreLiveMarkets key={index} {...market} />
                ))}
          {/* BetSlip */}

               
              </div>
            </div>
          </div>
        </div>
         <Betslip />
      </div>
    </>
  );
}

export default App;
