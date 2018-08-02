import React from 'react'
import Showtime from '../components/Showtime';
import Seat from '../components/Seat';
import '../css/MovieLibrary.css'
import '../css/Showtime.css'
import '../css/ShowtimeLibrary.css'

class ShowtimeLibrary extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            Showtimes :[],
            showSeats: false,
            projekcija: {brojSale: "",
            datumProjekcije:"" ,
            nazivFilma: "",
            cijenaKarte: 0,
            sjedista: []
        }
        }
    } 
    
    componentDidMount(){
        fetch('http://localhost:8086/api/vratiListuProjekcija')
        .then(function(response) {
            /*if (!response.ok) {
                response.json().then(function(data) {
                console.log(response.status);
                });        
            }*/
            return response.json();
        }) 
        .then(data => {
            this.setState({Showtimes: data});
            
        console.log(this.state.Showtimes);

        })
    }
    handleReserve = (data)=>{
        this.setState({showSeats: true, projekcija: data});
    }
    
    render(){

        return(
            <div className='ShowtimesLibrary'>
               
               {this.state.showSeats ?
               <div className="ShowtimeDetails">
                <h3 className = "detNaziv">{this.state.projekcija.nazivFilma}</h3>
                <h4 className = "detSala">Sala: {this.state.projekcija.brojSale}</h4>
                <h4 className = "detSala">Cijena: {this.state.projekcija.cijenaKarte}KM</h4>
                <div className="Seats">
                        {this.state.projekcija.sjedista.map((s) => {
                        return <Seat data = {s}/>
                        }
                    )}
                    </div>
                </div> :
               <div className='Showtimes_list'>
                {this.state.Showtimes.map((showtime) => {
                       return <Showtime data = {showtime} onReserve= {this.handleReserve}/>
                    }
                )}
                </div>}
            </div>
        );
    }
    
}

export default ShowtimeLibrary;