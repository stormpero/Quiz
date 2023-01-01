import React from 'react';
import "./Questions.css"
import {Answer} from "../Result/Answer";

export const Question = ({title, variants, onClickVariant}) => {
    return (
        <div className="question">
            <h2>{title}</h2>
            <ul>
                {
                    variants && variants.map((q, index) =>
                        <Answer key={q} onClick={() => onClickVariant(index)} variant={q}/>)
                }
            </ul>
        </div>
    );
};
