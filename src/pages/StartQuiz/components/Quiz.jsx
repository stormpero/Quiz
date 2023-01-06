import PropTypes from "prop-types";
import React, { useState } from "react";

import { Box, LinearProgress } from "@mui/material";
import { linearProgressClasses } from "@mui/material/LinearProgress";
import { Question } from "./Question";
import { Result } from "./Result";
import { useRef } from "react";
import { getDuration } from "utils/apiConvert";

export const Quiz = ({ questions = [] }) => {
    console.log("Рендерюсь");
    const [step, setStep] = useState(0);
    const [questionsAnswers, setQuestionsAnswers] = useState([]);
    const [isEnd, setIsEnd] = useState(false);

    const quizInfo = useRef({
        timestampStart: new Date(),
        timestampEnd: null,
        duration: null,
        correctCount: null,
        questions: [],
    });

    const currQuestion = questions[step];
    const percentage = Math.round((step / questions.length) * 100);

    const onClickVariant = (index) => {
        if (step + 1 === questions.length) {
            quizInfo.current.timestampEnd = new Date();
            quizInfo.current.duration = getDuration(
                quizInfo.current.timestampStart,
                quizInfo.current.timestampEnd
            );
            quizInfo.current.questions = [
                ...questionsAnswers,
                {
                    ...questions[step],
                    chosenVariant: index,
                    isCorrect: questions[step]?.correctVariant === index,
                },
            ];
            quizInfo.current.correctCount = quizInfo.current.questions.reduce(
                (prev, value) => (value.isCorrect ? prev + 1 : prev),
                0
            );

            setIsEnd(true);
        }
        setQuestionsAnswers((prevState) => [
            ...prevState,
            {
                ...questions[step],
                chosenVariant: index,
                isCorrect: questions[step]?.correctVariant === index,
            },
        ]);
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
