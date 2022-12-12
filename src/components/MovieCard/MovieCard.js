import React from 'react'

import MovieRated from './rate';
function MovieCard(props) {
    var { movieTitle, Img, Rate, url, Description } = props

    return (
        <div class="card-container">
            <div class="card-container1">
                <img class="movieImage" src={Img} url=" Picture Not avaible"></img>
                <div class='trailer'>
                <p >{Description}</p>
            </div>
            </div>
            <div class="card-container2">
                <p class="movieTitle" >{movieTitle}</p>
            </div>
            <div class="card-container3">
                <MovieRated N={Rate} />
                <button onClick={() => window.open(url)}
                    value='click here' class="Watch">Watch Trailer </button>
            </div>
            
        </div>

    )
}
export default MovieCard
