import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => <h1>Hello React</h1>;

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);