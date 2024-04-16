import './searchInput.css';

function SearchInput() {
  return (
    <form className="search__form">
      <input className="search__input" type="text" />
      <input className="search__submit" type="submit" />
    </form>
  )
}

export default SearchInput;
