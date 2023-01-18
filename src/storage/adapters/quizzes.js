import { setItem, getItem, removeItem } from "../storage";

const quizzesStorageName = "quizzes";

const saveQuiz = (quizInfo) => {
    if (getItem(quizzesStorageName) === null) {
        setItem(quizzesStorageName, "[]");
    }
    const oldQuizzes = JSON.parse(getItem(quizzesStorageName));
    oldQuizzes.push(quizInfo);
    setItem(quizzesStorageName, JSON.stringify(oldQuizzes));
};

const getQuizzes = () => {
    const quizzes = getItem(quizzesStorageName);
    return quizzes ? JSON.parse(quizzes) : [];
};

const removeQuizzes = () => {
    removeItem(quizzesStorageName);
};

export { saveQuiz, getQuizzes, removeQuizzes };
