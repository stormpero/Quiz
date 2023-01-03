import React from "react";
import PropTypes from "prop-types";

import { Variant } from "./Variant";

export const Result = ({ questions, answers}) => {
    const countCorrect = questions.reduce(
        (prev, value, index) =>
            value.correct === answers[index] ? prev + 1 : prev,
        0
    );
    const percent = Math.floor((countCorrect * 100) / questions.length);
    return (
        <div className="result">
            <div className="result-inner">
                <div className="count">
                    <strong>Результат</strong>
                </div>
                <div className="img">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
                        alt="result"
                    />
                </div>
                <div className="count">
                    Верно {countCorrect} из {questions.length}
                </div>
                <div className="count">Верно {percent}% из 100%</div>
                {questions.map((question, qIndex) => (
                    <div
                        key={question.question}
                        className={`question ${
                            question.correct === answers[qIndex]
                                ? "correct"
                                : "incorrect"
                        }`}
                    >
                        <h2>
                            №{qIndex + 1} {question.question}
                        </h2>
                        <ul>
                            {question.correct === answers[qIndex]
                                ? question.incorrect_answers &&
                                  question.incorrect_answers.map(
                                      (q, vIndex) => (
                                          <Variant
                                              key={q}
                                              variant={q}
                                              style={
                                                  vIndex === answers[qIndex]
                                                      ? "correct"
                                                      : ""
                                              }
                                          />
                                      )
                                  )
                                : question.incorrect_answers &&
                                  question.incorrect_answers.map(
                                      (q, vIndex) => (
                                          <Variant
                                              key={q}
                                              variant={q}
                                              style={
                                                  vIndex === answers[qIndex]
                                                      ? "incorrect"
                                                      : vIndex ===
                                                        question.correct
                                                      ? "correct"
                                                      : ""
                                              }
                                          />
                                      )
                                  )}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

Result.propTypes = {
    questions: PropTypes.array.isRequired,
    answers: PropTypes.array.isRequired,
};
