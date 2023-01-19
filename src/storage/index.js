import { setStorage } from "./storage";
import * as quizzes from "./adapters/quizzes";
import * as settings from "./adapters/settings";

setStorage(localStorage);

export { quizzes, settings };
