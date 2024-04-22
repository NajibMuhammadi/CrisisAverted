import './topMovies.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TopMovies() {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        axios.get(`https://santosnr6.github.io/Data/movies.json`)
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(storedFavorites || []);
    }, []);

    const handleClickStar = (movie) => {
        const isFavorite = favorites.some(favorite => favorite.imdbid === movie.imdbid);

        if (isFavorite) {
            const updatedFavorites = favorites.filter(favorite => favorite.imdbid !== movie.imdbid);
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
            const updatedFavorites = [...favorites, movie];
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
    }



    return (
        <section className='content-wrapper'>
            <h1 className='popular__title'>My Movies Top 20</h1>
            <div className='popular__card-container'>
                {movies.map(movie => (
                    <div key={movie.imdbid} className='popular__card'>
                        <h2 className='popular__card-subtitle'>{movie.title}</h2>
                        <div className='favorite__card-container'>
                            <p
                                onClick={() => handleClickStar(movie)}
                                style={{ color: favorites.some(favorite => favorite.title === movie.title) ? 'gold' : 'white' }}
                                className='popular__card-star'>
                                &#9733;
                            </p>
                        </div>
                        <Link to={`/movie-details/${movie.imdbid}`} className='popular__card-link' >
                            <img className='popular__card-img' src={movie.poster} alt={movie.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}


export default TopMovies;









