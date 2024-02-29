import './App.css';
import Header from './components/Header';
import Router from './routing/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
    <>
        <BrowserRouter>
            <Header/>
            <Router/>
        </BrowserRouter>
    </>
    )
}

export default App
