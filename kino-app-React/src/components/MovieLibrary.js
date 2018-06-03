import React from 'react'
import Movie from '../components/Movie'
import '../css/MovieLibrary.css'


class MovieLibrary extends React.Component {
    state = {
        Movies : [
            {MovieName: 'name', MovieReleaseDate: 'date', MovieDuration: 'duration', MovieImage: 'https://assets.mubi.com/images/notebook/post_images/22267/images-w1400.jpg?1474980339'},
            {MovieName: 'name2', MovieReleaseDate: 'date2', MovieDuration: 'duration', MovieImage: 'https://assets.mubi.com/images/notebook/post_images/22267/images-w1400.jpg?1474980339'},
            
        ]
    }
    
    render(){
        return(
            <div className='MovieLibrary'>
                <div className="MovieLibrary_grid">
                {this.state.Movies.map(function(movie) {
                       return <Movie MovieName={movie.MovieName} 
                       MovieDuration={movie.MovieDuration} 
                       MovieReleaseDate = {movie.MovieReleaseDate}
                       MovieImage = {movie.MovieImage}/>

                })}
                </div>
            </div>
        );
    }
    
}

export default MovieLibrary;