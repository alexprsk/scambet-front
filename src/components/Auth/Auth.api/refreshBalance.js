import { HandleLogout } from "../http";

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

        const data = await response.json()

      if (!response.ok) {
          if (data?.detail === "Could not validate user") {
              await HandleLogout(); 
              alert("Session expired. Please log in again.");
          }

          throw new Error(data?.detail || "Could not fetch balance");
      }

        
        console.log(balance)

        return data.user_balance;
        
    }catch (error){
     console.log(error)
     return null;
    }
}