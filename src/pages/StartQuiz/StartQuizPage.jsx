import { Container } from "@mui/material";
import React, { useState } from "react";

import { Quiz } from "./components/Quiz";
import { ConfigureQuiz } from "./components/ConfigureQuiz";

import { getQuestions } from "utils/api";
import { convertApiData } from "utils/apiConvert";
import { LoadingSpinner } from "./components/LoadingSpinner";

export const StartQuizPage = () => {
    const [isQuiz, setIsQuiz] = useState(false);
    const [questionsList, setQuestionsList] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchQuizData = async (questionsNumber, categoryId, difficulty) => {
        setLoading(true);
        try {
            const response = await getQuestions(
                questionsNumber,
                difficulty,
                categoryId === null ? 9 : categoryId
            );
            const data = convertApiData(response.data.results);
            setQuestionsList(data);
            setIsQuiz(true);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const onClickStart = (questionsNumber, categoryId, difficulty) => {
        fetchQuizData(questionsNumber, categoryId, difficulty);
    };

    return (
        <Container>
            {loading ? (
                <LoadingSpinner />
            ) : isQuiz ? (
                <Quiz questions={questionsList} />
            ) : (
                <ConfigureQuiz onClickStart={onClickStart} />
            )}
        </Container>
    );
};
