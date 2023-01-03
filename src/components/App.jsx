import React, { useEffect, useState } from "react";
import { Start } from "./Start";
import { Quiz } from "./Quiz";

import { getCategoryList, getQuestions } from "../api";
import { convertApiData } from "../utils/apiConvert";
import { Container } from "@mui/material";

import "./App.css";
import { Navbar } from "./Navbar";

function App() {
    const [isQuiz, setIsQuiz] = useState(false);
    const [questionsList, setQuestionsList] = useState([]);

    const onClickStart = (questionsNumber, categoryId, difficulty) => {
        console.log(questionsNumber, categoryId, difficulty);

        getQuestions(
            questionsNumber,
            difficulty,
            categoryId === null ? 9 : categoryId
        )
            .then((response) => convertApiData(response.data.results))
            .then((data) => setQuestionsList(data))
            .then(() => setIsQuiz(true))
            .catch(console.error);
        //
    };

    return (
        <>
            <Navbar />
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                {isQuiz ? (
                    <Quiz questions={questionsList} />
                ) : (
                    <Start onClickStart={onClickStart} />
                )}
            </Container>
        </>
    );
}

export default App;
