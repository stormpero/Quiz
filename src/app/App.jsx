import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { MyThemeProvider } from "./MyThemeProvider/MyThemeProvider";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
    return (
        <BrowserRouter>
            <MyThemeProvider>
                <CssBaseline />
                <AppRoutes />
            </MyThemeProvider>
        </BrowserRouter>
    );
};
