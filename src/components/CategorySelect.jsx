import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Autocomplete, TextField, CircularProgress } from "@mui/material";
import { getCategoryList } from "api";
import { converApiCategories } from "utils/apiConvert";

export const CategorySelect = ({ setCategoryId }) => {
    const [category, setCategory] = useState(null);
    const [categoriesList, setCategoriesList] = useState([]);
    const [openCategorySelect, setOpenCategorySelect] = useState(false);
    const loading = openCategorySelect && categoriesList.length === 0;

    const onChangeCategorySelect = (event, newValue) => {
        if (newValue) {
            setCategory(newValue);
            setCategoryId(newValue.id);
        }
    };

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }
        if (active) {
            getCategoryList()
                .then((response) =>
                    converApiCategories(response.data?.trivia_categories)
                )
                .then((data) => {
                    console.log(data);
                    setCategoriesList(data);
                });
        }

        return () => {
            active = false;
        };
    }, [loading]);

    return (
        <Autocomplete
            id="asynchronous-demo"
            value={category}
            onChange={onChangeCategorySelect}
            sx={{ width: 300 }}
            open={openCategorySelect}
            onOpen={() => {
                setOpenCategorySelect(true);
            }}
            onClose={() => {
                setOpenCategorySelect(false);
            }}
            isOptionEqualToValue={(option, value) =>
                option.title === value.title
            }
            groupBy={(option) => option.group}
            getOptionLabel={(option) => option.title}
            options={categoriesList}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Category"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? (
                                    <CircularProgress
                                        color="inherit"
                                        size={20}
                                    />
                                ) : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );
};

CategorySelect.propTypes = {
    setCategoryId: PropTypes.func,
};
