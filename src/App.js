import "./App.scss";
import Sahar from "./assets/sahar_cropped.jpg";
import Link from "./Link";
import Check from "./assets/check.png";
import Links from "./Links";

function App() {
  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="flex flex-col">
        <img
          src={Sahar}
          alt="sahar"
          className="profile-picture mb-2 rounded-full shadow-xl"
        />
        <div className="font-bold header flex items-center">
          Sahar Biton
          <img src={Check} alt="check" className="w-5 h-5 ml-1" />
        </div>
        <div>@saharbit • Software Engineer • Tel Aviv</div>
        <Links />
        <div className="mt-2 mb-8">
          Currently hacking at{" "}
          <Link href="https://www.getaivalue.com/" target="_blank">
            GetAI
          </Link>
        </div>
        <div className="font-semibold">Public Work</div>
        <div className="text-sm">
          •{" "}
          <Link href="https://highlights-feed.vercel.app/" target="_blank">
            Highlights Feed
          </Link>
          <br />•{" "}
          <Link href="https://arc-avatar.vercel.app/" target="_blank">
            Arc Avatar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
