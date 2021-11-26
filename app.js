var userScore = 0;
var computerScore = 0;
const computerChoiceImage_div = document.getElementById('comp-choice');
var computerChoice = "";
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div= document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
var compChoiceClass = "";
var isRendering = false;


function computerOptions() {
    const options = ["Rock","Paper","Scissors"];
    const randomIndex= Math.floor(Math.random()*3);
    compChoiceClass = options[randomIndex] + "-comp-choice";
    return options[randomIndex];
}

function renderGame(userChoice) { 
    if (isRendering===false) {
        isRendering = true;
        computerChoice = computerOptions();
        rock_div.classList.remove("gray-glow","green-glow", "red-glow");
        paper_div.classList.remove("gray-glow","green-glow", "red-glow");
        scissors_div.classList.remove("gray-glow","green-glow", "red-glow");
        computerChoiceImage_div.classList.remove("gray-glow","green-glow", "red-glow");
        computerChoiceImage_div.classList.remove("Rock-comp-choice", "Paper-comp-choice", "Scissors-comp-choice", "anime");
        computerChoiceImage_div.classList.add("anime");
        setTimeout(() => {computerChoiceImage_div.classList.replace("anime", compChoiceClass)},1500);
        setTimeout(() => {result_div.innerHTML = "Rock..."},100);
        setTimeout(() => {result_div.innerHTML = "Rock... Paper..."},550);
        setTimeout(() => {result_div.innerHTML = "Rock... Paper... Scissors..."},1000);
        setTimeout(() => {
            switch (userChoice + computerChoice) {
                case "RockScissors":
                case "ScissorsPaper":
                case "PaperRock":
                    userWin(userChoice, computerChoice);
                    break;
                case "RockPaper":
                case "ScissorsRock":
                case "PaperScissors":
                    userLose(userChoice, computerChoice);
                    break;
                case "RockRock":
                case "ScissorsScissors":
                case "PaperPaper":
                    Draw(userChoice, computerChoice);
                    break;
            }
        },1500);
    }
}

function userWin(userChoice, computerChoice) {
    userScore ++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
    document.getElementById(userChoice).classList.add("green-glow");
    computerChoiceImage_div.classList.add("red-glow");
    isRendering = false;
}

function userLose(userChoice, computerChoice) {
    computerScore ++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = userChoice + " loses to " + computerChoice + ". You lose!";
    document.getElementById(userChoice).classList.add("red-glow");
    computerChoiceImage_div.classList.add("green-glow");
    isRendering = false;
}

function Draw(userChoice, computerChoice) {
    result_div.innerHTML = "You both chose " + userChoice + ". It's a draw...";
    document.getElementById(userChoice).classList.add("gray-glow");
    computerChoiceImage_div.classList.add("gray-glow");
    isRendering = false;
}

rock_div.addEventListener("click", function() {renderGame("Rock")});
paper_div.addEventListener("click", function() {renderGame("Paper")});
scissors_div.addEventListener("click", function() {renderGame("Scissors")});