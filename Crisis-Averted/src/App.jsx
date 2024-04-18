import './app.css'
import axios from 'axios'
import TrailerSection from './components/trailer-component/TrailerSection'

const getMovieApi = () => {
  return axios.get(`https://santosnr6.github.io/Data/movies.json`)
    .then(response => {
      return response.data; // Itt visszaadjuk a filmeket
    })
    .catch(error => {
      console.error('Error fetching movies:', error);
      throw error; // Dobd tovább a hibát, ha valami probléma van a kéréssel
    });
}
import './app.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';


import HomePage from './pages/homePage/HomePage';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';
import TopMoviesPage from './components/topMovie/TopMovies';
import SingleMoviePage from './pages/singleMoviePage/SingleMoviePage';




function App() {
  return (
    <div>
      <h1>App</h1>
    <TrailerSection />
    </div>
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favoritesPage' element={<FavoritesPage />} />
        <Route path='/top-imdb' element={<TopMoviesPage />} />
        <Route path="/movie-details/:imdbid" element={<SingleMoviePage />} />
      </Routes>
    </div>
  )
}

export default App
