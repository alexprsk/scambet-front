import { useState, useEffect } from 'react';

export const useFetchEvents = () => {
  const [events, setEvents] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8001/api/games');
        const json = await res.json();

        // ✅ No need to re-map — just extract the events object
        setEvents(json.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData(); // Initial fetch
    const intervalId = setInterval(fetchData, 8000); // Poll every 8 seconds

    return () => clearInterval(intervalId);
  }, []);

  return events;
};
