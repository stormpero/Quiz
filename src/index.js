import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { AppNavBar } from "./app/AppNavBar";
import { App } from "app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <CssBaseline />
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
