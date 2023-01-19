import React from "react";
import PropTypes from "prop-types";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useTheme,
} from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";

export const ResultQuestions = ({ questions }) => {
    const theme = useTheme();
    return (
        <>
            {questions.map((question, index) => (
                <Box
                    key={question.title}
                    sx={{
                        marginTop: "10px",
                        padding: "15px",
                        borderLeft: `3px solid ${
                            question.isCorrect
                                ? theme.palette.success.main
                                : theme.palette.error.main
                        }`,
                    }}
                >
                    <Typography variant="h5" component="h5">
                        {index + 1}. {question.title}
                    </Typography>
                    <List>
                        {question.variants.map((variantText, index) => (
                            <ListItem key={variantText} disablePadding>
                                <ListItemIcon
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    {question.correctVariant === index && (
                                        <CheckCircleOutlinedIcon
                                            sx={{
                                                color: theme.palette.success
                                                    .main,
                                            }}
                                        />
                                    )}
                                    {!question.isCorrect &&
                                        question.chosenVariant === index && (
                                            <DangerousOutlinedIcon
                                                sx={{
                                                    color: theme.palette.error
                                                        .main,
                                                }}
                                            />
                                        )}
                                </ListItemIcon>
                                <ListItemText primary={variantText} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            ))}
        </>
    );
};

ResultQuestions.propTypes = {
    questions: PropTypes.array.isRequired,
};
