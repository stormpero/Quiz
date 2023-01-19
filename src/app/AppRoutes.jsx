import React from "react";
import { Route, Routes } from "react-router-dom";

import { AppLayout } from "./AppLayout";

import { StartQuizPage } from "pages/StartQuiz/StartQuizPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { HistoryPage } from "pages/History/HistoryPage";
import { SettingsPage } from "pages/Settings/SettingsPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<StartQuizPage />} />
                <Route path="history" element={<HistoryPage />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};
