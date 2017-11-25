// Array of letters
var letters = ['a', 'b', 'c', 'd', 'e',
			   'f', 'g', 'h', 'i', 'j',
			   'k', 'l', 'm', 'n', 'o',
			   'p', 'q', 'r', 's', 't',
			   'u', 'v', 'w', 'x', 'y', 
			   'z'];

// Blank array to log the wrong guesses to then add to the inner.HTML
var wrongUserGuess = []

// Generate computer letter
document.onkeyup = function(event) {
	
	// read the user guess input 
	var userGuess = event.key;
	
	// sends the user guess to the wrong guess HTML
	document.getElementById('wrongGuess').innerHTML = userGuess;
};


// Read User input then log to the right or wrong array

// If user guess equals to computer random generation then +1 to the user win score 

// If wrong then -1 remaining try & then +1 the wrong user guess to the wrong guess array