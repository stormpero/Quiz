import axios from "axios";

export const getQuestions = (amount) => {
    return axios.get(`https://opentdb.com/api.php?amount=${amount}`);
}