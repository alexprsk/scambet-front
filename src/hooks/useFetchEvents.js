import { useState, useEffect } from 'react';

export const useFetchEvents = () => {
  const [events, setEvents] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/sportsbook/events');
        const json = await res.json();


        setEvents(json.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 8000); 

    return () => clearInterval(intervalId);
  }, []);

  return events;
};
