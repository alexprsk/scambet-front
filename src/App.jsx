import './App.css';
import SideBarLeft from './components/SideBarLeft.jsx';
import './index.css'

import Carousel from './components/Carousel';
import Betslip from './components/Betslip/BetSlip.jsx'
import Footer from './components/Footer.jsx';
import { PreLiveMarkets, PreLiveMarketsTop } from './components/Prelive/PreLiveMarkets';
import { IMAGES } from './constants/images.jsx';
import AuthWrapper from './components/Auth/AuthWrapper.jsx';
import { useFetchMarkets } from './hooks/useFetchMarkets.js';
import { useOpenBets } from './hooks/useOpenBets.js';
import { SPORTS } from './constants/sportslists.jsx';
import { ICONS } from './constants/svg.jsx';

function App() {

  const markets = useFetchMarkets();
  const openbets = useOpenBets();





  return (
    <>
      <AuthWrapper />

      <div className="relative min-h-screen flex  ">
        <SideBarLeft sports={SPORTS} icons={ICONS}/>
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
                {markets.map((market, index) => (
                  <PreLiveMarkets
                    key={index}
                    id={market.id}
                    sport={market.sport}
                    hometeam={market.hometeam}
                    awayteam={market.awayteam}
                    odds={market.odds}
                    startTime={market.startTime}
                  />
                ))}
              </div>
            </div>
            {/* Betslip */}
            <Betslip openbets ={ openbets }/>
          </div>
          <Footer />
        </div>
      </div>

    </>
  );
}

export default App;
