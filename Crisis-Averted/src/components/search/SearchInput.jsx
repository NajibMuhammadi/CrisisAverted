import './searchInput.css';

function SearchInput() {
  return (
    <form className="search__form">
      <input className="search__input" type="text" />
      <button className='search__btn'>Search</button>
    </form>
  )
}

export default SearchInput;
