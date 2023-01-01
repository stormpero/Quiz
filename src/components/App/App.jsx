import "./App.scss"
import {Quiz} from "./Quiz";
import {useState} from "react";
import {Start} from "./Start";

const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
];


function App() {
    const [isStart, setIsStart] = useState(false)

    const onClickStart = () => {
        setIsStart(true)
    }

    return (
        <div className="App">
            {isStart ? <Quiz questions={questions}/> : <Start onClickStart={onClickStart}/>}
        </div>
    );
}

export default App;
