import AddMovieForm from './components/AddMovieForm';
import ListMovies from './components/ListMovies';
import './App.css';
import { useState } from 'react'

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <h1>Min filmlista</h1>
      <h3>Lägg till en film</h3>
      <AddMovieForm movies={movies} setMovies={setMovies} />
      <h1>Inlagda filmer:</h1>
      {movies.length !== 0 ? (<ListMovies movies={movies} />) : ('Inga filmer inlagda')}
    </div>
  );
}

export default App;
