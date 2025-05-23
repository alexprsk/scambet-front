import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';


export default function Betslip() {
  const dispatch = useDispatch();
  const [stake, setStake] = useState('');
  const { selections } = useSelector((state) => state);

  const calculatePotentialReturn = () => {
    if (!stake || selections.length === 0) return 0;

    const totalOdds = selections.reduce(
      (acc, selection) => acc * selection.selectedMarket.odds,
      1
    );

    return (stake * totalOdds).toFixed(2);
  };

  const calculateTotalOdds = () => {
    if (selections.length === 0) return 0;
    return selections.reduce(
      (acc, selection) => acc * selection.selectedMarket.odds,
      1
    ).toFixed(2);
  };

  if (selections.length === 0) {
    return (
      <div className="w-80 mt-8 bg-inherit text-white p-4 hidden md:block border border-gray-500 rounded-xl">
        <div className="top-16">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-500 pb-2">Betslip</h2>
          <h2 className="text-xl font-bold mb-4 pb-2">Your Betslip is empty :(</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 mt-8 bg-inherit text-white p-4 hidden md:block border border-gray-500 rounded-xl">
      <div className="top-16">
        <h2 className="text-xl font-bold mb-4 border-b border-gray-500 pb-2">Betslip</h2>

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
                  ×
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
            <span className="text-lime-400 font-semibold">{calculateTotalOdds()}</span>
          </div>
          <div className="flex justify-between">
            <span>Potential Return</span>
            <span className="text-lime-400 font-semibold">{calculatePotentialReturn()}</span>
          </div>
        </div>

        {/* Place Bet Button */}
        <button
          type="button"
          className="mt-6 w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 rounded transition duration-200 cursor-pointer"
        >
          Place Bet
        </button>
      </div>
    </div>
  );
}