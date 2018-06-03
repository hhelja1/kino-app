var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

var routerAPI = express.Router();
mongoose.connect('mongodb+srv://kamilica:9rc2iokhpPAPzYNG@filmovicluster-lygx2.mongodb.net/projekcije?retryWrites=true')
var db = mongoose.connection;
var Schema = mongoose.Schema;

var projekcijeSchema =new Schema({
    brojSale: String,
    datumProjekcije: Date,
    nazivFilma: String,
    cijenaKarte: Number,
    sjedista: [
        {
            brojSjedista: Number,
            stanje: Boolean
        }
    ]
    
})
var projekcije = mongoose.model('projekcije',projekcijeSchema,'projekcije');
app.use(bodyParser.json());

routerAPI.get('/vratiListuProjekcija', function (req, res) {

    projekcije.find({}, function (err, data) {
        if (err) return handleError(err);
        console.log(data);
        res.send(data);
      });
})

//vratiListuProjekcija/:film
//vratiListuProjekcija/:brojSale

//rezervacija

app.use('/api', routerAPI);

var server = app.listen(8086, function () {
   var host = server.address().address
   var port = server.address().port
   
})
