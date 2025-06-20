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

        if (!response.ok) {
            throw new Error("Failed to place bet");
        }

        const resData = await response.json();
        console.log(resData)
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

