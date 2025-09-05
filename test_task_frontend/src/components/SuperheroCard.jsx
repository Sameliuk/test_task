import { Link } from 'react-router-dom';
import '../styles/SuperheroCard.css';

function SuperheroCard({ superhero }) {
    return (
        <div className="superhero-card">
            <div className="superhero-images">
                <Link to={`/superheroes/${superhero.id}`}>
                    <img
                        src={superhero.images[0].url}
                        alt={superhero.nickname}
                    />
                </Link>
            </div>
            <div className="superhero-info">
                <h3>
                    <Link to={`/superheroes/${superhero.id}`}>
                        {superhero.nickname}
                    </Link>
                </h3>
            </div>
        </div>
    );
}

export default SuperheroCard;
