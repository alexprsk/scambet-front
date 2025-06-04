// src/hooks/useOpenBets.js
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useOpenBets = () => {
  const [openBets, setOpenBets] = useState([]);
  const authenticated = useSelector((state) => state.auth.authenticated);

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData?.access_token;
    

    if (!authenticated || !token) return;

    const fetchOpenBets = async () => {
      try {
        const response = await fetch('https://scambet.org/sportsbook/open_bets', {
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
        
        setOpenBets(data);
      } catch (error) {
        console.error("Error fetching open bets:", error);
      }
    };

    fetchOpenBets();
  }, [authenticated]);

  return openBets;
};
