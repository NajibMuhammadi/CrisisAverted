import './topMovies.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function TopMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://santosnr6.github.io/Data/movies.json`)
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <section className='content-wrapper'>
            <h1 className='popular__title'>My Movies Top 20</h1>
            <div className='popular__card-container'>
                {movies.map(movie => (
                    <div key={movie.imdbid} className='popular__card'>
                        <h2 className='popular__card-subtitle'>{movie.title}</h2>
                        <img className='popular__card-img' src={movie.poster} alt={movie.title} />
                    </div>

                ))}
            </div>
        </section>

    );
}

export default TopMovies;
