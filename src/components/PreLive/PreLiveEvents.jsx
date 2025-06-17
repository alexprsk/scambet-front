
import { useSelector, useDispatch } from 'react-redux';
import { formatInTimeZone } from 'date-fns-tz';
import { el } from 'date-fns/locale';





export default function PreLiveEvents({ sport, startTime, hometeam, awayteam }) {

  const formatGreekTime = (isoString) => {
          try {
              return formatInTimeZone(
                  isoString,
                  'Europe/Athens',
                  'dd MMM yyyy, HH:mm', // Format: "04 Ιουν 2025, 15:15"
                  {
                      locale: el, // Greek locale
                      timeZone: 'Europe/Athens'
                  }
              );
          } catch (error) {
              console.error('Error formatting date:', error);
              return isoString; // fallback to original string if formatting fails
          }
      };



  return (

    <div className="event_row flex-row flex bg-slate-700 hover:bg-slate-500 mb-px cursor-pointer rounded-md transition">
      <div className="event_timer flex items-center justify-start pl-1 mr-1 text-white text-sm">
        {formatGreekTime(startTime)}
      </div>

      <div className="event_teams flex flex-col w-40 flex-1 ml-1 pl-2 items-left justify-start">
        <div className="event_teams_home_1 flex text-white text-sm">
          {hometeam}
        </div>

        <div className="event_teams_away_2 flex text-white text-sm">
          {awayteam}
        </div>

      </div>
      <div className="event_markets flex flex-row flex-1 ml-1 items-center justify-evenly">
        <div className="event_timer flex items-center justify-start w-60 pl-1 mr-1 text-white text-sm">
          {sport.replaceAll("_", " ")
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ')}
        </div>

      </div>
    </div>
  );
}