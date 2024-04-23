import './watchlistPage.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function WatchlistPage() {
    const [watchlist, setWatchlist] = useState([]);
    const [showNotFound, setShowNotFound] = useState(false);

    // Load watchlist from LocalStorage
    useEffect(() => {
        const storedWatchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
        setWatchlist(storedWatchlist);
    }, []);

    // Function to add or remove from watchlist
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

        if (updatedWatchlist.length === 0) {
            setShowNotFound(true);
        }
    };

    return (
        <div>
            {showNotFound ? (
                <div className="not__found">
                    <p className="not__found-text">Nincsenek filmek a watchlistben.</p>
                </div>
            ) : (
                <div className="content__wrapper">
                    <h1 className="watchlist__page-title">Watchlist</h1>
                    <div className="watchlist__card-container">
                        {watchlist.map((movie, index) => (
                            <div key={index} className="watchlist__card">
                                <h2 className="watchlist__card-subtitle">{movie.Title}</h2>
                                <div className="watchlist__card-Starcontent">
                                    <p
                                        onClick={() => handleClickStar(favorite)}
                                        className='favorite__card-star'
                                        style={{ color: 'gold' }}
                                    >
                                        &#9733;
                                    </p>
                                    <button
                                        onClick={() => handleAddToWatchlist(movie)}
                                        className="watchlist__btn"
                                    >
                                        {watchlist.some((item) => item.imdbID === movie.imdbID) ? "- Watchlist" : "+ Watchlist"}
                                    </button>
                                </div>
                                <Link to={`/movie-details/${movie.imdbID}`} className="watchlist__card-link">
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
