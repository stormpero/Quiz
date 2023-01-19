import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { SettingsContext } from "./SettingsContext";
import { getGlobalSytels } from "./globalStyles";
import { settings } from "storage";

export const MyThemeProvider = ({ children }) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const [mode, setMode] = useState("system");
    const [lang, setLang] = useState("RU");

    useEffect(() => {
        const { mode } = settings.getSettings();
        if (mode !== undefined) {
            setMode(mode);
        }
    }, []);

    const setupSettings = useMemo(
        () => ({
            toggleColorMode: (mode) => {
                setMode(mode);
                settings.setSettings({ mode });
            },
            toggleLangMode: (lang) => {
                setMode(lang);
            },
            mode: mode,
        }),
        [mode]
    );

    const theme = React.useMemo(
        () =>
            createTheme(
                getGlobalSytels(
                    mode === "system"
                        ? prefersDarkMode
                            ? "dark"
                            : "light"
                        : mode
                )
            ),
        [mode, prefersDarkMode]
    );

    return (
        <SettingsContext.Provider value={setupSettings}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </SettingsContext.Provider>
    );
};

MyThemeProvider.propTypes = {
    children: PropTypes.any,
};
