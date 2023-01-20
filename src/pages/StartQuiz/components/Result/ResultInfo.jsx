import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { formatTime } from "utils/apiConvert";

export const ResultInfo = ({ quizInfo }) => {
    const { correctCount, duration, questions } = quizInfo;
    const percent = Math.floor((correctCount * 100) / questions.length);

    return (
        <Box
            sx={{
                textAlign: "center",
            }}
        >
            <Typography variant="h3" component="h3">
                Result
            </Typography>
            <Typography
                variant="h1"
                component="p"
                sx={{
                    fontWeight: "400",
                }}
            >
                {correctCount} / {questions.length}
            </Typography>
            <Typography variant="h5" component="p">
                {percent}% of 100%
            </Typography>
            <Typography variant="h4" component="p">
                Passage time
            </Typography>
            <Typography variant="h5" component="p">
                {formatTime(duration)}
            </Typography>
        </Box>
    );
};

ResultInfo.propTypes = {
    quizInfo: PropTypes.object.isRequired,
};
