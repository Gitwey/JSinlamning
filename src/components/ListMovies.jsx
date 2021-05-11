import React from 'react'

export default function ListMovies({ movies }) {
    return (
        <>
            { movies.map((movie, index) => <li key={index} onClick={() => { console.log(index) }}> {movie.title}</li>)}
        </>
    )
}
// {movies.map(movie, index => <li>{movie.title}{<icon>onClick= {() => console.log(index)}</icon>}</li>)}
// 