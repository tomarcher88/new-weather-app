import { Context } from "../context/context";
import { useContext } from "react";


export default function Location() {
  const { weatherData, locationData } = useContext(Context);
  return (
    <div className="flex justify-center">
      <h6 className="">{weatherData.name}</h6>
    </div>
  );
}
