import { useSelector, useDispatch } from 'react-redux'



export default function BetslipOpenBets({selections}) {
    return (
        <>
        <ul>
        {selections.map((selection, index) => (
            <li key={index}>
            {/* Your content here, for example: */}
            {selection.selectedMarket.label}
            </li>
        ))}
        </ul>
        </>
    );
}