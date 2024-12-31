import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.scss";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<App />);
