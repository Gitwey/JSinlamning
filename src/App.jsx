import AddMovieForm from './components/AddMovieForm';
import ListMovies from './components/ListMovies';
import './App.css';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [sortByName, setSortByName] = useState(false);
  const [sortByRating, setSortByRating] = useState(false);

  useEffect(() => {
    setMovies(movies.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
      else if (b.title.toLowerCase() < a.title.toLowerCase()) return 1;
      return 0;
    }))

    setSortByName(false)
  }, [sortByName, movies]);

  useEffect(() => {
    setMovies(movies.sort((a, b) => {
      if (a.rating < b.rating) return 1
      else if (b.rating < a.rating) return -1;
      return 0;
    }))

    setSortByRating(false)
  }, [sortByRating, movies]);


  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <h6>Lägg till en film</h6>
      <AddMovieForm setMovies={setMovies} />
      <h3>Inlagda filmer:</h3>
      {movies.length !== 0 ? (<ListMovies movies={movies} setMovies={setMovies} />) : ('Inga filmer inlagda')}
      <button className="btn btn-primary m-2" onClick={() => setSortByName(true)}>Alfabetisk ordning</button>
      <button className="btn btn-primary m-2" onClick={() => setSortByRating(true)}>Betygsordning</button>
    </div>
  );
}

export default App;
