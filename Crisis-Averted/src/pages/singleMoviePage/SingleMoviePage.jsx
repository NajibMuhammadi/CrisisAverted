import './singleMoviePage.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
function SingleMoviePage() {
    const { imdbid } = useParams();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=e2c38983&plot=full&i=${imdbid}`)
            .then(response => {
                setMovie(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    }, [imdbid]);
    return (
        <div className='movie__details'>
            <div className='movie__text-container'>
                <h1 className=''>{movie.Title}</h1>
                <p>Imdb Rating: {movie.imdbRating}/10</p>
            </div>
            <div className='movie__poster-plot'>
                <img src={movie.Poster} alt={movie.Title} />
                <p className='movie__plot'>{movie.Plot}</p>
            </div>
            <h2 className='movie__actor-title'>Actors:</h2>
            <p className='movie__actor-subtitle'>{movie.Actors}</p>
            <h2 className='movie__actor-title'>Director:</h2>
            <p className='movie__actor-subtitle'>{movie.Director}</p>
            <h2 className='movie__actor-title'>Genre:</h2>
            <p className='movie__actor-subtitle'>{movie.Genre}</p>
        </div>
    )
}

export default SingleMoviePage
