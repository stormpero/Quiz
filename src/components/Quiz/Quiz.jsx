import React, {useEffect, useState} from 'react';
import {Question} from "../Questions/Question";
import {Result} from "../Result/Result";
import {ProgressBar} from "../ProgressBar/ProgressBar";

import "./Quiz.css"

export const Quiz = ({questions}) => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [isEnd, setIsEnd] = useState(false);

    const currQuestion = questions[step];
    useEffect(() => {
        if (step === questions.length) {
            setIsEnd(true)
        }
    }, [questions.length, step])

    const onClickVariant = (index) => {
        setAnswers(prevState => [...prevState, index]);
        setStep(prevState => prevState + 1);
    }

    const percentage = Math.round((step / questions.length) * 100);

    return (
        <div>
            {isEnd ?
                <Result questions={questions} answers={answers}/>
                :
                <div className="quiz">
                    <div className="quiz-inner">
                        <ProgressBar percentage={percentage}/>
                        <Question title={currQuestion?.question} variants={currQuestion?.incorrect_answers}
                                  onClickVariant={onClickVariant}/>
                    </div>
                </div>
            }

        </div>
    );
}