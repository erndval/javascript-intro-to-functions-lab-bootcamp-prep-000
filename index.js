function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){

var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase

var uppercase = 'HELLO!'
uppercase.toUpperCase() === uppercase

var mixedCase = 'Hi there!'
mixedCase.toLowerCase() === mixedCase
mixedCase.toUpperCase() === mixedCase

if (string === 'I love you, Grandma') {
  return 'I love you, too.'
}

else if (string === lowercase) {
  return 'I can\'t hear you!'
}

else (string === uppercase); {
  return 'YES INDEED!'
}

}