import { AiFillStar } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';

export default function ListMovies({ movies, setMovies }) {
    const getStars = (num) => {
        var stars = []
        for (var i = 0; i < num; i++)
            stars.push(<AiFillStar style={{ 'color': 'orange' }} key={i} />)
        return stars
    }
    const removeMovie = (movie) => {
        setMovies(movies.filter(m => m.title !== movie.title || m.rating !== movie.rating))
    }
    return (
        <>
            <table className="table" style={{ 'width': '50%' }}>
                <tbody>
                    {movies.map((movie, index) =>

                        <tr key={index}>
                            <td>{movie.title} </td>
                            <td>{getStars(movie.rating)}</td>
                            <td><ImCross style={{ 'color': 'red' }} key={index} onClick={() => removeMovie(movie)} /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}