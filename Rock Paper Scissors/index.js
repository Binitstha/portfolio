const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const winner = document.querySelector("#winner")
const btn = document.querySelectorAll(".btn")
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
let player
let Computer

playerValue()

function playerValue() {
    rock.addEventListener("click", () => {
        player = "ROCK"
        result()
    })
    paper.addEventListener("click", () => {
        player = "PAPER"
        result()
    })
    scissors.addEventListener("click", () => {
        player = "SCISSORS"
        result()
    })
}
    function result() {
        playerText.textContent = `You : ${player}`
        computerValue()
        computerText.textContent = `Computer : ${Computer}`
        winner.textContent = `${checkwinner()}`
    }
    function computerValue() {
        const randNum = Math.floor(Math.random() * 3) + 1
        switch (randNum) {
            case 1:
                Computer = "ROCK"
                break
            case 2:
                Computer = "PAPER"
                break
            case 3:
                Computer = "SCISSORS"
                break
        }
    }

    function checkwinner() {
        if (Computer == player) {
            return "Draw"
        }
        else if (Computer == "ROCK") {
            return (player == "PAPER") ? "You win" : "You lose"
        }
        else if (Computer == "PAPER") {
            return (player == "SCISSORS") ? "You win" : "You lose"
        }
        else if (Computer == "SCISSORS") {
            return (player == "ROCK") ? "You win" : "You lose"
        }
    }