import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { quizzes } from "storage";

export const HistoryPage = () => {
    const [quizzesList, setQuizzesList] = useState([]);

    useEffect(() => {
        const quizzesStorage = quizzes.getQuizzes();
        setQuizzesList(quizzesStorage);
    }, []);

    return (
        <div>
            History
            {quizzesList.map((el) => (
                <p key={el.timestampStart}>{el.duration}</p>
            ))}
        </div>
    );
};

HistoryPage.propTypes = {};
