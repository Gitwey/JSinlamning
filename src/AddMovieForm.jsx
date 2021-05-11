import React from 'react'
import { useForm } from "react-hook-form"
import Movie from './Movie';
 
export default function AddMovieForm(props) {
  
  const { register, handleSubmit, control} = useForm();
  const [ movies, setMovies ] = React.useState([]);
  const onSubmit = data => setMovies([...movies, data]);
  const onError = errors => alert("Vänligen fyll i en titel") 
  console.log(movies)
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <h1>Min filmlista</h1>
        <h3>Lägg till en film</h3>
        
        <label>Titel: </label>
        <input id="new-title" {...register("title", { required: true})}
        />
        <label>Rating: </label>
        <select id="new-rating" {...register("rating")}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="submit" value="Spara Film" />
      </form>
      <ul>
      {movies.map(movie, index => <li>{movie.title}{<icon>onClick= {() => console.log(index)}</icon>}</li>)}
      </ul>  
    </div>
  );
}
  /*
    handleChange(e) {
      this.setState({ text: e.target.value, rating: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0 || this.state.rating.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        rating: this.state.rating,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: '',
        rating: ''
      }));
    }
  }
  
  class MovieList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text},{item.rating}</li>
          ))}
        </ul>
      );
    }
  }
*/
