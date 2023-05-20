var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", quizBuild);
var timer = "0";
//builds the quiz
function quizBuild(){
//when i press quizStartup it needs to reveal the quizQuestions
    var q1 = prompt("What is the main function of JavaScript? (a) To style a webpage (b) To give the webpage functionality (c) To give the webpage a foundation of code")
        if (q1 === "b") {
            
        } else {
            
        }
}
//shows results of the quiz and adds the score
function quizResult(){
    
}
const quizQuestions = [
    {
    questions: "What is the main function of JavaScript?",
    answers: {
        a: "To style a webpage",
        b: "To give the webpage functionality",
        c: "To give the webpage a foundation of code"
    },
    correctAnswer: "b"
    },
    {
        questions: "What is the main function of JavaScript?",
        answers: {
            a: "To style a webpage",
            b: "To give the webpage functionality",
            c: "To give the webpage a foundation of code"
        },
        correctAnswer: "b"
        }
];






















// for loop to run through all the questions and grade each question

// for (let i = 0; i < questions.length; i++) {
//     var answer = window.prompt(questions[i].prompt)
//     if (answer == questions[i].answer) {
//         score++; //if answer is equal to the correct answer of said question then add 1 score and alert correct
//         alert("Correct!");
//     } else {
//         alert("Wrong!"); //if it doesnt correspond to the correct answer in the questions variable then prompt wrong
//     }
// }
// }
// //variable for the score
// var score = 0;

// //quiz itself

// var questions = [
//     {
//         prompt"What is the main function of JavaScript?\n\
//             (a) To style a webpage\n\
//             (b) To give the webpage functionality\n\
//             (c) To give the webpage a foundation of code",
//         answer: "b"
//     },
//     {
//         prompt: "What is the main function of JavaScript?\n\
//             (a) To style a webpage\n\
//             (b) To give the webpage functionality\n\
//             (c) To give the webpage a foundation of code",
//         answer: "b"
//     },
// ]
