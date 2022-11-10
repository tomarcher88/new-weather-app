import { Context } from "../context/context";
import { useContext } from "react";

export default function HeadlineInfo() {
  const { weatherData, loading } = useContext(Context);

  return (
    <div className="flex justify-center grow">
      {loading ? (
        <article className="w-4/5 md:w-auto md:px-12 bg-zinc-100/75 py-4 rounded my-10 flex flex-row justify-evenly h-fit">
          <section className="animate-pulse text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500 flex flex-col justify-center">
            <h6 className="w-24 bg-slate-200/25 h-2 rounded m-2"></h6>
            <h1 className="w-24 bg-slate-200/25 h-2 rounded m-2"></h1>
            <p className="w-24 bg-slate-200/25 h-2 rounded m-2"></p>
          </section>
          <section className="animate-pulse flex text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500 flex-col items-center justify-center">
            <p className="w-8 bg-slate-200/25 h-8 rounded-full"></p>
            <p className="w-24 bg-slate-200/25 h-2 rounded m-2"></p>
          </section>
        </article>
      ) : (
        <article className="w-4/5 md:w-auto md:px-12 bg-zinc-100/75 py-4 rounded my-10 flex flex-row justify-evenly h-fit">
          <section className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500 flex flex-col justify-center">
            <h6>{weatherData.name}</h6>
            <h1 className="text-9xl">{Math.round(weatherData.main.temp)}°</h1>
            <p>Feels like {Math.round(weatherData.main.feels_like)}°</p>
          </section>
          <section className="flex text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500 flex-col items-center justify-center">
            <i
              className={`text-8xl wi wi-owm-${weatherData.weather[0].id} py-2`}
            ></i>
            <p>{weatherData.weather[0].main}</p>
          </section>
        </article>
      )}
    </div>
  );
}

{
  /* <div className="flex flex-col">
          <h6 className="text-center">{weatherData.name}</h6>
          <article className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-900">
            <h1 className="text-9xl">{Math.round(weatherData.main.temp)}°</h1>
          </article>
          <aside className="flex flex-col justify-center text-transparent bg-clip-text bg-gradient-to-b from-zinc-900">
            <i
              className={`text-8xl wi wi-owm-${weatherData.weather[0].id}`}
            ></i>
          </aside>
        </div> */
}
