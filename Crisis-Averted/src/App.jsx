import './app.css'
import axios from 'axios'
import Header from './components/header/Header'

const getMovieApi = () => {
  axios.get(`https://santosnr6.github.io/Data/movies.json`)
    .then(response => {
      console.log(response.data)
    })
}

function App() {
  getMovieApi()
  return (<div>
    <h1>App</h1>
    <Header />
    </div>
  )
}

export default App
