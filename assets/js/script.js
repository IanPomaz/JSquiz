let secondsLeft = 60;
let questionCount = 0;
let score = document.getElementById('highscores');
let timerDisplay = document.getElementById('time');
let highScores = [];
const startButton = document.getElementById('start-button');

const questions = [ 
    {
        Q: 'Which one of these is a block of code designed to perform a particular task.',
        A: ['method','function','string','boolean'],
        C: 'function'
    },
    {
        Q: 'What are actions that can be performed on objects.',
        A: ['methods','variables','properties','inits'],
        C: 'variables'
    },
    {
        Q: 'Where doest JavaScript code go in an HTML document?',
        A: ['<js>','<script>','<div>','<button>'],
        C: '<js>'
    },
    {
        Q: 'How do you write greater than or equal to',
        A: ['>=','<','!<','>=!'],
        C: '>='
    },
    {
        Q: 'What does the "DOM" stand for in web development?',
        A: ['Document Order Model', 'Data Object Model', 'Document Object Model', 'Digital Output Module'],
        C: 'Document Object Model'
    }
]


function timer() {
    const timerInterval = setInterval(function () {
        secondsLeft--;
        timerDisplay.textContent = secondsLeft;
      
        if (secondsLeft <= 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            endGame();
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

function endGame() {
    const questionContainer = document.getElementById('questions');
    questionContainer.innerHTML = '';

    const gameOverMessage = document.createElement('h2');
    gameOverMessage.textContent = 'Game Over';

    const scoreMessage = document.createElement('p');
    scoreMessage.textContent = `Your final score: ${secondsLeft}`;

    const initialsInput = document.createElement('input');
    initialsInput.setAttribute('placeholder', 'Enter your initials');
    initialsInput.setAttribute('maxlength', '3'); // Limit initials to 3 characters

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save Score';
    saveButton.addEventListener('click', () => saveScore(initialsInput.value, secondsLeft));

    questionContainer.appendChild(gameOverMessage);
    questionContainer.appendChild(scoreMessage);
    questionContainer.appendChild(initialsInput);
    questionContainer.appendChild(saveButton);
}

function saveScore(initials, score) {

    localStorage.setItem('highscore', JSON.stringify({ initials, score }));
    highScores.push({ initials, score });
    displayHighScores();
}

function displayHighScores() {
    var hsList = document.getElementById('hslist');
    hsList.innerHTML = ''; 

    highScores.forEach((scoreObj) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${scoreObj.initials}: ${scoreObj.score}`;
        hsList.appendChild(listItem);
    });
}