import { useState, useEffect } from 'react';
import './App.css';
import SideBarLeft from './components/SideBarLeft.jsx';
import './index.css'

import Carousel from './components/Carousel';
import Betslip from './components/Betslip/BetSlip.jsx'
import Footer from './components/Footer.jsx';
import { PreLiveMarkets, PreLiveMarketsTop } from './components/Prelive/PreLiveMarkets';
import { PRELIVE_MARKETS } from './components/Prelive/DummyData.js';
import { IMAGES } from './components/Carousel'
import AuthWrapper from './components/Auth/AuthWrapper.jsx';



function App() {

  const [markets, setMarkets] = useState([]);


useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:8000/sportsbook/odds');
      const json  = await res.json();
      console.log(json)

  const transformed = (json.events[0] || [])
    .filter(event => event.bookmakers?.length > 0 && event.bookmakers[0].markets?.length > 0)
    .map(event => {
      const outcomes = event.bookmakers[0].markets[0].outcomes || [];

      return {
        id: event.id,
        sport: event.sport_key,
        hometeam: event.home_team,
        awayteam: event.away_team,
        odds: outcomes.map(odd => ({ name: odd.name, price: odd.price })),
        startTime: new Date(event.commence_time).toLocaleString(),
      };

    });
      console.log(transformed);
      setMarkets(transformed)
    } catch (error) {
      console.error('Error fetching odds:', error);
    }
  };

  fetchData();
}, []);

  return (
    <>
      <AuthWrapper />

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
            </div>
            {/* Betslip */}
            <Betslip />
          </div>
          <Footer />
        </div>
      </div>

    </>
  );
}

export default App;
