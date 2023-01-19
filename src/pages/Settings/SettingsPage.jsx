import React, { useState } from "react";
import PropTypes from "prop-types";
import { ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";
import { useSettings } from "app/MyThemeProvider/SettingsContext";
import { useEffect } from "react";

import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Container } from "@mui/system";

export const SettingsPage = () => {
    const settings = useSettings();

    const [alignment, setAlignment] = useState(null);

    useEffect(() => {
        setAlignment(settings.mode);
    }, [settings.mode]);

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
            settings.toggleColorMode(newAlignment);
        }
    };

    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Typography
                variant="h6"
                color="textSecondary"
                sx={{
                    padding: "20px",
                }}
            >
                MODE
            </Typography>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value="light">
                    <LightModeIcon />
                    <Typography
                        variant="subtitle2"
                        sx={{ padding: "0px 18px 0px" }}
                    >
                        Light
                    </Typography>
                </ToggleButton>
                <ToggleButton value="system">
                    <SettingsBrightnessIcon />
                    <Typography
                        variant="subtitle2"
                        sx={{ padding: "0px 18px 0px" }}
                    >
                        System
                    </Typography>
                </ToggleButton>
                <ToggleButton value="dark">
                    <DarkModeOutlinedIcon />
                    <Typography
                        variant="subtitle2"
                        sx={{ padding: "0px 18px 0px" }}
                    >
                        Dark
                    </Typography>
                </ToggleButton>
            </ToggleButtonGroup>
        </Container>
    );
};

SettingsPage.propTypes = {};
