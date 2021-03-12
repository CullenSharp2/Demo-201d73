'use strict'

function getUsername(){
    let username = prompt('What\'s your name?');
    alert('Welcome to my site, '+ username);
}

getUsername();

function guessingGame1(guesses,answers,isCorrect){
   while(guesses2 > 0 && isCorrect === false) {
        let guess = parseInt(prompt('What number am I thinking of between 0 and 20?'));
    
        for(let i = 0; i < answers.length; i++) {
            if(guess === answers[i]) {
                alert('You got it. Possible answers were 6, 10, and 20.');
                isCorrect = true;
                score++;
                break;
            } 
        }
        if (guesses === 1) {
            alert('Sorry, you\'re out of guesses. Possible answers were 6, 10, and 20.');
            break;
        } 
        guesses--;
   }
}

 guessingGame1(6,[6,10,20],false);

  function guessingGame2(guesses){
        while(guesses > 0) {
        let guess = parseInt(prompt('What number between 0 and 10 am I thinking of?'));

        if(guess !== 3 && guesses === 1) {
            alert('Sorry, you\'re out of guesses. The number was 3.');
            guesses--;
        } else if (guess === 3) {
            alert('Congratulations you guessed right. The number was 3.');
            score++;
            break;
        } else if (guess > 3) {
            alert('Your guess was too high.');
            guesses--;
        } else if (guess < 3) {
            alert('Your guess was too low.');
            guesses--;
        }   
    }  
  }

  guessingGame2(4);



function isYesorNo(response) {
    response = response.toLowerCase();

    if(response === 'yes' || response === 'no') {
        return(response);
    } 
    else {
    } 
}

function checkAnswer(response, right, wrong) {
    response = isYesorNo(response);

    if(response === 'yes') {
        alert(right);
        score++;
    } else {
        alert(wrong);
    }
}

checkAnswer(prompt('Am I young?'), 'Yes, I\'m young', 'I\'m not old.');
checkAnswer(prompt('Am I short?'), 'Correct, I\'m only 5\'8"', 'I\'m not tall.');
checkAnswer(prompt('Do I own a dog?'), 'Yes, I do own a dog.', 'Wrong, I do own a dog');
checkAnswer(prompt('Is my dog\'s name Doug?'), 'Yes, his name is Doug', 'Think again.');
checkAnswer(prompt('Do I live in a house?'), 'Yes, I live in a house', 'Wrong, I do live in a house');

alert('See you around, '+ username +'. You scored ' + score + ' out of 7');