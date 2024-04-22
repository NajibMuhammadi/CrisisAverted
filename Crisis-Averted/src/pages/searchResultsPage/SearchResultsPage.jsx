import './searchResultsPage.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SearchResultsPage({ movies }) {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(storedFavorites);
    }, []);

    const handleClickStar = (movie) => {
        const isFavorite = favorites.some((favorite) => favorite.imdbID === movie.imdbID);

        if (isFavorite) {
            const updatedFavorites = favorites.filter((favorite) => favorite.imdbID !== movie.imdbID);
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
            const updatedFavorites = [...favorites, movie];
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
    };

    return (
        <div>
            {movies.length > 0 ? (
                <div className='movie__found-container'>
                    <h1 className='results__title'>Search Results</h1>
                    <div className='results__info'>
                        {movies.map(movie => (
                            <div key={movie.imdbID} className='search__card'>
                                <h2 className='search__card-subtitle'>{movie.Title}</h2>
                                <div className='favorite__card-Starcontent'>
                                    <p
                                        onClick={() => handleClickStar(movie)}
                                        style={{ color: favorites.some((favorite) => favorite.imdbID === movie.imdbID) ? 'gold' : 'white' }}
                                        className='popular__card-star'>
                                        &#9733;
                                    </p>
                                </div>
                                <Link to={`/movie-details/${movie.imdbID}`} className='search__card-link' >
                                    <img className='search__img' src={movie.Poster} alt={movie.Title} />
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
            ) : (
                <div className='movie__error'>
                    <p className='movie__NoFound'>No results found</p>
                </div>
            )}

        </div>

    )
}

export default SearchResultsPage

