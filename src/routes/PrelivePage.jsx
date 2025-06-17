import { useParams } from 'react-router-dom';
import { useOpenBets } from '../hooks/useOpenBets.js';
import { useFetchEvents } from '../hooks/useFetchEvents.js';
import PreLiveEvents from '../components/PreLive/PreLiveEvents.jsx';
import Betslip from '../components/Betslip/BetSlip.jsx';

function PreLivePage() {
  const { sport } = useParams();
  const eventsBySport = useFetchEvents();
  const openbets = useOpenBets();

  const normalizedSportKey = sport 
    ? sport.replace(/\s/g, '').toLowerCase()
    : null;

  if (!eventsBySport) {
    return (
      <>
        <div className="text-white p-4 text-xl">ScamBet</div>
        <div className="text-white p-4">Loading events...</div>
      </>
    );
  }


  const getDisplayTitle = () => {
    if (!sport) return 'All Sports'; 
    
 
    const titleMap = {
      'americanfootball': 'American Football',
      'baseball': 'Baseball',
      'basketball': 'Basketball',
      'soccer': 'Soccer',
      'tennis': 'Tennis'
    };
    
    return titleMap[normalizedSportKey] || 
           sport.replace(/\b\w/g, c => c.toUpperCase()); 
  };


  const currentEvents = normalizedSportKey 
    ? eventsBySport[normalizedSportKey] || []
    : Object.values(eventsBySport).flat();

  return (
    <>
      <div className="events_outside_container relative flex">
        <div className="events_container m-8 h-full flex-1 flex-col rounded-md z-10">
          <div className="events_card flex-1 flex-col rounded-md bg-gray-800 shadow-2xl">
            <h2 className="text-white text-xl font-bold mb-4">
              {getDisplayTitle()}
            </h2>
            
            {currentEvents.length === 0 ? (
              <p className="text-white p-2">No events available</p>
            ) : (
              currentEvents.map((event) => (
                <PreLiveEvents
                  key={event.id}
                  id={event.id}
                  sport={event.sport_key}
                  hometeam={event.home_team}
                  awayteam={event.away_team}
                  startTime={new Date(event.commence_time).toLocaleString()}
                />
              ))
            )}
          </div>
        </div>
        <Betslip openbets={openbets} />
      </div>
    </>
  );
}

export default PreLivePage;