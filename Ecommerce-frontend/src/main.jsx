import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Modalcontext from "./contexts/modalcontext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <BrowserRouter>
    <Modalcontext>
      <App />
    </Modalcontext>
  </BrowserRouter>
  </Provider>
);
