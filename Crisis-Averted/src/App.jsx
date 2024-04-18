import './app.css'
import TrailerSection from './components/trailer-component/TrailerSection'
import './app.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';


import HomePage from './pages/homePage/HomePage';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';
import TopMoviesPage from './components/topMovie/TopMovies';
import SingleMoviePage from './pages/singleMoviePage/SingleMoviePage';




function App() {
  return (
    <div className='app'>
      <Header />
      <TrailerSection />
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
