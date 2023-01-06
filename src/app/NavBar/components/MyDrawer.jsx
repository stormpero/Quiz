import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import QuizIcon from "@mui/icons-material/Quiz";
import HistoryIcon from "@mui/icons-material/History";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PeopleIcon from "@mui/icons-material/People";
import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";

const menu_first = [
    {
        text: "Start Quiz",
        icon: <QuizIcon />,
    },
    {
        text: "My Quizzes",
        icon: <ListAltIcon />,
    },
    {
        text: "History",
        icon: <HistoryIcon />,
    },
];

const menu_second = [
    {
        text: "People",
        icon: <PeopleIcon />,
    },
];

export const MyDrawer = () => {
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
            <List>
                {menu_first.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            {menu_second.map((item) => (
                <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </>
    );
};

MyDrawer.propTypes = {};
