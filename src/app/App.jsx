import React from "react";
import { Route, Routes } from "react-router-dom";

import { AppLayout } from "./AppLayout";

import { StartQuiz } from "pages/StartQuiz/StartQuiz";
import { NotFoundPage } from "pages/NotFoundPage";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<StartQuiz />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};