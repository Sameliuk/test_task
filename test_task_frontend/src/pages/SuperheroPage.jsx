import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    getSingleSuperhero,
    updateSuperhero,
    deleteSuperhero,
} from '../services/api';
import EditSuperheroForm from '../components/EditSuperheroForm';
import '../styles/SuperheroPage.css';

function SuperheroPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [superhero, setSuperhero] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const loadHero = async () => {
            try {
                const data = await getSingleSuperhero(id);
                setSuperhero(data);
            } catch (err) {
                setError('Failed to load superhero.');
                console.error('Error loading superhero:', err);
            } finally {
                setLoading(false);
            }
        };
        loadHero();
    }, [id]);

    async function handleDelete() {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this hero?'
        );
        if (!confirmDelete) return;

        try {
            await deleteSuperhero(id);
            navigate('/');
        } catch (error) {
            console.error('Error deleting superhero:', error);
        }
    }

    async function handleSave(updatedHero) {
        try {
            const data = await updateSuperhero(id, updatedHero);
            setSuperhero(data);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating superhero:', error);
        }
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="superhero-page">
            {superhero.images?.length > 0 && (
                <div className="slider-container">
                    <button
                        className="slider-btn prev"
                        onClick={() =>
                            setIndex((i) =>
                                i === 0 ? superhero.images.length - 1 : i - 1
                            )
                        }
                    >
                        ◀
                    </button>
                    <div className="slider-track-wrapper">
                        <div
                            className="slider-track"
                            style={{
                                transform: `translateX(-${index * 100}%)`,
                            }}
                        >
                            {superhero.images.map((img) => (
                                <img
                                    key={img.id}
                                    src={img.url}
                                    alt={superhero.nickname}
                                />
                            ))}
                        </div>
                    </div>
                    <button
                        className="slider-btn next"
                        onClick={() =>
                            setIndex((i) =>
                                i === superhero.images.length - 1 ? 0 : i + 1
                            )
                        }
                    >
                        ▶
                    </button>
                </div>
            )}
            <h2>{superhero.nickname}</h2>
            <h3>{superhero.real_name}</h3>

            <p className="superhero-field">
                <strong>Origin:</strong> {superhero.origin_description}
            </p>
            <p className="superhero-field">
                <strong>Superpowers:</strong> {superhero.superpowers}
            </p>
            <p className="superhero-quote">
                <strong>Catch Phrase:</strong> <em>{superhero.catch_phrase}</em>
            </p>

            <div className="actions">
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>

            {isEditing && (
                <EditSuperheroForm
                    superhero={superhero}
                    onClose={() => setIsEditing(false)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
}

export default SuperheroPage;
