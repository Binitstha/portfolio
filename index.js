const list = [
    {
        id: 1,
        category: "others",
        projectName: "Calculator",
        className: "fa-solid fa-calculator",
        discription: "The project provides a straightforward and efficient way to build a functional calculator using JavaScript and the eval keyword. It supports addition, subtraction, multiplication, and division operations, enabling users to perform calculations with ease.",
        link: "Calculator\index.html",
    },
    {
        id: 2,
        category: "others",
        projectName: "Stopwatch",
        className: "fa-solid fa-stopwatch",
        discription: "The project provides a simple yet effective way to implement a stopwatch functionality in JavaScript using the Date.now() method to accurately measure time.The stopwatch features start, stop,and reset functionalities, allowing users to control the timing accurately.",
        link: "StopWatch\a1.html",
    },
    {
        id: 3,
        category: "games",
        projectName: "Tik tak toe",
        className: "fa-solid fa-gamepad",
        discription: "The project includes logic to check for a winning combination, which occurs when a player successfully forms a line of their symbols horizontally, vertically, or diagonally. When all cells on the board are filled without a winning combination game will be ended as tie.",
        link: "tik tak toe\index.html",
    },
    {
        id: 4,
        category: "games",
        projectName: "Rock paper scissors",
        className: "fa-solid fa-hands",
        discription: "The project includes logic to compare the player's choice with the computer's choice and display the outcome on the screen, indicating whether the player wins, loses, or it's a tie.This JavaScript project offers an enjoyable and interactive way to play game directly in the browser.",
        link: "Rock Paper Scissors/Index.html",
    },
]
const project = document.querySelector(".project")
const btns = document.querySelectorAll(".btn")

window.addEventListener("DOMContentLoaded", () => {
    displayDom(list)
})

btns.forEach(function (btn) {
    btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.ids
        const menuCategory = list.filter((listItem) => {
            if (listItem.category === category) {
                return listItem
            }

        })
            if (category === "all") {
                displayDom(list)
            }
            else {
                displayDom(menuCategory)
            }
        // console.log(menuCategory)
    })

})
function displayDom(list) {
    let displayList = list.map((item) => {
        return `<div class="project1">
                <i class="${item.className}" style="width: 100%"
                ><span style="margin-left: 5%">${item.projectName}</span></i>
                <div>${item.discription}</div>
                <a href="${item.link}"><button class="preview">Preview</button></a>
                </div>`
    })
    displayList = displayList.join("")
    project.innerHTML = displayList
}