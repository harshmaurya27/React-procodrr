import { user } from "./data.js";
import { createRoot } from "react-dom/client";
const h1 = <h1>hello world</h1>;
const rootSelector = document.getElementById("root");
const root = createRoot(rootSelector);
root.render(h1);
