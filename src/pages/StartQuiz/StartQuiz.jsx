import React, { useState } from "react";
import { Box, CircularProgress } from "@mui/material";

import { Quiz } from "./components/Quiz";
import { Start } from "./components/Start";

import { getQuestions } from "utils/api";
import { convertApiData } from "utils/apiConvert";

export const StartQuiz = () => {
    const [isQuiz, setIsQuiz] = useState(false);
    const [questionsList, setQuestionsList] = useState([]);
    const [loading, setLoading] = useState(false);

    const onClickStart = (questionsNumber, categoryId, difficulty) => {
        setLoading(true);

        getQuestions(
            questionsNumber,
            difficulty,
            categoryId === null ? 9 : categoryId
        )
            .then((response) => convertApiData(response.data.results))
            .then((data) => setQuestionsList(data))
            .then(() => setIsQuiz(true))
            .catch(console.error)
            .finally(() => setLoading(false));
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "#fff",
                    borderRadius: "30px",
                    padding: "40px",
                    maxWidth: 800,
                    width: "100%",
                }}
            >
                {!loading ? (
                    isQuiz ? (
                        <Quiz questions={questionsList} />
                    ) : (
                        <Start onClickStart={onClickStart} />
                    )
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                        }}
                    >
                        <CircularProgress />
                    </Box>
                )}
            </Box>
        </Box>
    );
};
