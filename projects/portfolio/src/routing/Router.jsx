import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PagesData from '../pages/PagesData';

const Router = () => {
    const pageRoutes = PagesData.map(({ path, title, element }) => (
        <Route key={title} path={`/${path}`} element={element} />
    ));
    return (
        <Routes>{pageRoutes}</Routes>
    );
}

export default Router;