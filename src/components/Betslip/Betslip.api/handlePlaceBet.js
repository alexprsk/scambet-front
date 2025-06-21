import { HandleLogout } from "../../Auth/http";

export default async function handlePlaceBet(selections, stake, setIsPlaced, user_id) {
    if (!selections || selections.length === 0) {
        console.log("No selections made");
        return;
    }

    if (stake <= 0) {
        throw new Error("Bet amount needs to be higher")
    }

    if (user_id === "" || user_id == null || user_id == undefined) {
        alert("User must be logged in to place bets")
        throw new Error("User must be logged in to place bets")

    }

    try {
        const authData = JSON.parse(localStorage.getItem("auth"));
        const token = authData?.access_token;

        if (!token) {
        await HandleLogout();
        alert("Session expired. Please log in again.");
        throw new Error("No access token found");
    }

        const response = await fetch('/api/sportsbook/place_bet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                stake,
                selections,
                status: "PENDING"

            })
        });

        const data = await response.json()

        if (!response.ok) {
            if (data?.detail === "Could not validate user") {
                await HandleLogout(); 
                alert("Session expired. Please log in again.");
            }

            throw new Error(data?.detail || "Could not fetch balance");
        }

        
        console.log(data)
        console.log("Sent payload:", {
            userId: String(user_id),
            stake,
            selections

        });
        setIsPlaced(true)


    } catch (error) {
        setIsPlaced(false);
        console.log(error.message)

    }
}

