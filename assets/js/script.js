// var questions = [ 
//     {
//         question1: "What is the main purpose for Javascript?",
//         choices1: ["Structure", "Styling", "Functionality", "All of the above"],
//         answer1: 2,
//     },
//     {
//         question2: "q",
//         choices2: ["a"],
//         answer2: 0,
//     },
//     {
//         question3: "q",
//         choices3: ["a"],
//         answer3: 0,
//     },
//     {
//         question4: "q",
//         choices4: ["a"],
//         answer4: 0,
//     },

// ]

var questionIndex = 0;
var timer = 60;
var timerInterval;
var score = 0;
var startButton = document.getElementById("start-button");
var questionBox = document.getElementById("question-box");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var timer = document.getElementById("timer");
var scoreForm = document.getElementById("score");

addEventListener("click", startQuiz)

function startQuiz() {
    //remove the start button
    // startButton.classList.add("hide");
    //remove the start element
    // var start = document.getElementById("start").remove();
    //add the question
    document.getElementById("question").innerHTML = questions.question1;
    //add the answer
    //make the answers clickable
    //assign the correct answer
}
function showQuestion() {
        //add the question
        document.getElementById("question").innerHTML = questions.question1;
        console.log(questions.question1)
        //add the answer
        //make the answers clickable
        //assign the correct answer
}
showQuestion()

// function checkAnswer {

// }