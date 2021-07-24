
// import './App.css';
// import React ,{useState} from 'react'
// import {moviesData} from './Components/MoviesData'
// //import Header from './components/Header'
// import MoviesList from './Components/MoviesList'
// import NavBar from "./Components/NavBar.js"
// import AddMovies from './Components/AddMovies'
// function App() {
//   const[movies, setMovies]=useState(moviesData)
//   const [name, setName] = useState('')
//   const [ratingSearch, setRatingSearch ] = useState(0)
//   // let addFilm = (newMovie, e)=>{
//   //   e.preventDefault()
//   //   setMovies([newMovie, ...movies])
    
//   // }

//   const addMv = (e , newmovie)=> {
//     e.preventDefault() ;
//     return setMovies([...movies, newmovie]) 
//   }

//   console.log("movies", movies)
//   return (
//     <div className="App">
//        {/* <NavBar name = {name}  setName = {setName} ratingSearch = {ratingSearch} setRatingSearch = {setRatingSearch}/> */}
//        <NavBar setName={setName} setRatingSearch={setRatingSearch} ratingSearch={ratingSearch}  />

//       <span style = {{display:"flex", flexWrap:"wrap" }}/>
//       <AddMovies addMv={addMv} />
//       {/* <MoviesList movies={movies} name={name} ratingSearch={ratingSearch}/> */}
//       <MoviesList movies={movies} setMovies={setMovies}  name={name} setName={setName} setRatingSearch={setRatingSearch} ratingSearch={ratingSearch} />
      
//     </div>
//   );
// }

// export default App;
import React from "react";
import {Switch,Route} from "react-router-dom";

import MovieApp from "./MovieApp";
import Description from './Components/Description'
 
export default function App() {



  return (
      <div className="App">
        <Switch>

          <Route path="/" exact component={MovieApp} />
          <Route path="/description/:id" render={(props) => <div><Description {...props}/></div>} />
          
        </Switch>
 
      </div>
  );
}