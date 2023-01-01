import {Quiz} from "../Quiz/Quiz";
import {useEffect, useState} from "react";
import {Start} from "../Start";

import "./App.css"
import {getQuestions} from "../../api";

// const questions = [
//     {
//         title: 'React - это ... ?',
//         variants: ['библиотека', 'фреймворк', 'приложение'],
//         correct: 0,
//     },
//     {
//         title: 'Компонент - это ... ',
//         variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
//         correct: 1,
//     },
//     {
//         title: 'Что такое JSX?',
//         variants: [
//             'Это простой HTML',
//             'Это функция',
//             'Это тот же HTML, но с возможностью выполнять JS-код',
//         ],
//         correct: 2,
//     },
// ];

const insert = (arr, index, newItem) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index)
]

function App() {
    const [isStart, setIsStart] = useState(false)
    const [questionsList, setQuestionsList] = useState([]);

    useEffect(() => {
        getQuestions(5).then((response => {
            let tempData = response.data?.results
            tempData = tempData.map(el => {
                const index = Math.floor(Math.random() * el?.incorrect_answers.length)
                el.incorrect_answers = insert(el?.incorrect_answers, index, el.correct_answer)
                el.correct = index;
                return el;
            })
            return tempData
        })).then(array => setQuestionsList(array))
    }, [])

    const onClickStart = () => {
        setIsStart(true)
    }

    return (
        <div className="app">
            {isStart ? <Quiz questions={questionsList}/> : <Start onClickStart={onClickStart}/>}
        </div>
    );
}

export default App;
