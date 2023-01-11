import ListAltIcon from "@mui/icons-material/ListAlt";
import PeopleIcon from "@mui/icons-material/People";
import HistoryIcon from "@mui/icons-material/History";
import QuizIcon from "@mui/icons-material/Quiz";
import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { Link as RouterLink } from "react-router-dom";

import { LinkTab } from "./LinkTab";

const menu_first = [
    {
        text: "Start Quiz",
        icon: <QuizIcon />,
        url: "/",
    },
    {
        text: "My Quizzes",
        icon: <ListAltIcon />,
        url: "myquizzes",
    },
    {
        text: "History",
        icon: <HistoryIcon />,
        url: "history",
    },
    {
        text: "People",
        icon: <PeopleIcon />,
        url: "/people",
    },
];

export const MyDrawer = () => {
    const [value, setValue] = useState(false);

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };

    return (
        <>
            <Typography
                variant="h1"
                component="h1"
                sx={{
                    color: "#fff",
                    backgroundColor: "#1976d2",
                    padding: "10px",
                    fontSize: "80px",
                    textAlign: "center",
                    fontWeight: "500",
                    boxShadow:
                        "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
                }}
            >
                Quiz
            </Typography>
            <Divider />
            <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
                variant="scrollable"
                aria-label="Quiz Vertical tabs"
                sx={{
                    borderRight: 1,
                    borderColor: "divider",
                    ["& .MuiTabs-indicator"]: {
                        width: "3px"
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
                        iconPosition="start"
                        sx={{
                            ml: "10px",
                            justifyContent: "flex-start",
                            ["& .MuiTab-iconWrapper"]: {
                                mr: "25px",
                            },
                        }}
                    />
                ))}
            </Tabs>
        </>
    );
};

MyDrawer.propTypes = {};
