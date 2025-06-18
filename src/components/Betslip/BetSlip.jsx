import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import BetslipButton from './BetslipButton';
import BetslipView from './BetSlipView';
import BetslipOpenBets from './BetslipOpenBets';
import { useOpenBets } from '../../hooks/useOpenBets';

export default function Betslip() {
  const [stake, setStake] = useState('');
  const selections = useSelector((state) => state.betslip.selections);
  const [selectedBetslip, setSelectedBetslip] = useState(true);

  const { openBets, refetch: refetchOpenBets } = useOpenBets();

  useEffect(() => {
    if (!selectedBetslip) {
      refetchOpenBets();
    }
  }, [selectedBetslip, refetchOpenBets]);

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
    <div className="max-h-120 h-110 w-96 mt-8 bg-inherit text-white m-4 hidden md:block border border-gray-500 rounded-xl">
      <div className="flex-row flex h-16">
        <button
          onClick={() => setSelectedBetslip(true)}
          className={`flex flex-1 items-center justify-center text-xl font-bold mb-4 border-b border-r pb-2 ${
            selectedBetslip ? 'bg-emerald-500' : 'hover:bg-emerald-700'
          } cursor-pointer rounded-tl-xl`}
        >
          Betslip
          <span
            className={`inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold rounded-full bg-blue-200 text-blue-800 ${
              selections.length === 0 ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {selections.length}
          </span>
        </button>
        <button
          onClick={() => setSelectedBetslip(false)}
          className={`flex flex-1 items-center justify-center text-xl font-bold mb-4 border-b pb-2 ${
            selectedBetslip ? 'hover:bg-emerald-700' : 'bg-emerald-500'
          } cursor-pointer rounded-tr-xl`}
        >
          Open Bets
        </button>
      </div>

      <div className="top-16 px-4 pb-4">
        {selectedBetslip ? (
          <>
            <BetslipView
              stake={stake}
              setStake={setStake}
              potentialReturn={calculatePotentialReturn()}
              totalOdds={calculateTotalOdds()}
              selections={selections}
            />
            <BetslipButton
              stake={stake}
              setStake={setStake}
              potentialReturn={calculatePotentialReturn()}
              totalOdds={calculateTotalOdds()}
              selections={selections}
              refetchOpenBets={refetchOpenBets}
            />
          </>
        ) : (
          <BetslipOpenBets openbets={openBets} />
        )}
      </div>
    </div>
  );
}
