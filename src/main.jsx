import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "urql";
import App from "./App";
import "./index.css";
import { client } from "./services/urql";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);
