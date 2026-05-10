import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { UserProvider } from "./contexts/UserContext.jsx";
import App from "./App.jsx";
import store from "./store.js";
import "./styles.css";
const root = createRoot(
  document.getElementById("root"),
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
