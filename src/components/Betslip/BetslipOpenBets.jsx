
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';


export default function BetslipOpenBets({ selections }) {
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