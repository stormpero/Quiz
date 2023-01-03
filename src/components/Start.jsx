import React, { memo, useState } from "react";
import PropTypes from "prop-types";

import { Box, Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { CategorySelect } from "./CategorySelect";

const quiz_difficulty = [
    {
        value: "easy",
        label: "Easy",
    },
    {
        value: "medium",
        label: "Medium",
    },
    {
        value: "hard",
        label: "Hard",
    },
];

// eslint-disable-next-line react/display-name
export const Start = memo(({ onClickStart }) => {
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
        <Box
            sx={{
                marginTop: "20px",
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "20px",
            }}
        >
            <Stack direction="row" spacing={2}>
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
                    {quiz_difficulty.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
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
                }}
                variant="contained"
                onClick={handleOnClickBtn}
            >
                Начать игру
            </Button>
        </Box>
    );
});

Start.propTypes = {
    onClickStart: PropTypes.func,
};
function onClickStart(questionsNumber, categoryId, difficulty) {
    throw new Error("Function not implemented.");
}
