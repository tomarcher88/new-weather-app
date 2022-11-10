import axios from "axios";
import { createContext, useState, useEffect } from "react";
import weatherAPI from "../../apis/weatherAPI";

export const Context = createContext();

export const ContextProvider = (props) => {
  // State
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [locationData, setLocationData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch functions
  const fetchLocation = async (query = "London", limit = 5) => {
    try {
      const response = await weatherAPI.get("/geo/1.0/direct", {
        params: {
          q: query,
          limit: limit,
        },
      });
      console.log(response.data);
      setLocationData(response.data);
    } catch (error) {}
  };

  const fetchWeather = async (
    lat = 51.501142,
    lon = -0.126241,
    unit = "metric"
  ) => {
    try {
      const weatherResponse = await weatherAPI.get("/data/2.5/weather", {
        params: {
          lat: lat,
          lon: lon,
          units: unit,
        },
      })
      
      const forecastResponse = await weatherAPI.get("/data/2.5/forecast", {
        params: {
          lat: lat,
          lon: lon,
          units: unit,
        },
      });
      console.log('Response One', weatherResponse.data);
      console.log('Response Two', forecastResponse.data);
      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data)
      setLoading(false);
    } catch (err) {}
  };

  // Use Effects
  useEffect(() => {}, []);

  useEffect(() => {}, []);

  // Return
  return (
    <Context.Provider
      value={{
        weatherData,
        setWeatherData,
        locationData,
        setLocationData,
        loading,
        setLoading,
        fetchLocation,
        fetchWeather,
        forecastData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
