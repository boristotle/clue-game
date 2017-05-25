1.  Create a get route to send the html page to the client when they visit the url '/cluegame'
      
    add the following to your get request in order to do so: 
      return res.sendFile(path.join(__dirname, 'index.html'));


2.  Create a post route to '/guess', that will send the users input to the server when they submit their guess.

3.  Create a variable called userGuesses that will be an array.

4.  Create a variable called correctRoom and assign it to one of the folowing rooms: 
    Dining Room, Kitchen, Hall, Conservatory, and Library

5.  Create a variable called correctWeapon and assign it to one of the following weapons:
    candlestick, knife, revolver, rope, and poison

6.  Create javascript logic in your post route that will send information back to the user that says whether
   they got the room right, the weapon right, or both right.  

7.  Each time the user makes a guess, add their guess (as an object with keys name and room) 
    to the userGuesses array.  

8.  If they get both right send back info telling them they solved the case,
    how many guesses it took and an array of all of their guesses
