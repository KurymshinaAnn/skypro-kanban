import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import { UserProvider } from "./contexts/user.jsx";
import { TasksProvider } from "./contexts/tasks.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TasksProvider>
        <App />
        </TasksProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
