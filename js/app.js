'use strict'

let numberGuess = parseInt(prompt('What number am I thinking of?'));
let guesses = 4;

while(guesses > 0) {
    if(numberGuess !== 3) {
        let numberGuess = parseInt(prompt('Try again.'));
        guesses--;
        console.log(guesses);
    } else {
        alert('you got it! my number was 3');
        console.log(guesses);
    }
}

// function isYesorNo(response) {
//     response = response.toLowerCase();

//     if(response === 'yes' || response === 'no') {
//         return(response);
//     } 
//     else {
//     } 
// }

// function checkAnswer(response, right, wrong) {
//     response = isYesorNo(response);

//     if(response === 'yes') {
//         alert(right);
//     } else {
//         alert(wrong);
//     }
// }

// let username = prompt('What\'s your name?');
// alert('Welcome to my site, '+ username);
// checkAnswer(prompt('Am I young?'), 'Yes, I\'m young', 'I\'m not old.');
// checkAnswer(prompt('Am I short?'), 'Correct, I\'m only 5\'8"', 'I\'m not tall.');
// checkAnswer(prompt('Do I own a dog?'), 'Yes, I do own a dog.', 'Wrong, I do own a dog');
// checkAnswer(prompt('Is my dog\'s name Doug?'), 'Yes, his name is Doug', 'Think again.');
// checkAnswer(prompt('Do I live in a house?'), 'Yes, I live in a house', 'Wrong, I do live in a house');

alert('See you around, '+ username);