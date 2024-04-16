import './app.css'
import axios from 'axios'

const getMovieApi = () => {
  axios.get(`https://santosnr6.github.io/Data/movies.json`)
    .then(response => {
      console.log(response.data)
    })
}

function App() {
  getMovieApi()
  return (
    <h1>App</h1>
  )
}

export default App
