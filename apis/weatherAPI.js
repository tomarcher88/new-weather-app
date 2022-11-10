import axios from "axios";

const TOKEN = "3b5a9a82c7fc09b7e409ea2c2157ac2c";

export default axios.create({
  baseURL: "https://api.openweathermap.org",
  params: {
    appid: TOKEN,
  },
});

/* 
Weather URL - /data/2.5/weather
 Params - lat: 51.58813624309665, lon: -0.043261952717803975, units: 'metric', 
 */

/*
Geo URL - /geo/1.0/direct
Params - q: 'London', limit: 5, 
*/