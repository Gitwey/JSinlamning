import { useForm } from "react-hook-form"

export default function AddMovieForm({ setMovies }) {

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = data => {
    setMovies(movies => [...movies, data]);
    setValue("title", "")
    setValue("rating", "")
  }

  const onError = () => alert("Vänligen fyll alla fält")

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label className="mx-2">Titel: </label>
        <input id="new-title" type="text" {...register("title", { required: true })} />
        <label id="ratingid" className="mx-2">Rating: </label>
        <select id="new-rating" {...register("rating", { required: true })}>
          <option disabled selected value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div className="row justify-content-center">
          <input type="submit" className="btn btn-success m-2" value="Spara Film" />
        </div>
      </form>
    </div >
  );
}