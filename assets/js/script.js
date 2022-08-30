// use arrow syntax to make functions concise. e.g. () => {}

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

})

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("options"));
console.log(choices)

let currentQ = {}
let acceptedA = false // Stops players from starting the game before everything loads
let currentScore = 0
let questionNo = 0
let noOfQuestions = []

let questions = [
    {
        question: "What is the capital city of England?",
        choice1: "Birmingham",
        choice2: "London",
        choice3: "Northfield",
        choice4: "Elizabeth",
        answer: 2,
    },

    {
        question: "What is the capital city of Northern Ireland?",
        choice1: "Wales",
        choice2: "Belfast",
        choice3: "Southern Ireland",
        choice4: "Elizabeth",
        answer: 2,
    },
    {
        question: "What is the capital city of Scotland?",
        choice1: "Edinburgh ",
        choice2: "London",
        choice3: "Mayfield",
        choice4: "Boston",
        answer: 1,
    },
    {
        question: "What is the capital city of Wales?",
        choice1: "Ireland",
        choice2: "London",
        choice3: "Cardiff",
        choice4: "Elizabeth",
        answer: 3,
    },
    {
        question: "What is the capital city of Spain?",
        choice1: "Birmingham",
        choice2: "London",
        choice3: "Northfield",
        choice4: "Madrid",
        answer: 4,
    },
    {
        question: "What is the capital city of Italy?",
        choice1: "Rome",
        choice2: "London",
        choice3: "Northfield",
        choice4: "Elizabeth",
        answer: 1,
    },
    {
        question: "What is the capital city of Germany?",
        choice1: "Berlin",
        choice2: "London",
        choice3: "Northfield",
        choice4: "Elizabeth",
        answer: 1,
    },
    {
        question: "What is the capital city of France?",
        choice1: "Birmingham",
        choice2: "London",
        choice3: "Paris",
        choice4: "Elizabeth",
        answer: 3,
    },
    {
        question: "What is the capital city of Greece?",
        choice1: "Birmingham",
        choice2: "Athens",
        choice3: "Northfield",
        choice4: "Elizabeth",
        answer: 2,
    },
    {
        question: "What is the capital city of North Macedonia?",
        choice1: "Birmingham",
        choice2: "London",
        choice3: "Skopje",
        choice4: "Elizabeth",
        answer: 3,
    },
]

// const correctIncrement = 5
const maxQuestions = 10

startGame = () => {
    questionNo = 0
    currentScore = 0
    noOfQuestions = [...questions]    //  use ... (spread operator) to make a full copy of all questions
    console.log(noOfQuestions)
    nextQuestion()
}

nextQuestion = () => {
    questionNo++
    const questionsIndex = Math.floor(Math.random() * noOfQuestions.length)
    currentQ = noOfQuestions[questionsIndex]
    question.innerText = currentQ.question

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQ["choice" + number]
    })

    noOfQuestions.splice(questionsIndex, 1) //  This should remove the question from the game so it doesnt repeat
    acceptedA = true    // This allows players to answer the questions

    if (noOfQuestions.length === 0 || questionNo >= maxQuestions) {
        alert("Game Over!" +
            " Thanks for playing :-)")
    }
}


// const scoreTotal = document.getElementById("total")
const correctIncrement = 5
function addScore() {
    let previousScore = parseInt(document.getElementById("total").innerText)
    document.getElementById("total").innerText = correctIncrement
    previousScore = correctIncrement
    
}


choices.forEach(choice => {
    choice.addEventListener('click', e => {
        console.log(e.target)// This is to check that the button clicks matches what's excpected via console
        if (!acceptedA) return
        acceptedA = false;
        const chosenButton = e.target
        const chosenChoice = chosenButton.dataset["number"] // to fix - something is going wrong here

        //trying some ternary
        const applyClass = chosenChoice == currentQ.answer ? "Right" : "Wrong"

        console.log(applyClass) //Checking if it worked

        if (applyClass == "Right") {
            addScore()
        }


        chosenButton.classList.add(applyClass)


        setTimeout(() => {
            chosenButton.classList.remove(applyClass)
            nextQuestion()
        }, 1000)



    })
})

// function addScore() {
// let previousScore = parseInt(document.getElementById("total").innerText)
// document.getElementById("total").innerText = ++previousScore
// }


// addScore = num => {
//     total += num;
//     scoreTotal.innerText = total;
// }

startGame()














