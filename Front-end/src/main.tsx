import React from "react";
import ReactDOM from "react-dom/client"; // React 18+ necesita importarlo de esta manera
import App from "./App";
import './index.css';  

// Asegúrate de que el tipo sea HTMLElement
const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento con id 'root'");
}
