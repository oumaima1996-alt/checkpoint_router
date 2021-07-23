import React from 'react'
import './MovieCard.css'
import Rating from '../Components/Rating'

const MovieCard = ({el,name , url1 , rate , id}) => {
    return (
        <div>
            
            {/* <h4>{el.name}</h4>
            <img src = {el.url1} />
            <h4>{el.rate}</h4> */}
            <a class="link" href="https://codepen.io/simoberny/pen/qxxOqj" target="_blank">{el.name}</a>
<div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src={el.url1}/>
      <h1>{el.name}</h1>
      <h4>2017, David Ayer</h4>
      <span class="minutes">117 min</span>
      <p class="type">Action, Crime, Fantasy</p>
    </div>
    <div class="movie_desc">
      <p class="text">
        {el.discription} 
      </p>
    </div>
    <div class="movie_social">
      <ul>
        <li><i class="material-icons">share</i></li>
        <li> <Rating rate = {el.rate} /></li>
        <li><i class="material-icons">Watch trailer</i></li>
      </ul>
    </div>
  </div>
  <div class="blur_back bright_back"></div>
</div>




            
        </div>
    )
}

export default MovieCard
