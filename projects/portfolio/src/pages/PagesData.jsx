import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const PagesData = [
    {
        path: "",
        element: <Home/>,
        title: "home"
    },
    {
        path: "about",
        element: <About/>,
        title: "about"
    },
    {
        path: "projects",
        element: <Projects/>,
        title: "projects"
    },
    {
        path: "contact",
        element: <Contact/>,
        title: "contact"
    }  
];

export default PagesData;