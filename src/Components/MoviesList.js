import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movies, name, ratingSearch}) => {
    console.log("movies", movies)
    console.log("name1", name)

    return (
        <div className="allCards">
            {/* {movies.filter(el=> el.name.toLowerCase().includes(name.toLowerCase().trim()) 
            && el.rating >= ratingSearch).map(el=> ( <MovieCard el={el}/>))} */}
             {movies.filter(el=> el.name.toLowerCase().includes(name.toLowerCase().trim())&&
          el.rate >= ratingSearch).map(el=> ( <MovieCard el={el}/>))}

        </div>

    )
}


export default MoviesList

