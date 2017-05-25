'use strict';
let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let userGuesses = [];
let correctRoom = 'conservatory';
let correctWeapon = 'poison';


app.get('/cluegame', function(req, res, next){
    return res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/guess', function(req, res, next){
   console.log('req.body ', req.body);
   
   let room = req.body.room;
   let weapon = req.body.weapon;
   userGuesses.push(req.body);
    
    if (room === correctRoom && weapon === correctWeapon){
       console.log('you guess both correctly');
       res.send(`You guessed both correctly and it took you ${userGuesses.length} guesses
       Here were your guesses ${JSON.stringify(userGuesses)}`);
   }
   
   else if (room === correctRoom) {
        console.log('you guessed the correct room');
   }
   
   else if (weapon === correctWeapon) {
        console.log('you guessed the correct weapon');
   } 
   else {
       console.log('whoa, try again you missed all of em');
   }
   
})



app.listen(8080, function() {
    console.log('The app is listening on port 8080!');
});