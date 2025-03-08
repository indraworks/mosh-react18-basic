import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//adding bpptstrap di main ts cara
import "bootstrap/dist/css/bootstrap.css";
//utk cari tahu tentang component dibotstrap dan ammbil ke http://getbootstrap.com

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
