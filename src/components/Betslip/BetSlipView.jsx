import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';

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


  const handlePlaceBet = () => {
    console.log(selections)
    return selections

  };

  if (!selections || selections.length === 0) {
    return (
      <div className={`w-80 bg-inherit text-white rounded-xl `}>
        <div className="top-16 ">
          <h2 className="text-xl font-bold mb-4 pb-2">Your Betslip is empty :(</h2>
        </div>
      </div>
    );
  }




  return (
    <div className="w-80 rounded-xl">
      <div className="top-16 pr-8">


        {/* Selected Bets */}
        <ul className="space-y-4">
          {selections.map((selection, index) => (
            <li key={index} className="p-2 bg-gray-800 rounded">
              <div className="flex justify-between">
                <span>{selection.selectedEvent.hometeam} vs {selection.selectedEvent.awayteam}</span>
                <button
                  onClick={() => dispatch({
                    type: 'DESELECT_MARKET',
                    payload: {
                      hometeam: selection.selectedEvent.hometeam,
                      awayteam: selection.selectedEvent.awayteam,
                      label: selection.selectedMarket.label
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
                <span className="text-gray-400">Selection: </span>
                <span>{selection.selectedMarket.value}</span>
              </div>
              <div>
                <span className="text-gray-400">Odds: </span>
                <span className="text-lime-400">{selection.selectedMarket.odds}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Stake Input */}
        <div className="mt-6">
          <label htmlFor="stake" className="block text-sm text-gray-300 mb-1">Stake</label>
          <input
            id="stake"
            type="number"
            value={stake}
            onChange={(e) => setStake(e.target.value)}
            placeholder="Enter stake"
            className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-lime-400"
          />
        </div>

        {/* Totals */}
        <div className="mt-4 text-sm space-y-1">
          <div className="flex justify-between">
            <span>Total Odds</span>
            <span className="text-lime-400 font-semibold">{totalOdds}</span>
          </div>
          <div className="flex justify-between">
            <span>Potential Return</span>
            <span className="text-lime-400 font-semibold">{potentialReturn}</span>
          </div>
        </div>

        {/* Place Bet Button */}
        <button onClick={() => handlePlaceBet(selections)}
          type="button"
          className="mt-6 w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 rounded transition duration-200 cursor-pointer"
        >
          Place Bet
        </button>
      </div>
    </div>
  );
}
