export function ForecastDayTile(props) {
  const { date, feels, temp, desc, icon, loading } = props;

  const dayName = new Date(date).toLocaleString("en-us", {
    weekday: "long",
  });
  const today = new Date().toLocaleString("en-gb", {
    weekday: "long",
  });
  const dayDisplay = dayName === today ? "Today" : dayName;

  return loading ? (
    <div className=" bg-zinc-600/75 p-4 rounded drop-shadow-lg my-4 md:my-10 md:mx-4 flex w-full justify-around md:flex-col md:w-auto">
      <div className="animate-pulse">
        <p className="w-24 bg-slate-200/25 h-2 rounded m-2"></p>
        <p className="w-24 bg-slate-200/25 h-2 rounded m-2"></p>
        <p className="w-24 bg-slate-200/25 h-2 rounded m-2"></p>
      </div>
      <div className="animate-pulse flex flex-col items-center">
        <p className="w-8 bg-slate-200/25 h-8 rounded-full"></p>
        <p className="w-24 bg-slate-200/25 h-2 rounded m-2"></p>
      </div>
    </div>
  ) : (
    <aside className="bg-zinc-100/75 p-4 rounded drop-shadow-lg my-4 md:my-10 lg:mx-4 flex w-full md:min-w-[150px] justify-around md:flex-col md:w-auto">
      <div>
        <h3>{dayDisplay}</h3>
        <h6>Feels like {Math.round(feels)}°</h6>
        <p>Temp: {Math.round(temp)}°</p>
      </div>
      <div className="flex flex-col items-center">
        <p>
          <i className={`text-4xl md:text-6xl wi wi-owm-${icon} py-2`}></i>
        </p>
        <p>{desc}</p>
      </div>
    </aside>
  );
}
