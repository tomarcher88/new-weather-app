import { ForecastDayTile } from "./ForecastDayTile";
import { Context } from "../context/context";
import { useContext } from "react";

export default function Forecast() {
  const { forecastData, loading } = useContext(Context);
  const loadingArray = [0,1,2,3,4]

  return (
    <article className="w-full bg-slate-100/50">
      <div className="flex flex-col md:flex-row w-4/5 mx-auto md:w-full lg:w-3/5 justify-evenly items-center py-4">
        { !loading ? (
          forecastData.list.map((item) =>
          item.dt_txt.includes("12:00") ? (
            <ForecastDayTile
              date={item.dt_txt}
              feels={item.main.feels_like}
              temp={item.main.temp}
              desc={item.weather[0].description}
              icon={item.weather[0].id}
              loading={loading}
              key={item.dt_txt}
            />
          ) : null
        )
        ) : loadingArray.map(item => <ForecastDayTile key={item} loading={loading}/>)
        }
      </div>
    </article>
  );
}
