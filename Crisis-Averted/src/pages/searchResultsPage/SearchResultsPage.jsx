import './searchResultsPage.css';
import { Link } from 'react-router-dom';

function SearchResultsPage({ movies }) {

    return (
        <div>
            {movies.length > 0 ? (
                <div className='movie__found-container'>
                    <h1 className='results__title'>Search Results</h1>
                    <div className='results__info'>
                        {movies.map(movie => (
                            <div key={movie.imdbID} className='search__card'>
                                <h2 className='search__card-subtitle'>{movie.Title}</h2>
                                <Link to={`/movie-details/${movie.imdbID}`} className='search__card-link' >
                                    <img className='search__img' src={movie.Poster} alt={movie.Title} />
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
            ) : (
                <div className='movie__error'>
                    <p className='movie__NoFound'>No results found</p>
                </div>
            )}

        </div>

    )
}

export default SearchResultsPage

