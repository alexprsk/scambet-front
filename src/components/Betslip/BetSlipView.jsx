import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import { PlaceBet } from "./http.js"

export default function BetslipView({
  stake,
  setStake,
  selections,
  totalOdds,
  potentialReturn,

}) {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const [placedBet, setPlacedBet] = useState([]);



  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('http://localhost:8000/auth/');
        const resData = await response.json()

        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        setPlacedBet(resData.selectedMarket)
      } catch (error) {
        setError({
          message: error.message || "Could not fetch users"
        })
      }
    }
    fetchUsers();
  }, [selections]);

  const hasDuplicates = selections.some((item, index, array) =>
    item.selectedMarket.betTypeId === 12314 &&
    array.findIndex(obj =>
      obj.selectedMarket.betTypeId === item.selectedMarket.betTypeId &&
      obj.selectedEvent.hometeam === item.selectedEvent.hometeam &&
      obj.selectedEvent.awayteam === item.selectedEvent.awayteam
    ) !== index
  );

  const handlePlaceBet = (selections, stake) => {

    console.log(hasDuplicates, { selections, "stake": stake })
    PlaceBet(selections, stake);

    return selections, stake
  };





  if (!selections || selections.length === 0) {
    return (
      <div className={`w-80 bg-inherit text-white rounded-xl `}>
        <div className="top-16 ">
          <h2 className="font-bold mb-4 pb-2 text-l ">Your Betslip is empty :(</h2>
        </div>
      </div>
    );
  }




  return (
    <div className="w-80 rounded-xl text-sm ">
      <div className="top-16 pr-6 ">


        {/* Selected Bets */}
        <ul className="space-y-4 ">
          {selections.map((selection, index) => (
            <li key={index} className="p-2 bg-gray-800 rounded text-sm">
              <div className="flex justify-between ">
                <span>{selection.selectedEvent.hometeam} vs {selection.selectedEvent.awayteam}</span>
                <button
                  onClick={() => dispatch({
                    type: 'DESELECT_MARKET',
                    payload: {
                      hometeam: selection.selectedEvent.hometeam,
                      awayteam: selection.selectedEvent.awayteam,
                      label: selection.selectedMarket.label,
                    }
                  })}
                  className="text-red-400 hover:text-red-600"
                >
                  <svg className="w-[15px] h-[15px] fill-[#8e8e8e] cursor-pointer" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">


                    <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"></path>

                  </svg>
                </button>
              </div>
              <div className="mt-1">
                <span>{selection.selectedMarket.value}</span>

                <span className="text-gray-400"> @ </span>
                <span className="text-lime-400">{selection.selectedMarket.odds}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Stake Input */}
        <div className="mt-6 flex justify-end ">

          <input
            id="stake"
            type="number"
            min="0"
            step="0.1"
            value={stake}
            onChange={(e) => setStake(e.target.value)}
            placeholder="Bet"
            className="w-20 bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-lime-400"
          />
        </div>

        {/* Totals */}


        {/* Place Bet Button */}
        {hasDuplicates ? <span className='mt-4 block text-sm text-red-600'>Incompatible Selections</span> : <span></span>}
        <button disabled={hasDuplicates} onClick={() => handlePlaceBet(selections, stake)}
          type="button"
          className={`mt-6 w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 rounded transition duration-200 ${hasDuplicates ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
          <div className="flex flex-col items-center leading-tight">
            <span className='font-bold text-md'>Place Bet {stake}</span>
            <span className="text-sm text-black/80">Return {potentialReturn}</span>
          </div>
        </button>
      </div>
    </div>
  );
}
