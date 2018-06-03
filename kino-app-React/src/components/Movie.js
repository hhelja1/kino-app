import React from 'react'
import '../css/Movie.css'

const Movie = (props) => {

    return(
        <div className="Movie">
            <img src={props.MovieImage} height="250" width="190"/>
            <h3 className="Movie_name">{props.MovieName}</h3>
            <h4 className="Movie_duration">{props.MovieDuration}</h4>
            <h4 className="Movie_releaseDate">{props.MovieReleaseDate}</h4>
            <button className="Movie_seeMore">See more..</button>
        </div>
    );

}

export default Movie;