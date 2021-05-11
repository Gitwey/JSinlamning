import AddMovieForm from './components/AddMovieForm';
import ListMovies from './components/ListMovies';
import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <h3>Lägg till en film</h3>
      <AddMovieForm setMovies={setMovies} />
      <h1>Inlagda filmer:</h1>
      {movies.length !== 0 ? (<ListMovies movies={movies} />) : ('Inga filmer inlagda')}
      <button className="btn btn-primary">Sortera alfabetiskt</button>
      <button className="btn btn-primary">Sortera betyg</button>
    </div>
  );
}

export default App;
