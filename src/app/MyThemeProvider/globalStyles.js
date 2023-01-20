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
                      main: "#E0FCFF",
                  },
                  background: {
                      default: "#7098DA",
                      paper: "#6EB6FF",
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
