import { useFetchMarkets } from '../hooks/useFetchMarkets.js';
import { useOpenBets } from '../hooks/useOpenBets.js';
import { IMAGES } from '../constants/images.jsx';
import Carousel from '../components/Carousel.jsx';
import { PreLiveMarkets, PreLiveMarketsTop } from '../components/Prelive/PreLiveMarkets';
import Betslip from '../components/Betslip/BetSlip.jsx';

function PrelivePage() {
  const markets = useFetchMarkets();
  const openbets = useOpenBets();

  return (
    <>
      <div className="carousel_card m-8 h-44 flex flex-row rounded-xl">
        {IMAGES.map((image, index) => (
          <Carousel key={index} {...image} />
        ))}
      </div>
      <div className="events_outside_container relative flex">
        <div className="events_container m-8 h-full flex-1 flex-col rounded-md z-10">
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
        <Betslip openbets={openbets} />
      </div>
    </>
  );
}

export default PrelivePage;
