import { useContext } from "react";
import { Context } from "../context/context";
import AsyncSelect from "react-select/async";
import weatherAPI from "../../apis/weatherAPI";

export default function Search() {
  const { fetchWeather, setLocationData } = useContext(Context);

  async function loadLocations(input, callback) {
    const fetchLocation = async (query = "London", limit = 5) => {
      try {
        const response = await weatherAPI.get("/geo/1.0/direct", {
          params: {
            q: query,
            limit: limit,
          },
        });
        return response.data;
      } catch (error) {}
    };
    const data = await fetchLocation(input);
    setLocationData(data);
    callback(
      data.map((i) => ({
        value: i.name,
        label: `${i.name}${i.state ? `, ${i.state}` : ""}, ${i.country}`,
        dataLat: i.lat,
        dataLon: i.lon,
      }))
    );
  }

  function handleClick(e) {
    console.log(e.dataLat)
    fetchWeather(e.dataLat, e.dataLon);
  }

  return (
    <header className="pt-8">
      <AsyncSelect
        cacheOptions
        loadOptions={loadLocations}
        onChange={(e) => handleClick(e)}
        placeholder={'Search for a location, eg. "London"'}
        className="w-4/5 md:w-2/5 mx-auto"
      />
    </header>
  );
}
