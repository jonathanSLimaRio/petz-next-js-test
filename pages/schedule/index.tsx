import { useEffect, useState } from "react";
import { fetchPokemonLocations } from "../api/pokemon/api";
import {
  fetchAvailableDates,
  fetchAvailableTimes,
} from "../api/utils/api";

interface IRegion {
  name: string;
}
type DateType = string;
type TimeType = string;

export default function Home() {
  const [availableDates, setAvailableDates] = useState<DateType[]>([]);
  const [availableTimes, setAvailableTimes] = useState<TimeType[]>([]);
  const [regions, setRegions] = useState<IRegion[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const dates = await fetchAvailableDates();
        setAvailableDates(dates);

        const times = await fetchAvailableTimes(dates[0]);
        setAvailableTimes(times);

        const regionsData = await fetchPokemonLocations();
        setRegions(regionsData);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Scheduling</h1>
      <h2>Available Dates</h2>
      <ul>
        {availableDates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>

      <h2>Available Times</h2>
      <ul>
        {availableTimes.map((time, index) => (
          <li key={index}>{time}</li>
        ))}
      </ul>

      <h2>Pokémon Regions</h2>
      <ul>
        {regions.map((region) => (
          <li key={region.name}>{region.name}</li>
        ))}
      </ul>
    </div>
  );
}
