import { useEffect, useState } from 'react';
import axios from 'axios';
import PrevBtn from '../prevbtn/PrevBtn';
import NextBtn from '../nextbtn/NextBtn';
import './trailer-list.css'

function TrailerList() {
  const [trailers, setTrailers] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://santosnr6.github.io/Data/movies.json`)
      .then(response => {
        setTrailers(response.data);
        
        if (response.data.length > 0) {
          const randomIndex = Math.floor(Math.random() * response.data.length);
          setRandomMovie(response.data[randomIndex]);
        }
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        throw error;
      });
  }, []);

  const handleToPrevTrailer = () => {
    if (trailers.length > 0) {
      const currentIndex = trailers.findIndex(movie => movie.imdbid === randomMovie.imdbid);
      const prevIndex = (currentIndex - 1 + trailers.length) % trailers.length;
      setRandomMovie(trailers[prevIndex]);
    }
  };

  const handleNextTrailer = () => {
    if (trailers.length > 0) {
      const currentIndex = trailers.findIndex(movie => movie.imdbid === randomMovie.imdbid);
      const nextIndex = (currentIndex + 1) % trailers.length;
      setRandomMovie(trailers[nextIndex]);
    }
  };

  return (
    <div>
      <PrevBtn onClick={handleToPrevTrailer} />
      <ul className='trailer__list'>
        {randomMovie && (
          <li className="carousel__slide" data-active>
            <iframe
              src={randomMovie.trailer_link}
              width="420"
              height="315"
              frameBorder="0"
              title={randomMovie.title}
            ></iframe>
          </li>
        )}
      </ul>
      <NextBtn onClick={handleNextTrailer} />
    </div>
  );
}

export default TrailerList;
