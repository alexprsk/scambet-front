import React, { useState } from 'react';
import { formatInTimeZone, format } from 'date-fns-tz';
import { el } from 'date-fns/locale';

export default function BetslipOpenBets({ openbets }) {
    const [selectedBetId, setSelectedBetId] = useState(null);

    // Date formatting function using formatInTimeZone
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

    const handleSelect = (betId) => {
        setSelectedBetId(prevId => (prevId === betId ? null : betId));
    };


    return (
        <div className="scrollbar w-90 rounded-xl text-sm overflow-x-hidden overflow-y-auto">
            <div className="top-16 pr-2 h-90 space-y-px">
                {[...openbets].reverse().map((bet) => {
                    const isSelected = selectedBetId === bet._id;

                    return (
                        <div
                            key={bet._id}
                            onClick={() => handleSelect(bet._id)}
                            className="bg-gray-800 rounded p-3 cursor-pointer transition-all duration-300 ease-in-out"
                        >
                            <div className="flex justify-between items-center mb-1">
                                <p className="font-semibold text-white text-sm">Bet #{bet._id}</p>

                                <p className="text-yellow-400 text-xs">{bet.status}</p>
                            </div>
                            <p className="font-semibold text-white text-sm">
                                {formatGreekTime(bet.created_at)}
                            </p>
                            <p className="text-emerald-300 text-sm">Stake: €{bet.stake}</p>


                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${isSelected ? "max-h-96 mt-2" : "max-h-0"
                                    }`}
                            >
                                <p className="font-medium text-sm text-white">Selections:</p>
                                <ul className="mt-1 space-y-1 text-sm">
                                    {bet.selections.map((sel, i) => (
                                        <li key={i} className="bg-gray-700 p-2 rounded">
                                            <div className="flex justify-between">
                                                <span className="text-white">
                                                    {sel.selectedEvent.hometeam} - {sel.selectedEvent.awayteam}
                                                </span>
                                            </div>
                                            <div className="mt-1">
                                                <span className="text-white">{sel.selectedMarket.value}</span>
                                                <span className="text-gray-400"> @ </span>
                                                <span className="text-emerald-300 font-medium">{sel.selectedMarket.odds}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
