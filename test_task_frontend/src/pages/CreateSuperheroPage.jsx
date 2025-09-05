import { useState } from 'react';
import CreateSuperheroForm from '../components/CreateSuperheroForm';
import { createSuperhero } from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateSuperhero.css';

function CreateHeroPage() {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCreate = async (formData) => {
        try {
            console.log('📤 Sending hero data:', formData);
            const newHero = await createSuperhero(formData);
            console.log('Hero created:', newHero);

            if (formData.images) {
                setImages(formData.images);
                setCurrentIndex(0);
            }

            navigate('/');
        } catch (error) {
            console.error('Error creating superhero:', error);
            alert('Error creating hero');
        }
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="p-6">
            <h1 className="marquee">
                <span>Here you can create a new Superhero</span>
            </h1>

            {images.length > 0 && (
                <div className="slider">
                    <button onClick={handlePrev} className="slider-btn">
                        ◀
                    </button>
                    <img
                        src={images[currentIndex]}
                        alt={`Hero ${currentIndex}`}
                        className="slider-img"
                    />
                    <button onClick={handleNext} className="slider-btn">
                        ▶
                    </button>
                </div>
            )}

            <CreateSuperheroForm onSubmit={handleCreate} />
        </div>
    );
}

export default CreateHeroPage;
