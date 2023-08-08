let secondsLeft = 60;
let questionCount = 0;
let score = document.getElementById('highscores');
let timerDisplay = document.getElementById('time');
const startButton = document.getElementById('start-button');

const questions = [ 
    {
        Q: 'Quenstions 1',
        A: ['a','b','c','d'],
        C: 'b'
    },
    {
        Q: 'Quenstions 2',
        A: ['a','b','c','d'],
        C: 'b'
    },
    {
        Q: 'Quenstions 3',
        A: ['a','b','c','d'],
        C: 'b'
    },
    {
        Q: 'Quenstions 4',
        A: ['a','b','c','d'],
        C: 'b'
    },
    {
        Q: 'Quenstions 5',
        A: ['a','b','c','d'],
        C: 'b'
    }
]


function timer() {
    const timerInterval = setInterval(function () {
        secondsLeft--;
        timerDisplay.textContent = secondsLeft;
      
        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

startButton.addEventListener('click', () => {

    timer(); 
    startQuiz();
})

function startQuiz() {
    showQuestion();

}


function showQuestion() {
    const questionBox = document.getElementById('questions')
    const currentQuestion = questions[questionCount]
}


// function checkAnswer {

// }