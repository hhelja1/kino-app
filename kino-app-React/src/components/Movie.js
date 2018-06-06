import React from 'react'
import '../css/Movie.css'

class Movie extends React.Component {

    clickSeeMore = ()=>{
        this.props.onSeeMore(this.props.data);
    }
    render(){
        return(
        <div className="Movie">
            <img src={this.props.data.posterURL} height="250" width="190"/>
            <h3 className="Movie_name">{this.props.data.naziv}</h3>
            <h4 className="Movie_duration">{this.props.data.trajanje}</h4>
            <h4 className="Movie_releaseDate">{this.props.data.datumRelease}</h4>
            <button className="Movie_seeMore" onClick={this.clickSeeMore}>See more..</button>
        </div>)
    }

}

export default Movie;