import { setItem, getItem, removeItem } from "../storage";

const settingsStorageName = "settings";

const setSettings = (settings) => {
    setItem(settingsStorageName, JSON.stringify(settings));
};

const getSettings = () => {
    const quizzes = getItem(settingsStorageName);
    return quizzes ? JSON.parse(quizzes) : {};
};

const removeSettings = () => {
    removeItem(settingsStorageName);
};

export { setSettings, getSettings, removeSettings };
