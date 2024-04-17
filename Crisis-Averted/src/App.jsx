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



function App() {
  getMovieApi()
  return (
    <div>
      <h1>App</h1>
    <TrailerSection />
    </div>
    
  )
}

export default App
