import axios from "axios";

export const getQuestions = (amount, difficulty, category) => {
    return axios.get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
    );
};

export const getCategoryList = () => {
    return axios.get(`https://opentdb.com/api_category.php`);
};
