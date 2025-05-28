export default async function handlePlaceBet(selections, stake, setIsPlaced){
        if (!selections || selections.length === 0) {
            console.log("No selections made");
            return;
        }

        if (stake <= 0) {
            throw new Error("Bet amount needs to be higher")
        }

        try {
            const response = await fetch('http://localhost:8000/sportsbook/place_bet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: "1234",
                    stake,
                    selections
                    
                })
            });

            if (!response.ok) {
                throw new Error("Failed to place bet");
            }

            const resData = await response.json();
            console.log(resData)
            console.log("Sent payload:", {
                userId: "1234",
                stake,
                selections
                    
            });
            setIsPlaced(true)

        } catch (error) {
            setIsPlaced(false);
            setError(error.message);
            console.log(error.message)

        }
    }