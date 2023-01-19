import React from "react";
import PropTypes from "prop-types";
import { ResultInfo } from "./ResultInfo";
import { ResultQuestions } from "./ResultQuestions";

export const Result = ({ quizInfo }) => {
    return (
        <>
            <ResultInfo quizInfo={quizInfo} />
            <ResultQuestions questions={quizInfo.questions} />
        </>
    );
};

Result.propTypes = {
    quizInfo: PropTypes.object.isRequired,
};
