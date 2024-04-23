import './watchlistPage.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function WatchlistPage() {
    const [watchlist, setWatchlist] = useState([]);
    const [showNotFound, setShowNotFound] = useState(false);
    const [favorites, setFavorites] = useState([]);

    // Load watchlist from LocalStorage
    useEffect(() => {
        const storedWatchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
        setWatchlist(storedWatchlist);
    }, []);

    // Function to add or remove from watchlist
    const handleAddToWatchlist = (movie) => {
        const isAddedToWatchlist = watchlist.some((item) => item.imdbID === movie.imdbID || item.imdbid === movie.imdbid);

        let updatedWatchlist;
        if (isAddedToWatchlist) {
            updatedWatchlist = watchlist.filter((item) => item.imdbID !== movie.imdbID);
        } else {
            updatedWatchlist = [...watchlist, movie];
        }

        setWatchlist(updatedWatchlist);
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));

        if (updatedWatchlist.length === 0) {
            setShowNotFound(true);
        }
    };

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

    return (
        <div>
            {showNotFound ? (
                <div className="not__found">
                    <p className="not__found-text">Du har inga filmer bland dina watchlist.</p>
                </div>
            ) : (
                <div className="content__wrapper">
                    <h1 className="watchlist__page-title">Watchlist</h1>
                    <div className="watchlist__card-container">
                        {watchlist.map((movie, index) => (
                            <div key={index} className="watchlist__card">
                                <h2 className="watchlist__card-subtitle">{movie.Title || movie.title}</h2>
                                <div className="watchlist__card-Starcontent">
                                    <p
                                        onClick={() => handleClickStar(movie)}
                                        style={{ color: favorites.some((favorite) => favorite.imdbID === movie.imdbID) ? 'gold' : 'white' }}
                                        className='popular__card-star'>
                                        &#9733;
                                    </p>
                                    <button
                                        onClick={() => handleAddToWatchlist(movie)}
                                        className="watchlist__btn"
                                    >
                                        {watchlist.some((item) => item.imdbID === movie.imdbID) ? "- Watchlist" : "+ Watchlist"}
                                    </button>
                                </div>
                                <Link to={`/movie-details/${movie.imdbID || movie.imdbid}`} className="watchlist__card-link">
                                    <img className="watchlist__card-img" src={movie.Poster || movie.poster} alt={movie.Title || movie.Title} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default WatchlistPage;
