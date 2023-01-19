export const getGlobalSytels = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                  // palette values for light mode
                  primary: {
                      main: "#0F4C75",
                  },
                  secondary: {
                      main: "#D6E4F0",
                  },
                  background: {
                      default: "#1E56A0",
                      paper: "#D9FAFF",
                  },
              }
            : {
                  // palette values for dark mode
                  primary: {
                      main: "#fff",
                  },
                  secondary: {
                      main: "#3A4750",
                  },

                  background: {
                      default: "#1B262C",
                      paper: "#1B262C",
                  },
                  success: {
                      main: "#17B978",
                  },
                  error: {
                      main: "#E52B50",
                  },
              }),
    },
});
