import React from "react";
import { Box, Container, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

import { AppNavBar } from "./AppNavBar";

export const AppLayout = () => {
    const theme = useTheme();

    return (
        <Container
            sx={{ display: "flex", justifyContent: "center", width: "750px" }}
        >
            <Container>
                <AppNavBar />
                <Box
                    sx={{
                        mt: "20px",
                        backgroundColor: theme.palette.secondary.main,
                        borderRadius: "30px",
                        padding: "40px",
                    }}
                >
                    <Outlet />
                </Box>
            </Container>
        </Container>
    );
};
