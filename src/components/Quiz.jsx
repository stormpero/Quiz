import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Question } from "./Question";
import { Result } from "./Result";
import { ProgressBar } from "./ProgressBar";
import { Box, LinearProgress } from "@mui/material";
import { linearProgressClasses } from "@mui/material/LinearProgress";

export const Quiz = ({ questions = [] }) => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [isEnd, setIsEnd] = useState(false);

    const currQuestion = questions[step];
    const percentage = Math.round((step / questions.length) * 100);

    const onClickVariant = (index) => {
        if (step + 1 === questions.length) {
            setIsEnd(true);
        }
        setAnswers((prevState) => [...prevState, index]);
        setStep((prevState) => prevState + 1);
    };

    return (
        <>
            {isEnd ? (
                <Result questions={questions} answers={answers} />
            ) : (
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: 800,
                        backgroundColor: "#fff",
                        borderRadius: "30px",
                        padding: "40px",
                    }}
                >
                    <LinearProgress
                        variant="determinate"
                        value={percentage}
                        sx={{
                            height: 10,
                            borderRadius: 5,
                            [`& .${linearProgressClasses.bar}`]: {
                                borderRadius: 5,
                                backgroundColor: "#1a90ff"
                            },
                        }}
                    />
                    <Question
                        title={currQuestion?.question}
                        variants={currQuestion?.incorrect_answers}
                        onClickVariant={onClickVariant}
                    />
                </Box>
            )}
        </>
    );
};

Quiz.propTypes = {
    questions: PropTypes.array.isRequired,
};
