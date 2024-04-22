import { useState, useEffect } from 'react';
import './favoritesPage.css';
import { Link } from 'react-router-dom';

function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);
    const [showNotFound, setShowNotFound] = useState(false);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            const savedFavoritesNotEx = JSON.parse(savedFavorites);
            if (savedFavoritesNotEx.length > 0) {
                setFavorites(savedFavoritesNotEx);
            } else {
                setShowNotFound(true);
            }
        } else {
            setShowNotFound(true);
        }
    }, []);
    const handleClickStar = (movie) => {
        const updatedFavorites = favorites.filter(favorite => favorite.imdbid !== movie.imdbid || favorite.imdbID !== movie.imdbID);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        if (updatedFavorites.length === 0) {
            setShowNotFound(true);
        }
    };
    return (
        <div>
            {showNotFound ? (
                <div className="not__found">
                    <p className="not__found-text">Du har inga filmer bland dina favoriter.</p>
                </div>
            ) : (
                <div className='content__wrapper'>
                    <h1 className='favorite__page-title' >My Favorites</h1>
                    <div className='favorite__card-container'>
                        {
                            favorites.map((favorite, index) => (
                                <div key={index} className='favorite__card'>
                                    <h2 className='favorite__card-subtitle'>{favorite.title || favorite.Title}</h2>
                                    <div className='favorite__card-Starcontent'>
                                        <p
                                            onClick={() => handleClickStar(favorite)}
                                            className='favorite__card-star'
                                            style={{ color: 'gold' }}>
                                            &#9733;
                                        </p>
                                    </div>
                                    <Link to={`/movie-details/${favorite.imdbid}`} className='favorite__card-link' >
                                        <img className='favorite__card-img' src={favorite.poster || favorite.Poster} alt={favorite.title || favorite.Title} />
                                    </Link>
                                </div>
                            ))

                        }
                    </div>
                </div>

            )}
        </div>
    );
}

export default FavoritesPage;
