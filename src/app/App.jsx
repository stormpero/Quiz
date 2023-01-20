import React from "react";
import { HashRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { MyThemeProvider } from "./MyThemeProvider/MyThemeProvider";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
    return (
        <HashRouter>
            <MyThemeProvider>
                <CssBaseline />
                <AppRoutes />
            </MyThemeProvider>
        </HashRouter>
    );
};
