import React from "react";
import PropTypes from "prop-types";

export const Variant = ({ variant, style, ...props }) => {
    return (
        <li {...props} className={style} key={variant}>
            {variant}
        </li>
    );
};

Variant.propTypes = {
    variant: PropTypes.string.isRequired,
    style: PropTypes.string
};
