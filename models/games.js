const mongoose  = require('mongoose');
const gameschema = new mongoose.Schema({
    Title: String,
    Year: String,
    Studio: String,
    Publisher:String,
    Genre:String,
    Console:String
})

const Game = mongoose.model('Game', gameschema);
module.exports = {Game}