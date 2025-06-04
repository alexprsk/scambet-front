import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import LockSvG from "./LockSvG";
import { formatInTimeZone, format } from 'date-fns-tz';
import { el } from 'date-fns/locale';


export function PreLiveMarketsTop() {
  return (
    <div className="events_Type flex-row flex bg-inherit rounded h-8 mb-2">
      <div className="text_svg flex-1 flex">
        <p className="text-white rounded-md flex ml-1"><strong>Upcoming Events</strong></p>
        <svg className="w-[19px] h-[19px] fill-[#8e8e8e]" viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z">
          </path>
        </svg>
      </div>
      <div className="market_type1x2_pusher flex items-center justify-center text-white font-sans ml-12"></div>
      <div className="market_type1x2 flex-1">
        <div className="market_type1x2 flex flex-row items-center justify-evenly h-full leading-xs text-white  text-center text-tiny s:text-xxs">
          
          <span className="flex-1 flex"><strong>Head to Head</strong></span>
         
        </div>
      </div>

    </div>
  );
}



export function PreLiveMarkets({ id, sport, startTime, hometeam, awayteam, odds }) {

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

  const dispatch = useDispatch();
  const selections = useSelector((state) => state.betslip.selections);


  const marketselections = [
    { label: '1', value: hometeam, odd: odds.find(o => o.name === hometeam)?.price, eventId: id, startTime  },
    { label: 'X', value: 'Draw', odd: odds.find(o => o.name === 'Draw')?.price, eventId: id, startTime },
    { label: '2', value: awayteam, odd: odds.find(o => o.name === awayteam)?.price, eventId: id, startTime }
  ].filter(Boolean);

  const handleSelection = (selection) => {
    const { label, value, odd, eventId, startTime } = selection;
    if (!selection.odd) return;




    const action = {
      type: 'SELECT_MARKET',
      payload: {
        selectedEvent: {
          hometeam,
          awayteam,
          startTime,
          eventId: eventId
        },
        selectedMarket: {
          label,
          value,
          odds: odd
        }
      }
    };

    dispatch(action);
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
        {marketselections.map((selection, index) => {
          const isSelected = selections.some(
            sel =>
              sel.selectedEvent.hometeam === hometeam &&
              sel.selectedEvent.awayteam === awayteam &&
              sel.selectedMarket.label === selection.label
          );

          const isDisabled = !selection.odd;

          return (
            <button
              key={index}
              onClick={() => !isDisabled && handleSelection(selection)}
              disabled={isDisabled}
              className={`flex justify-between items-center w-40 h-10 m-1 ${isDisabled
                  ? 'bg-gray-800 bg-opacity-20 cursor-not-allowed'
                  : isSelected
                    ? 'bg-emerald-500 hover:bg-emerald-500 cursor-pointer'
                    : 'bg-gray-800 bg-opacity-20 hover:bg-emerald-700 cursor-pointer'
                } border-gray-300 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-white border-gray-600 text-nowrap transition`}
            >
              <span>{selection.odd? selection.label : "Not Applicable"}</span>
              <span>{selection.odd || <LockSvG />}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}