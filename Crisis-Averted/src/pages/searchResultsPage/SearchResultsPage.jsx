import './searchResultsPage.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SearchResultsPage({ movies }) {
    const [favorites, setFavorites] = useState([]);
    const [watchlist, setWatchlist] = useState([]);

    // Load favorites from localStorage on component mount
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(storedFavorites);
    }, []);

    const handleClickStar = (movie) => {
        const isFavorite = favorites.some((favorite) => favorite.imdbID === movie.imdbID);

        let updatedFavorites;
        if (isFavorite) {
            updatedFavorites = favorites.filter((favorite) => favorite.imdbID !== movie.imdbID);
        } else {
            updatedFavorites = [...favorites, movie];
        }

        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    // Load watchlist from localStorage on component mount
    useEffect(() => {
        const storedWatchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
        setWatchlist(storedWatchlist);
    }, []);

    const handleAddToWatchlist = (movie) => {
        const isAddedToWatchlist = watchlist.some((item) => item.imdbID === movie.imdbID);

        let updatedWatchlist;
        if (isAddedToWatchlist) {
            updatedWatchlist = watchlist.filter((item) => item.imdbID !== movie.imdbID);
        } else {
            updatedWatchlist = [...watchlist, movie];
        }

        setWatchlist(updatedWatchlist);
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
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
                                    <button
                                        onClick={() => handleAddToWatchlist(movie)}
                                        className='watchlist__btn'
                                    >
                                    + Watchlist
                                    </button>
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
    );
}

export default SearchResultsPage;
