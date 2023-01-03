import React from "react";
import PropTypes from "prop-types";

export const ProgressBar = ({ percentage }) => {
    return (
        <div className="progress-bar">
            <div
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired,
};
