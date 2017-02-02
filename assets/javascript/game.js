var choices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var game = {
  wins: 0,
  losses: 0, 
  guessesleft: 9,
  yourguess:[],

  computerChoice: choices[Math.floor(Math.random() * choices.length)],

  reset: function () {
    this.guessesleft = 9;
    this.yourguess = [];
    this.computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(game);
  }
}

 console.log(game);


    //when user presses a key

document.onkeyup = function(event) {


  var userGuess = event.key.toLowerCase();

  if (event.keyCode >= 65 && event.keyCode <= 90){

    if (game.yourguess.indexOf(userGuess) == -1) {

            //if user guess is same as computer add to win
            if (userGuess === game.computerChoice) {
                //log win by adding plus 1 to wins
                game.wins++
                //reset startover
                game.reset();

            }

            else {
                game.guessesleft--
                game.yourguess.push(userGuess);
                           

              if ((game.guessesleft === 0)) {
                game.losses++
                game.reset();
              
              }
            }
            
                  //assignments are valid if correct keys are pressed
      document.getElementById('wins').value = game.wins;
      document.getElementById('losses').value = game.losses;
      document.getElementById('guessesleft').value = game.guessesleft;
      document.getElementById('yourguess').value = game.yourguess;

            }


      }}





