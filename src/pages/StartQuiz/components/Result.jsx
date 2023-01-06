import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import {
    Box,
    List,
    ListItem, ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { formatTime } from "utils/apiConvert";

export const Result = ({ quizInfo }) => {
    const { correctCount, duration, questions } = quizInfo;
    console.log(questions);
    const percent = Math.floor((correctCount * 100) / questions.length);

    return (
        <>
            <Box
                sx={{
                    textAlign: "center",
                }}
            >
                <Typography variant="h3" component="h3">
                    Результат
                </Typography>
                <Typography
                    variant="h1"
                    component="p"
                    sx={{
                        fontWeight: "400",
                    }}
                >
                    {correctCount} / {questions.length}
                </Typography>
                <Typography variant="h5" component="p">
                    {percent}% из 100%
                </Typography>
                <Typography variant="h4" component="p">
                    Время прохождения
                </Typography>
                <Typography variant="h5" component="p">
                    {formatTime(duration)}
                </Typography>
            </Box>
            {questions.map((question, index) => (
                <Box
                    key={question.title}
                    sx={{
                        marginTop: "10px",
                        padding: "15px",
                        borderLeft: `3px solid ${
                            question.isCorrect ? "green" : "red"
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
                                                color: "green",
                                            }}
                                        />
                                    )}
                                    {!question.isCorrect &&
                                        question.chosenVariant === index && (
                                            <DangerousOutlinedIcon
                                                sx={{
                                                    color: "red",
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

Result.propTypes = {
    quizInfo: PropTypes.object.isRequired,
};
