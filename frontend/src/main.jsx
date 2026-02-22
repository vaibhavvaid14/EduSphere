import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./styles/global.css";
import { NoticeProvider } from "./context/NoticeContext";
import { EventProvider } from "./context/EventContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <NoticeProvider>
        <EventProvider>
          <App />
        </EventProvider>
      </NoticeProvider>
    </AuthProvider>
  </BrowserRouter>
);