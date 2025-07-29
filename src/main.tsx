import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { Provider } from "./context/Provider.tsx";
import "./index.css";
import "@mantine/core/styles.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <Provider>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </MantineProvider>
);
