import React from "react";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import { AppNavBar } from "./NavBar/AppNavBar";

import "./AppLayout.css";

const drawerWidth = 200;

export const AppLayout = () => {
    return (
        <Container sx={{ display: "flex" }}>
            <AppNavBar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    marginTop: "100px",
                }}
            >
                <Outlet />
            </Box>
        </Container>
    );
};
