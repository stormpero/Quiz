import React from 'react';
import "./ProgressBar.css";

export const ProgressBar = ({percentage}) => {
    return (
        <div className="progress-bar">
            <div style={{width: `${percentage}%`}} className="progress-bar-inner"></div>
        </div>
    );
};
