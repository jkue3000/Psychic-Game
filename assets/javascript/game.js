// Array of letters
var letters = ['a', 'b', 'c', 'd', 'e',
			   'f', 'g', 'h', 'i', 'j',
			   'k', 'l', 'm', 'n', 'o',
			   'p', 'q', 'r', 's', 't',
			   'u', 'v', 'w', 'x', 'y', 
			   'z'];
//Score var
var lossCounter = 0;
var winCounter = 0;
var remainingGuess = 10;
var userAlreadyGuessed = [];

// Generate computer letter
var computerGuess = letters[Math.floor(Math.random() * letters.length)];

// var to add point to win
function userWin() {
	document.getElementById('win').innerHTML= "Wins :" + winCounter;
};

// var to add loss to loss
function userLossUpdate() {
	document.getElementById('loss').innerHTML = "Loss :" + lossCounter;
};

// var function to add user guessed to the userAlreadyGuessed array
function userAlreadyGuessedUpdate(){
	document.getElementById('wrongGuess').innerHTML = "Wrong Guesses :" + userAlreadyGuessed.join(', ');
};

userWin();
userLoss();


// function to reset the scores to the begining

// Key event listener
document.onkeyup = function(event){

	remainingGuess--;
	var userGuess = event.key.toLowerCase();
	

	if (letters.indexOf(userGuess) === -1) {
		alert('Please choose a letter!');

	} else if (userGuess.indexOf(userAlreadyGuessed)){
		alert('Pick a differnt letter!');
	};
// need to check if the userGuess is a letter if it is then send to the userAlreadyGuessed if not then needs to send to an null
};
userAlreadyGuessedUpdate();






