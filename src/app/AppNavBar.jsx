import HistoryIcon from "@mui/icons-material/History";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import QuizIcon from "@mui/icons-material/Quiz";
import { Container, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const menu_first = [
    {
        text: "History",
        icon: <HistoryIcon />,
        url: "/history",
        id: 0,
    },
    {
        text: "Start Quiz",
        icon: <QuizIcon />,
        url: "/",
        id: 1,
    },
    {
        text: "Settings",
        icon: <TuneRoundedIcon />,
        url: "/settings",
        id: 2,
    },
];

export const AppNavBar = () => {
    const location = useLocation();
    const [value, setValue] = useState(
        menu_first.find((el) => el.url === location.pathname).id
    );

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container
            sx={{
                borderRadius: "0px 0px 30px 30px",
                background: "white",
            }}
        >
            <Tabs
                centered
                value={value}
                onChange={handleChange}
                aria-label="Quiz Vertical tabs"
                sx={{
                    ["& .MuiTabs-indicator"]: {
                        height: "3px",
                        mb: "1px",
                        borderRadius: "30px",
                    },
                }}
            >
                {menu_first.map((item, index) => (
                    <Tab
                        id={`nav-tab-${index}`}
                        key={item.text}
                        label={item.text}
                        component={RouterLink}
                        to={item.url}
                        icon={item.icon}
                    />
                ))}
            </Tabs>
        </Container>
    );
};
