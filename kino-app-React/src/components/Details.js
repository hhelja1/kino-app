import React from 'react'
import '../css/Details.css'

class Details extends React.Component {

    clickGoBack = () => {
        this.props.onGoBack();
    }
    render(){return(
        /*<div className="Movie">
            <img src={props.MovieImage} height="250" width="190"/>
            <h3 className="Movie_name">{props.MovieName}</h3>
            <h4 className="Movie_duration">{props.MovieDuration}</h4>
            <h4 className="Movie_releaseDate">{props.MovieReleaseDate}</h4>
            <button className="Movie_seeMore">See more..</button>
        </div>*/
        <div className='Details'>
        <img className='poster' src={this.props.data.posterURL} />
            <h3 className="Movie_name">Naziv: {this.props.data.naziv}</h3>
            <h4 className="Movie_duration">Trajanje: {this.props.data.trajanje}</h4>
            <h4 className="Movie_releaseDate">Datum: {this.props.data.datumRelease}</h4>
            <p className='sinopsis'><h4>Sinopsis: </h4>{this.props.data.sinopsis}</p>
            <button className="goBack" onClick={this.clickGoBack}>Go back..</button>
        </div>
    );

}
}

export default Details;