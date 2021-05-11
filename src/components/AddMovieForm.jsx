import React from 'react'
import { useForm } from "react-hook-form"
 
export default function AddMovieForm({ setMovies }) {
  
  const { register, handleSubmit, control} = useForm();
  const onSubmit = data => setMovies(movies => [...movies, data]);
  const onError = () => alert("Vänligen fyll i en titel") 
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>        
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
        <div className="row justify-content-center">
          <input type="submit" className="btn btn-success" value="Spara Film" />
        </div>
      </form>
      <ul>
      
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
