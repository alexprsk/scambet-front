import { useFetchMarkets } from '../hooks/useFetchMarkets.js';
import { useOpenBets } from '../hooks/useOpenBets.js';
import { useFetchEvents } from '../hooks/useFetchEvents.js';
import { UpcomingMarkets, PreLiveMarketsTop } from '../components/Upcoming/UpcomingMarkets.jsx';
import Betslip from '../components/Betslip/BetSlip.jsx';
import NewSwiper from '../components/NewSwiper.jsx';

function UpcomingPage() {
  const markets = useFetchMarkets();
  const openbets = useOpenBets();
  const events = useFetchEvents();

  return (
    <>
      <div className="carousel_card m-4  h-44 md:h-44 lg:h-56 flex-1 flex-row rounded-xl ">
        <NewSwiper />
      </div>
      <div className="events_outside_container relative flex">
        <div className="events_container m-8 h-full flex-1 flex-col rounded-md z-10">
          <div className="events_card flex-1 flex-col rounded-md bg-gray-800 shadow-2xl" id="events_card">
            <PreLiveMarketsTop />
            {markets.map((market, index) => (
              <UpcomingMarkets
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

export default UpcomingPage;
