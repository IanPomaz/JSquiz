var questions = [ 
    {
        question: "What is the main purpose for Javascript?",
        choices: ["Structure", "Styling", "Functionality", "All of the above"],
        answer: 2,
    },
    {
        question: "q",
        choices: ["a"],
        answer: 0,
    },
    {
        question: "q",
        choices: ["a"],
        answer: 0,
    },
    {
        question: "q",
        choices: ["a"],
        answer: 0,
    },

]

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
    startButton.classList.add("hide");
    //remove the start element
    var start = document.getElementById("start").remove();
    
}
