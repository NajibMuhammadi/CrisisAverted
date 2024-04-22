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

    const handleClickStar = (imdbid) => {
        const isFavorite = favorites.includes(imdbid);
        if (isFavorite) {
            setFavorites(favorites.filter(id => id !== imdbid));
        } else {
            setFavorites([...favorites, imdbid]);
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
                            <p onClick={() => handleClickStar(movie.imdbid)} style={{ color: favorites.includes(movie.imdbid) ? 'gold' : 'white' }} className='popular__card-star'>&#9734;</p>
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









