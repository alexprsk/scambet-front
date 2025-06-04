import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import BetslipButton from './BetslipButton';
import BetslipView from './BetSlipView';
import BetslipOpenBets from './BetslipOpenBets';





export default function Betslip() {
  const authenticated = useSelector((state) => state.auth.authenticated);


useEffect(() => {
  const authData = JSON.parse(localStorage.getItem("auth"));
  const token = authData?.access_token;

  if (!authenticated || !token) return;

  const fetchOpenBets = async () => {
    try {
      const response = await fetch('http://localhost:8000/sportsbook/open_bets', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || "Fetch failed");
      }

      const data = await response.json();
      console.log("Open bets:", data);
    } catch (error) {
      console.error("Error fetching open bets:", error);
    }
  };

  fetchOpenBets();
}, [authenticated]);



const dispatch = useDispatch();
const [stake, setStake] = useState('');
const selections = useSelector((state) => state.betslip.selections);
const [selectedBetslip, setSelectedBetslip] = useState(true)

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



return (
  <div className="max-h-120  h-110 w-96 mt-8 bg-inherit text-white m-4 hidden md:block border border-gray-500 rounded-xl">
    <div className='flex-row flex h-16'>
      <button
        onClick={() => setSelectedBetslip(true)}
        className={`flex flex-1 items-center justify-center text-xl font-bold mb-4 border-b border-r pb-2 ${selectedBetslip ? 'dark:bg-emerald-500 ' : 'dark:hover:bg-emerald-700'} cursor-pointer rounded-tl-xl`}
      >
        Betslip
        <span
          className={`inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold rounded-full bg-blue-200 text-blue-800 ${selections.length === 0 ? 'opacity-0' : 'opacity-100'
            }`}
        >
          {selections.length}
        </span>
      </button>
      <button onClick={() => setSelectedBetslip(false)} className={`flex flex-1 items-center justify-center text-xl font-bold mb-4 border-b pb-2  ${selectedBetslip ? "dark:hover:bg-emerald-700" : "dark:bg-emerald-500"} cursor-pointer rounded-tr-xl`}>Open Bets</button>
    </div>
    <div className="top-16 px-4 pb-4">

      {selectedBetslip ? <BetslipView
        stake={stake}
        setStake={setStake}
        potentialReturn={calculatePotentialReturn()}
        totalOdds={calculateTotalOdds()}
        selections={selections} /> :

        <BetslipOpenBets selections={selections} />
      }
      {selectedBetslip ? <BetslipButton
        stake={stake}
        setStake={setStake}
        potentialReturn={calculatePotentialReturn()}
        totalOdds={calculateTotalOdds()}
        selections={selections} /> : <></>}

    </div>
  </div>
)
}