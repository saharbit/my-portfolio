import Sahar from "./assets/sahar_cropped.jpg";
import Check from "./assets/check.png";
import { Links } from "./Links";

function App() {
  return (
    <div className="p-6 min-h-screen" style={{ background: "#FAF9F6" }}>
      <div className="flex flex-col items-center">
        <img
          src={Sahar}
          alt="sahar"
          className="mb-2 rounded-full shadow-lg w-[170px] border border-black"
        />
        <div className="flex items-center mb-4">
          <h1 className="font-bold text-2xl">Sahar Biton</h1>
          <img src={Check} alt="check" className="w-5 h-5 ml-1" />
        </div>
        <div>@saharbit • Software Engineer • Tel Aviv</div>
        <Links />
      </div>
    </div>
  );
}

export default App;
