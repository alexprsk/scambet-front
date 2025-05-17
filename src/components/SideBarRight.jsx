export default function SideBarRight() {
  return (
    <div className="w-80 mt-8 bg-inherit text-white p-4 hidden md:block border border-gray-500 rounded-xl">
      
      <div className="top-16">
        <h2 className="text-xl font-bold mb-4 border-b border-gray-500 pb-2">Betslip</h2>

        {/* Selected Bets */}
        <ul className="space-y-4">
          <li className="p-3 bg-gray-700 rounded-lg shadow flex flex-col">
            <div className="flex justify-between text-sm">
              <span>Dortmund vs Wolfsburg</span>
              <button className="text-red-400 hover:text-red-600">×</button>
            </div>
            <div className="text-sm text-gray-300 mt-1">Match Winner: Dortmund</div>
            <div className="text-sm text-lime-400 font-semibold mt-1">Odds: 1.85</div>
          </li>

          <li className="p-3 bg-gray-700 rounded-lg shadow flex flex-col">
            <div className="flex justify-between text-sm">
              <span>Arsenal vs Chelsea</span>
              <button className="text-red-400 hover:text-red-600">×</button>
            </div>
            <div className="text-sm text-gray-300 mt-1">Total Goals Over 2.5</div>
            <div className="text-sm text-lime-400 font-semibold mt-1">Odds: 2.10</div>
          </li>
        </ul>

        {/* Stake Input */}
        <div className="mt-6">
          <label htmlFor="stake" className="block text-sm text-gray-300 mb-1">Stake</label>
          <input
            id="stake"
            type="number"
            placeholder="Enter stake"
            className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-lime-400"
          />
        </div>

        {/* Totals */}
        <div className="mt-4 text-sm space-y-1">
          <div className="flex justify-between">
            <span>Total Odds</span>
            <span className="text-lime-400 font-semibold">3.88</span>
          </div>
          <div className="flex justify-between">
            <span>Potential Return</span>
            <span className="text-lime-400 font-semibold">€38.80</span>
          </div>
        </div>

        {/* Place Bet Button */}
        <button
          type="button"
          className="mt-6 w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 rounded transition duration-200"
        >
          Place Bet
        </button>
      </div>
    </div>
  );
}
