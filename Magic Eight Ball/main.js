let userName = 'Adnan';

console.log(`Hello ${userName}`);

let userQuestion = 'Is Barcelona going to win today?';

console.log(`The user asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eigthBall = '';

if (randomNumber == 0){
  eigthBall = 'It is certain';
} else if (randomNumber == 1){
  eigthBall = 'It is decidedly so';
} else if (randomNumber == 2){
  eigthBall = 'Reply hazy try again';
} else if (randomNumber == 3){
  eigthBall = 'Cannot predict now';
} else if (randomNumber == 4){
  eigthBall = 'Do not count on it';
} else if (randomNumber == 5){
  eigthBall = 'My sources say no';
} else if (randomNumber == 6){
  eigthBall = 'Outlook not so good';
} else if (randomNumber == 7){
  eigthBall = 'Signs point to yes';
} 

console.log(eigthBall);
