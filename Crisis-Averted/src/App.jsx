import './app.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';


import HomePage from './pages/homePage/HomePage';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';
import TopMoviesPage from './components/topMovie/TopMovies';
import SingleMoviePage from './pages/singleMoviePage/SingleMoviePage';
import SearchResultsPage from './pages/searchResultsPage/SearchResultsPage';
import WatchlistPage from './pages/watchlistPage/WatchlistPage';


function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div className='app'>
      <Header setMovies={setMovies} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favoritesPage' element={<FavoritesPage />} />
        <Route path='/top-imdb' element={<TopMoviesPage />} />
        <Route path='/movie-details/:imdbid' element={<SingleMoviePage />} />
        <Route path='/user-search' element={<SearchResultsPage movies={movies} />} />
        <Route path='/watchlistPage' element={<WatchlistPage />} />        
      </Routes>
    </div>


  )
}

export default App
