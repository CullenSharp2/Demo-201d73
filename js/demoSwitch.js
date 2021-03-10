'use strict'

//switch to find my favorite color
switch (prompt('what\'s my favorite color').toLowerCase()) {
    case 'orange' :
        console.log('Orange is my favorite!');
        break;
    case 'yellow' :
        console.log('Yellow is my favorite!');
        break;
    case 'teal' :
        console.log('Teal is my favorite!');
        break;
    default:
        console.log('Sorry, you guessed wrong...')
}