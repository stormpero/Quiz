import React, { useState } from "react";
import PropTypes from "prop-types";

import { Box, Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { CategorySelect } from "./CategorySelect";

export const ConfigureQuiz = ({ onClickStart }) => {
    const [categoryId, setCategoryId] = useState(null);
    const [difficulty, setDifficulty] = useState("easy");
    const [questionsNumber, setQuestionsNumber] = useState(5);

    const handleOnClickBtn = () => {
        onClickStart(questionsNumber, categoryId, difficulty);
    };

    const onChangeQuestionsNumber = (event) => {
        setQuestionsNumber(event.target.value);
    };

    const onChangeDifficulty = (event) => {
        setDifficulty(event.target.value);
    };

    return (
        <Box>
            <Stack spacing={2}>
                <TextField
                    select
                    label="Difficulty"
                    SelectProps={{
                        native: true,
                    }}
                    value={difficulty}
                    onChange={onChangeDifficulty}
                    variant="outlined"
                >
                    {["Easy", "Medium", "Hard"].map((option) => (
                        <option key={option} value={option.toLocaleLowerCase()}>
                            {option}
                        </option>
                    ))}
                </TextField>
                <CategorySelect setCategoryId={setCategoryId} />
                <TextField
                    select
                    label="Number of Questions"
                    variant="outlined"
                    SelectProps={{
                        native: true,
                    }}
                    value={questionsNumber}
                    onChange={onChangeQuestionsNumber}
                    sx={{
                        minWidth: "200px",
                    }}
                >
                    {[3, 5, 10].map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </TextField>
            </Stack>
            <Button
                sx={{
                    mt: "10px",
                    width: "100%",
                }}
                variant="contained"
                onClick={handleOnClickBtn}
            >
                Start Quiz
            </Button>
        </Box>
    );
};

ConfigureQuiz.propTypes = {
    onClickStart: PropTypes.func,
};
