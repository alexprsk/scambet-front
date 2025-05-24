import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import BetslipView from './BetSlipView';
import BetslipOpenBets from './BetslipOpenBets';

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

  return (
    <div className="w-80 mt-8 bg-inherit text-white m-4 p-4 hidden md:block border border-gray-500  rounded-xl">
      <div className='flex-row flex'>
      <button className="flex flex-1 items-center justify-center text-xl font-bold mb-4 border-b border-r pb-2 cursor-pointer rounded-tl-xl">Betslip</button>
        <button className="flex flex-1 items-center justify-center text-xl font-bold mb-4 border-b pb-2 cursor-pointer rounded-tr-xl">Open Bets</button>
        </div>
      <div className="top-16">

        <BetslipView 
          stake={stake}
          setStake={setStake}
          potentialReturn={calculatePotentialReturn()}
          totalOdds={calculateTotalOdds()}
          selections={selections} />

          <BetslipOpenBets selections={selections}>

          </BetslipOpenBets>
      </div>
    </div>
  )



}