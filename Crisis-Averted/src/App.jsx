import './app.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';


import HomePage from './pages/homePage/HomePage';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';
import TopMoviesPage from './components/topMovie/TopMovies';


function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favoritesPage' element={<FavoritesPage />} />
        <Route path='/top-imdb' element={<TopMoviesPage />} />
      </Routes>
    </div>


  )
}

export default App
