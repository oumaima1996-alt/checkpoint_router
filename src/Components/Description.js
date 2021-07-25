import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Link,Switch, useParams} from 'react-router-dom'

import Rating from './Rating'
import Trailer from './Trailer'
import {moviesData} from './MoviesData'
import './Description.css'

const Description = (props) => {

    const x = props.location
    const y = props.history
    let { id } = useParams();
    let text = x.state.moviesData[parseInt(id, 10)]
    console.log("llll", x)

    return (
        <Router>
        <>
        <div className="display-btn">
        <button className="go-back-btn" onClick={()=>y.push("/")}>Go Back</button>
        <button className="go-back">«</button>
        </div>

        <div className="description">
            <h2>{text.name}</h2>
            <img src={text.url1} alt={text.url1L}/>
            <p>{text.description}</p>
            <Rating rate={text.rating} />
            
            <Link to={{pathname:`/trailer/${text.id}`, 
                        state:{
                            moviesData
                        }
                        }}>
                <button className="btn-trailer draw-border">Watch Trailer</button>
            </Link>
            <br/>
        </div>
      <Switch>
        <Route path="/trailer/:id" render={(props) => <div><Trailer {...props}/></div>} />
        </Switch>
      </>
      </Router>
    )
}

export default Description