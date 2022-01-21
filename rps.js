const alert = document.querySelector(".alert")
const playerScore = document.querySelector(".player")
const computerScore = document.querySelector(".computer");
const rock = document.getElementsByClassName("rock")[0];
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const gameButtons = document.querySelectorAll(".btn")
const Gameresult = document.querySelector(".result")
let result;
let btns = ["rock", "paper", "scissors"];
let count = 0

rock.addEventListener("click", rockInPlay)
scissors.addEventListener("click", scissorsInPlay)
paper.addEventListener("click", paperInPlay)

function GameInPlay(comp, input) {
    switch (input) {
        case rock:
            if (comp == "rock") {
                result = "The player wins"
            } else if (comp == "paper") {
                result = "This is a draw"
            } else {
                result = "The House wins"
            }
            break
        case paper:
            if (comp == "rock") {
                result = "The player wins"
            } else if (comp == "paper") {
                result = "This is a draw"
            } else {
                result = "The House wins"
            }
            break
        case scissors:
            if (comp == "rock") {
                result = "The House wins"
            } else if (comp == "paper") {
                result = "The player wins"
            } else {
                result = "This is a draw"
            }
            break
        default:
            result = "This isnt part of the game";
    }
}

function rockInPlay() {
    let rand = Math.floor(Math.random() * btns.length);
    GameInPlay(btns[rand], rock)
    Gameresult.textContent = result
    AlertInDisplay(btns[rand], "paper")
    defaultClearing()
}

function paperInPlay() {
    let rand = Math.floor(Math.random() * btns.length);
    GameInPlay(btns[rand], paper)
    Gameresult.textContent = result
    AlertInDisplay(btns[rand], "paper")
    defaultClearing()

}

function scissorsInPlay() {
    let rand = Math.floor(Math.random() * btns.length);
    GameInPlay(btns[rand], scissors)
    Gameresult.textContent = result;
    AlertInDisplay(btns[rand], "scissors")
    defaultClearing()


}

function defaultClearing() {
    setTimeout(() => {
        Gameresult.textContent = "";
        alert.textContent = ""
    }, 3000)
}

function AlertInDisplay(comp, user) {
    alert.textContent = comp + ":" + user
    scoreRecoding()
}

function scoreRecoding() {
    if (Gameresult.textContent == "The player wins") {
        playerScore.textContent = count++
    }
    if (Gameresult.textContent == "The House wins") {
        computerScore.textContent = count++
    }
}