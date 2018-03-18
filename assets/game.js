var guessChoice = event.key;
var computerChoice = ["a", "b", "...", "z"]

document.write("<h1 id=titleAnimation> Phsychic Game </h1>")
document.getElementById("titleAnimation").innerHTML = "My Phsychic Game";

var guessChoice = prompt("Guess What Letter I'm thinking of ?");



document.onkeyup = function(event) {


        var guessChoice = String.fromCharCode(event.keycode).toLowerCase();
        var computerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];


        if (guessChoice === computerChoice) {
            alert("You Win ");
        }
        console.log("load event detected!");