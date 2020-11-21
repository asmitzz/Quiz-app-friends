var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
var userName = readlineSync.question("Enter your name : ");
var highscore = [
  {Name:"Ayush         ",Score:8},
  {Name:"Arpit         ",Score:7},
  {Name:"Udit          ",Score:7},
  {Name:"Arjita        ",Score:5},
  {Name:"sandeep       ",Score:3}
  ];

console.log(chalk.green("Welcome! ")+userName+" to Do you know "+chalk.yellowBright("'Asmit'"));

console.log('----------------------------');

function play( question,answer ){
  var currentAnswer = readlineSync.question();
  console.log("You answered: ("+currentAnswer+")");
  if( answer.toUpperCase() === currentAnswer.toUpperCase() ){
       console.log(chalk.green('Correct answer!'));
       score++;
  }
  else{
       console.log(chalk.red("Wrong answer!"));
  }
     console.log('Current score : '+score);
     console.log('--------------');
}

var questions = 
[
  { ques:"Am i older than 20yrs ?", ans: "no"},
  { ques:"Am i currently lived in the city jabalpur ?", ans: "yes"},
  { ques:"Which is my favourite game?", ans: "cricket"},
  { ques:"Which is my favourite color?", ans: "black"},
  { ques:"Do i love coding?", ans: "yes"},
  { ques:"What is my Nickname?", ans: "shanu"},
  { ques:"Which is my hometown?", ans: "shivpuri"},
  { ques:"Whhich web series i like the most?", ans: "mirzapur"},
  { ques:"Am i doing engineering?", ans: "yes"},
  { ques:"What is the name of my twin brother", ans: "ayush"}
]

for( var i = 0; i < questions.length; i++ ){
  console.log( (i+1)+"."+questions[i].ques);
  play( questions[i].ques,questions[i].ans );
}

console.log(chalk.yellowBright("Game finished"));
console.log("Your Final score is: "+score);
console.log();

if( score > highscore[0].Score ){

  console.log(chalk.green('☆彡(ノ^ ^)ノ Congratulations ヘ(^ ^ヘ)☆彡')+"you have made a new high score by beating "+highscore[0].Name+`
  
  Take a screenshot and send it to me so that i can update the leaderboard
  `);

}

var checkHighscore = readlineSync.question("Do you want to check the leaderboard? ");

if( checkHighscore.toLowerCase() === "yes" ){
  for( var i = 0; i < highscore.length; i++ ){
    console.log((i+1)+". "+"Name : "+highscore[i].Name+" Score : "+highscore[i].Score);
  }
}

console.log(chalk.yellow(`
Thanks for playing!`));