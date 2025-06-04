// src/hooks/useFetchMarkets.js
import { useState, useEffect } from 'react';

export const useFetchMarkets = () => {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/sportsbook/odds');
        const json = await res.json();

        const transformed = (json.events[0] || [])
          .filter(event => event.bookmakers?.length > 0 && event.bookmakers[0].markets?.length > 0)
          .map(event => {
            const outcomes = event.bookmakers[0].markets[0].outcomes || [];

            return {
              id: event.id,
              sport: event.sport_key,
              hometeam: event.home_team,
              awayteam: event.away_team,
              odds: outcomes.map(odd => ({ name: odd.name, price: odd.price })),
              startTime: new Date(event.commence_time).toLocaleString(),
            };
          });

        setMarkets(transformed);
      } catch (error) {
        console.error('Error fetching odds:', error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 8000);
    return () => clearInterval(intervalId);
  }, []);

  return markets;
};
