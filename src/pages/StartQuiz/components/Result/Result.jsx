import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { formatTime } from "utils/apiConvert";
import { ResultInfo } from "./ResultInfo";
import { ResultQuestions } from "./ResultQuestions";

export const Result = ({ quizInfo }) => {
    return (
        <>
            <ResultInfo quizInfo={quizInfo} />
            <ResultQuestions questions={quizInfo.questions}/>
        </>
    );
};

Result.propTypes = {
    quizInfo: PropTypes.object.isRequired,
};
