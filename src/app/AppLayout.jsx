import React from "react";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import { AppNavBar } from "./AppNavBar";

import "./AppLayout.css";

export const AppLayout = () => {
    return (
        <Container
            sx={{ display: "flex", justifyContent: "center", width: "750px" }}
        >
            <Container>
                <AppNavBar />
                <Box
                    sx={{
                        mt: "20px",
                        backgroundColor: "#fff",
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
