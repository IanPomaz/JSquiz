let secondsLeft = 60;
let questionCount = 0;
let score = document.getElementById('highscores');
let timerDisplay = document.getElementById('time');
const startButton = document.getElementById('start-button');

const questions = [ 
    {
        Q: 'Question 1',
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
    const startBox = document.getElementById('start');
        while (startBox.firstChild) {
            startBox.removeChild(startBox.firstChild);
    }
    const questionBox = document.getElementById('questions');
    const currentQuestion = questions[questionCount];

    const questionText = document.createElement('h2');
    questionText.textContent = currentQuestion.Q;
    questionBox.appendChild(questionText);

    const answerList = document.createElement('ul');
    currentQuestion.A.forEach((answer) => {
        const answerItem = document.createElement('button');
        answerItem.textContent = answer;
        answerList.appendChild(answerItem);
        answerItem.addEventListener('click', () => checkAnswer(answer, currentQuestion.C));
    });
    questionBox.appendChild(answerList);
}



function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        questionCount++;
        if (questionCount < questions.length) {
            clearQuestion();
            showQuestion();
        } else {
            endGame();
        }
    } else {
        secondsLeft -= 10;
    }
}

function clearQuestion() {
    const questionContainer = document.getElementById('questions');
    while (questionContainer.firstChild) {
        questionContainer.removeChild(questionContainer.firstChild);
    }
}