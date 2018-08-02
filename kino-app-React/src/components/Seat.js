import React, { Component } from 'react'
import '../css/Seat.css'

class Seat extends Component {
    
    
    render(){
        return(
        <div className="Seat">
            {this.props.data.stanje ?
            <img width = "30" height = "30" src="https://cdn3.iconfinder.com/data/icons/movie-entertainment-filled-outline-style/64/13_seat-movie-cinema-chair-theater-512.png" className = "seatTaken"/>:
            <input type="image" width = "30" height = "30" src="https://cdn3.iconfinder.com/data/icons/movie-entertainment-filled-outline-style/64/13_seat-movie-cinema-chair-theater-512.png" className = "seatBtn"/>
        } 
            </div>);
    }
}

export default Seat;