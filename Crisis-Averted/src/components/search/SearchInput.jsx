import './searchInput.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SearchInput({ setMovies }) {
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
  }, [userInput]);

  const handleSearch = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  }

  const handleBtnClick = (e) => {
    e.preventDefault
    axios.get(`http://www.omdbapi.com/?apikey=e2c38983&s=${userInput}`)
      .then(response => {
        setMovies(response.data.Search || []);
      })
      .catch(error => {
        console.error(error);
      });

  }

  return (
    <form className="search__form">
      <input className="search__input"
        type="text"
        onChange={handleSearch}
      />

      <button className='search__btn'
        onClick={handleBtnClick}>
        <Link to='/user-search' className='search__btn-link'>search</Link>
      </button>

    </form>
  )
}

export default SearchInput;
