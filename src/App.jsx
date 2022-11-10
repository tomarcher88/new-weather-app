import "./css/weather-icons.min.css"
import "./App.css";
import { ContextProvider } from "./context/context";
import Search from "./components/Search";
import Location from "./components/Location";
import HeadlineInfo from "./components/HeadlineInfo";
import Forecast from "./components/Forecast";

export default function App() {
  return (
    <ContextProvider>
      <div className="bg-green-field bg-cover bg-top min-h-screen font-josefin">
        <main className="App flex flex-col content-between min-h-screen">
          <Search />   
          <HeadlineInfo />  
          <Forecast />     
        </main>
        {/* <footer>
        Photo by{" "}
        <a href="https://unsplash.com/@claudiotesta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Claudio Testa
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Unsplash
        </a>
      </footer> */}
      </div>
    </ContextProvider>
  );
}
