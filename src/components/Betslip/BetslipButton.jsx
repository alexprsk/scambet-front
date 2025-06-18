import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import handlePlaceBet from './Betslip.api/handlePlaceBet.js'
import { useOpenBets } from '../../hooks/useOpenBets.js';

export default function BetslipButton({
    stake,
    setStake,
    selections,
    totalOdds,
    potentialReturn
}) {
    const user_id = useSelector((state) => state.auth.user_id);
    const [isPlaced, setIsPlaced] = useState(null);
    const [error, setError] = useState(null);

    const loadOpenBets = fetchOpenBets();

        useEffect(() => {
        let timer;
        if (isPlaced) {
            // Set a timer to clear the isPlaced message after 3 seconds (3000ms)
            timer = setTimeout(() => {
                setIsPlaced(null);
            }, 3000);
        }
        // Clear the timer when the component unmounts or isPlaced changes
        return () => clearTimeout(timer);
    }, [isPlaced]);

    const placeBet = async () => {
        try {
            await handlePlaceBet(selections, stake, setIsPlaced, user_id);
            useOpenBets();
        } catch (err) {
            setError(err.message);
        }
    };



    const hasDuplicates = selections.some((item, index, array) =>
        item.selectedMarket.eventId === item.selectedMarket.eventId &&
        array.findIndex(obj =>
            obj.selectedMarket.eventId === item.selectedMarket.eventId &&
            obj.selectedEvent.hometeam === item.selectedEvent.hometeam &&
            obj.selectedEvent.awayteam === item.selectedEvent.awayteam
        ) !== index
    );

    return (
        <>
            <div className="mt-4 flex flex-row justify-end ">
                {isPlaced ? <span className='flex pt-3 flex-1 text-sm font-bold text-green-600  '>Bet Placed!</span> : <span className='invisible block h-5 '> </span>}
                {selections.length === 0 ? <span className='flex justify-end items-center pr-2 w-20'></span> : selections.length === 1 ? <span className='flex justify-end items-center pr-2 w-20'>Single</span> : <span className='flex justify-end items-center pr-2 w-20'>Parlay</span>}
                {totalOdds > 0 ? <span className=' flex items-center mr-2 text-sm'> @{totalOdds}</span> : <span></span>}
                <input
                    id="stake"
                    type="number"
                    min="0"
                    step="0.1"
                    value={stake}
                    onChange={(e) => setStake(Number(e.target.value))}
                    placeholder="Bet"
                    className="w-20 bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-emerald-400"
                />
            </div>
            {hasDuplicates ? <span className='h-5  block text-sm text-red-600'>Incompatible Selections</span> : <span className='invisible block h-5'> </span>}

            <div>
                <button disabled={hasDuplicates || !(stake > 0)} onClick={placeBet}
                    type="button"
                    className={`w-full bg-emerald-600 hover:bg-emerald-400 text-black font-semibold py-2 rounded transition duration-200 ${hasDuplicates || !(stake > 0) ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                >
                    <div className="flex flex-col items-center leading-tight">
                        <span className='font-bold text-md'>Place Bet {stake}</span>
                        <span className="text-sm text-black/80">Return {potentialReturn}</span>
                    </div>
                </button>
            </div>
        </>
    );
}
