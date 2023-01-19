import { useContext, createContext } from "react";

export const SettingsContext = createContext({
    toggleColorMode: (param) => {},
    toggleLangMode: () => {},
    mode: null,
});

export const useSettings = () => {
    return useContext(SettingsContext);
};
