import PropTypes from "prop-types";
import React, { useState } from "react";

import uniqid from "uniqid";

import { Box, LinearProgress } from "@mui/material";
import { linearProgressClasses } from "@mui/material/LinearProgress";
import { Question } from "./Question";
import { Result } from "./Result/Result";
import { useRef } from "react";
import { getDuration } from "utils/apiConvert";
import { quizzes } from "storage";

export const Quiz = ({ questions = [] }) => {
    const [step, setStep] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const currQuestion = questions[step];
    const percentage = Math.round((step / questions.length) * 100);

    const quizInfo = useRef({
        id: uniqid("quiz-"),
        timestampStart: new Date(),
        timestampEnd: null,
        duration: null,
        correctCount: null,
        questions: [],
    });

    const onClickVariant = (index) => {
        quizInfo.current.questions = [
            ...quizInfo.current.questions,
            {
                ...currQuestion,
                chosenVariant: index,
                isCorrect: currQuestion?.correctVariant === index,
            },
        ];
        if (step + 1 === questions.length) {
            quizInfo.current.timestampEnd = new Date();
            quizInfo.current.duration = getDuration(
                quizInfo.current.timestampStart,
                quizInfo.current.timestampEnd
            );
            quizInfo.current.correctCount = quizInfo.current.questions.filter(
                (q) => q.isCorrect
            ).length;
            quizzes.saveQuiz(quizInfo.current);
            setIsEnd(true);
        }

        setStep((prevState) => prevState + 1);
    };

    return (
        <>
            {isEnd ? (
                <Result quizInfo={quizInfo.current} />
            ) : (
                <Box>
                    <LinearProgress
                        variant="determinate"
                        value={percentage}
                        sx={{
                            height: 10,
                            borderRadius: 5,
                            [`& .${linearProgressClasses.bar}`]: {
                                borderRadius: 5,
                                backgroundColor: "#1a90ff",
                            },
                        }}
                    />
                    <Question
                        title={currQuestion?.title}
                        variants={currQuestion?.variants}
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
