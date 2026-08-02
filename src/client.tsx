import { hydrateRoot, createRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start/client";
import { getRouter } from "./router";

const router = getRouter();

if (document.getElementById("root")) {
  const rootEl = document.getElementById("root")!;
  createRoot(rootEl).render(<StartClient router={router} />);
} else {
  hydrateRoot(document, <StartClient router={router} />);
}
