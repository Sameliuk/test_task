import SuperheroCard from '../components/SuperheroCard';
import { useState, useEffect } from 'react';
import { getAllSuperheroes } from '../services/api';
import '../styles/Home.css';

function Home() {
    const [superheroes, setSuperheroes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const loadSuperheroes = async () => {
            setLoading(true);
            try {
                const response = await getAllSuperheroes(page);
                setSuperheroes(response.data);
                setTotalPages(response.totalPages);
            } catch (err) {
                console.error(err);
                setError('Failed to load superheroes...');
            } finally {
                setLoading(false);
            }
        };

        loadSuperheroes();
    }, [page]);

    return (
        <div className="home">
            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <>
                    <div className="superheroes-grid">
                        {superheroes.map((superhero) => (
                            <SuperheroCard
                                superhero={superhero}
                                key={superhero.id}
                            />
                        ))}
                    </div>

                    <div className="pagination">
                        <button
                            onClick={() => setPage((p) => Math.max(p - 1, 1))}
                            disabled={page === 1}
                        >
                            Prev
                        </button>
                        <span>
                            {page} / {totalPages}
                        </span>
                        <button
                            onClick={() =>
                                setPage((p) => Math.min(p + 1, totalPages))
                            }
                            disabled={page === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;
