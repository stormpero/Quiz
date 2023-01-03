import React from "react";
import PropTypes from "prop-types";
import { Variant } from "./Variant";
import {
    Box,
    List,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";

export const Question = ({ title, variants = [], onClickVariant }) => {
    console.log(title);
    return (
        <Box
            sx={{
                marginTop: "20px",
            }}
        >
            <Typography variant="h5" component="h5">
                {title}
            </Typography>
            <List>
                {variants.map((q, index) => (
                    <ListItemButton
                        key={q}
                        onClick={() => onClickVariant(index)}
                        variant={q}
                    >
                        <ListItemText primary={q} />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
};

Question.propTypes = {
    title: PropTypes.string.isRequired,
    variants: PropTypes.array.isRequired,
    onClickVariant: PropTypes.func.isRequired,
};
