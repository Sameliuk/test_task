import './styles/App.css';
import Home from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SuperheroPage from './pages/SuperheroPage';
import CreateSuperheroPage from './pages/CreateSuperheroPage';

function App() {
    return (
        <>
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/superhero/create"
                        element={<CreateSuperheroPage />}
                    />
                    <Route
                        path="/superheroes/:id"
                        element={<SuperheroPage />}
                    />
                </Routes>
            </main>
        </>
    );
}

export default App;
