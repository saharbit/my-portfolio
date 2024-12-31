import Sahar from "./assets/sahar.jpg";
import Check from "./assets/check.png";

function App() {
  return (
    <div className="pt-5">
      <div className="flex flex-col items-center">
        <img
          src={Sahar}
          alt="profile-picture"
          className="mb-2 rounded-full shadow-lg w-[164px] themed-border"
        />

        <div className="flex items-center mb-4 gap-1">
          <h1 className="font-bold text-2xl">Sahar Biton</h1>
          <img src={Check} alt="check" className="size-5" />
        </div>

        <div>@saharbit • Software Engineer • Tel Aviv</div>

        <div>
          <Link href="https://www.linkedin.com/in/saharbit/" target="_blank">
            LinkedIn
          </Link>{" "}
          •{" "}
          <Link href="https://github.com/saharbit" target="_blank">
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;

function Link({ children, ...props }) {
  return (
    <a {...props} className="font-semibold text-blue-500 hover:underline">
      {children}
    </a>
  );
}
