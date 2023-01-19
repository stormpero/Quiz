import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { quizzes } from "storage";
import {
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ResultQuestions } from "pages/StartQuiz/components/Result/ResultQuestions";
import { formatDate, formatTime } from "utils/apiConvert";
import { Stack } from "@mui/system";
import { LoadingSpinner } from "pages/StartQuiz/components/LoadingSpinner";

export const HistoryPage = () => {
    const [quizzesList, setQuizzesList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [expanded, setExpanded] = useState("");

    useEffect(() => {
        setIsLoading(true);
        const quizzesStorage = quizzes.getQuizzes().reverse();
        setQuizzesList(quizzesStorage);
        setIsLoading(false);
    }, []);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                quizzesList.map((quiz, index) => (
                    <Accordion
                        key={quiz.id}
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}bh-content`}
                            id={`panel${index}bh-header`}
                        >
                            <Typography
                                variant="h6"
                                sx={{ width: "100%" }}
                                gutterBottom
                            >
                                00{index + 1} Quiz
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    {quiz.questions[0].difficulty} |{" "}
                                    {quiz.questions[0].category}
                                </Typography>
                            </Typography>

                            <Stack
                                direction={"row"}
                                gap={2}
                                sx={{
                                    width: "65%",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    mr: "10px",
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    {formatTime(quiz.duration)}
                                </Typography>
                                <Typography sx={{ color: "text.secondary" }}>
                                    {formatDate(quiz.timestampStart)}
                                </Typography>

                                <Typography
                                    variant="h6"
                                    sx={{ color: "text.primary" }}
                                >
                                    {quiz.correctCount} /{" "}
                                    {quiz.questions.length}
                                </Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ResultQuestions questions={quiz.questions} />
                        </AccordionDetails>
                    </Accordion>
                ))
            )}
        </>
    );
};

HistoryPage.propTypes = {};
