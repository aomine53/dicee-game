
var diceArr = ["E:\\study material\\Web Development\\Dicee Challenge - Starting Files\\images\\dice1.png",
"E:\\study material\\Web Development\\Dicee Challenge - Starting Files\\images\\dice2.png",
"E:\\study material\\Web Development\\Dicee Challenge - Starting Files\\images\\dice3.png",
"E:\\study material\\Web Development\\Dicee Challenge - Starting Files\\images\\dice4.png",
"E:\\study material\\Web Development\\Dicee Challenge - Starting Files\\images\\dice5.png",
"E:\\study material\\Web Development\\Dicee Challenge - Starting Files\\images\\dice6.png"];

var diceArr1 = ["dice1","dice2","dice3","dice4","dice5","dice6"];
var random1 = Math.floor(Math.random()*6);
var random2 = Math.floor(Math.random()*6);

var randomSrc = [ diceArr[random1] , diceArr[random2] ];
var randomAlt = [ diceArr1[random1] , diceArr1[random2] ];

var dice1 = document.querySelectorAll(".dicee")[0];
var dice2 = document.querySelectorAll(".dicee")[1];

dice1.setAttribute("src",randomSrc[0]);
dice2.setAttribute("src",randomSrc[1]);
dice1.setAttribute("alt",randomAlt[0]);
dice2.setAttribute("alt",randomAlt[1]);

var heading = document.querySelector("h1");

if(random1>random2)
{
  heading.innerHTML = "🚩 Player 1 wins!";
}
else if(random2>random1)
{
  heading.innerHTML = "Player 2 wins! 🚩";
}else
{
  heading.innerHTML = "Draw >_<";
}
