export default async function refreshBalance() {
    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData?.access_token;

    
    try {
        const response = await fetch("/api/funds/refresh_balance", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          credentials: 'include',
        });

        if (!response.ok){
            throw new Error("Could not fetch balance")
        }

        const balance = await response.json()
        console.log(balance)

        return balance;
        
    }catch (error){
     console.log(error)
     return null;
    }
}