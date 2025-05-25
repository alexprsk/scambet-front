export async function PlaceBet(selections, stake) {
    const payload = {
        selections: selections,
        stake: parseFloat(stake)  // Ensure stake is a number
    };

    try {
        const response = await fetch('http://localhost:8000/sportsbook/place_bet', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || "Failed to place bet");
        }

        return await response.json();
    } catch (error) {
        console.error("Bet placement error:", error);
        throw error;
    }
}