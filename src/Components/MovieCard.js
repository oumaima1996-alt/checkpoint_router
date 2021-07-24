import React from 'react'
import './MovieCard.css'
import Rating from '../Components/Rating'
import {Link} from "react-router-dom";
import {moviesData} from './MoviesData'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch, useParams} from 'react-router-dom'

const MovieCard = ({el}) => {
  // const x = props.location
  // const y = props.history
  // let { id } = useParams();
  // let text = x.state.moviesData[parseInt(id, 10)]
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
      {/* <p class="text">
        {el.discription} 
      </p> */}

<Link to={{pathname:`/description/${el.id}`, 
                                state:{
                                    moviesData
                                }
                                }}><h5 className="linkDescription">go to description</h5></Link>
    </div>
    <div class="movie_social">
      <ul>
        <li><i class="material-icons">share</i></li>
        <li> <Rating rate = {el.rate} /></li>
        {/* <li><i class="material-icons">Watch trailer</i></li> */}
        {/* <Link to={{pathname:`/trailer/${text.id}`, 
                        state:{
                            moviesData
                        }
                        }}>
                <button className="btn-trailer draw-border">Watch Trailer</button>
            </Link> */}
      </ul>
    </div>
  </div>
  <div class="blur_back bright_back"></div>
</div>




            
        </div>
    )
}

export default MovieCard
