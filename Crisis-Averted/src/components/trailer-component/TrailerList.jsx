import { useState, useEffect } from 'react';
import axios from 'axios';
import PrevBtn from './PrevBtn';
import NextBtn from './NextBtn';

function TrailerList() {
  const [trailers, setTrailers] = useState([]);
  const [currentTrailerIndex, setCurrentTrailerIndex] = useState(0);

  useEffect(() => {
    axios.get(`https://santosnr6.github.io/Data/movies.json`)
      .then(response => {
        setTrailers(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        throw error;
      });
  }, []);

  const handleToPrevTrailer = () => {
    setCurrentTrailerIndex(prevIndex => prevIndex === 0 ? trailers.length - 1 : prevIndex - 1);
  };

  const handleNextTrailer = () => {
    setCurrentTrailerIndex(prevIndex => (prevIndex + 1) % trailers.length);
  };

  return (
    <div>
      <PrevBtn onClick={handleToPrevTrailer} />
      <ul className='trailer__list'>
        {trailers.map((trailer, index) => (
          <li key={index} className={index === currentTrailerIndex ? 'carousel__slide active' : 'carousel__slide'}>
            {index === currentTrailerIndex && (
              <iframe
                src={trailer.trailer_link}
                width="420"
                height="315"
                frameBorder="0"
                title={trailer.title}
              ></iframe>
            )}
          </li>
        ))}
      </ul>
      <NextBtn onClick={handleNextTrailer} />
    </div>
  );
}

export default TrailerList;
