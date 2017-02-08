'use strict';

var userGenderCaseChange = prompt('Hi! welcome to my guessing game, about me! First question; am I a male or female?', 'male or female');
console.log('user thought I was a ' + userGenderCaseChange);
var myGender = userGenderCaseChange.toLowerCase();

if (myGender === 'male') {
  alert('That\'s right! Good guess.');
} else {
  var genderGuessTwoLower = prompt('nice try, guess again', 'male or female?');
  console.log('second user gender guess was: ' + genderGuessTwo);
  var genderGuessTwo = genderGuessTwoLower.toLowerCase();

  if (genderGuessTwoLower === 'male') {
    alert('you\'re learning!');
  } else {
    alert('you\'re hopeless.');
  }
};

var myAge = prompt('Next question; am I 20 years old, 25 years old or 27 years old?', 'guess my age');
console.log('user guessed I was: ' + myAge);
if (myAge === '25') {
  alert('you must think you\'re pretty smart.');
  console.log('user guessed my age the first time.');
} else if (myAge === '20' || myAge === '27') {
  var userAgeGuess2 = prompt('almost, try again');
  console.log('user guessed my age the second time.');
  if (userAgeGuess2 === '25') {
    alert('you must think you\'re pretty smart.');
  } else {
    var userAgeGuess3 = prompt('last try.');
    if (userAgeGuess3 === '25') {
      alert('Finally.');
    } else {
      alert('Sigh...');
      console.log('user never got my age.');
    };
  };
} else {
  alert('Sigh...');
  console.log('user never got my age.');
};

var juggleGuessLower = prompt('do you think I can juggle?');
var juggleGuess = juggleGuessLower.toLowerCase();

if (juggleGuess === 'yes' || juggleGuess === 'y') {
  var userJugglesCase = prompt('that\'s right, do you?');
  var userJuggles = userJugglesCase.toLowerCase();
  if (userJuggles === 'yes' || userJuggles === 'y') {
    alert('high five!');
    console.log('user can juggle');
  } else {
    alert('go learn yourself something.');
    console.log('user can not juggle');
  };
} else {
  alert('I\'m more of dork than you think.');
  var userJugglesCase2 = prompt('Can you juggle?');
  var userJuggles2 = userJugglesCase2.toLowerCase();
  if (userJuggles2 === 'yes' || userJuggles2 === 'y') {
    alert('high five!');
    console.log('user can juggle');
  } else {
    alert('go learn yourself something.');
    console.log('user can not juggle');
  };
};








