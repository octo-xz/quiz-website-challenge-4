var gameContainer = document.getElementById('theBigContainer');

var header = document.getElementById('header');

var quizContainer = document.getElementById('container-container');

var quizQuestion = document.getElementById('quiz-question');

var resultsContainer = document.getElementById('resultsContainer');

var outOfTime = document.getElementById('timerOut')

var startBtn = document.getElementById('gameStartBtn');

var countdown = document.getElementById('countdown');

var resultsBtn = document.getElementById('resultsBtn');

var backBtn = document.getElementById('backBtn');

var submitBtn  = document.getElementById('submitBtn')

var quest1 = document.getElementById('quiz-question')
var quest2 = document.getElementById('quiz-question')
var quest3 = document.getElementById('quiz-question')
var quest4 = document.getElementById('quiz-question')
var quest5 = document.getElementById('quiz-question')

var options = document.getElementById('options');
var op1 = document.getElementById('op1')
var op2 = document.getElementById('op2')
var op3 = document.getElementById('op3')
var op4 = document.getElementById('op4')

var quizStart = false;

var index = 0;

var timer = 5;

var interval;

var points = 0;

var questions =
    [{
        question: "What language is a mark up language?",
        options: {
            one: "1. CSS",
            two: "2. Python",
            three: "3. JavaScript",
            four: "4. HTML"
        },
        correct: "4. HTML"
    },

    {
        question: "What is a boolean?",
        options: {
            one: "1. A programming language",
            two: "2. A way of listening for user interaction",
            three: "3. A framework for CSS",
            four: "4. A type of true false variable"
        },
        correct: "4. A type of true false variable"
    },
    {
        question: "What is the not operator?",
        options: {
            one: "1. &&",
            two: "2. ||",
            three: "3. !",
            four: "4. $"
        },
        correct: "3. !"
    },
    {
        question: "What does the DOM stand for?",
        options: {
            one: "1. Dynamic Object Model",
            two: "2. Doran's Overview Manager",
            three: "3. Document Object Model",
            four: "4. Download On Motorcycle"
        },
        correct: "3. Document Object Model"
    },
    {
        question: "What phrase is often used as a first exercise in JavaScript?",
        options: {
            one: "1. Gotta catch 'em all!",
            two: "2. Hello World!",
            three: "3. What is up my dudes?",
            four: "4. I am sleepy"
        },
        correct: "2. Hello World!"
    }
    ]

var highScoresArray = JSON.parse(localStorage.getItem('highScores')) || []



//gotta have a buttons section :D and theyre pretty buttons hehehe
//starts the quiz
//disappears buttons for questions to take place 

function showBtn() {
    resultsBtn.style.display = 'block'
}

startBtn.addEventListener('click', function () {
    gameContainer.style.display = "block";
    startBtn.style.display = 'none';
    resultsBtn.style.display = 'none';
    backBtn.style.display = 'none';
    quizStart = true;
    timer = 15;
    index = 0;
    quizDisplay()

    renderTimer();

    interval = setInterval(function () {
        if (!quizStart) {
            return;
        }
        timer--;
        renderTimer();
        if (timer <= 0) {
            clearInterval(interval);
            resultsBtn.style.display = 'block'

        }
    }, 1000);

});

resultsBtn.addEventListener('click', function () {
    quizStart == false;
    startBtn.style.display = 'none';
    resultsBtn.style.display = 'none';
    backBtn.style.display = 'block';
    // localStorage.getItem(points);
    outOfTime.style.display = 'none';
    document.getElementById('scoreDisplay').innerHTML = ''
    var happyDays = document.createElement('h3')
    happyDays.textContent = 'Scores!'
    document.getElementById('scoreDisplay').appendChild(happyDays);
    

    for( var i = 0; i<highScoresArray.length; i++){
        var currScore = document.createElement('p')
        currScore.textContent = highScoresArray[i].initials + ': ' + highScoresArray[i].score
        document.getElementById('scoreDisplay').appendChild(currScore);
    }
    document.getElementById('scoreDisplay').style.display = 'block'

})

backBtn.addEventListener('click', function () {
    startBtn.style.display = 'block';
    resultsBtn.style.display = 'block';
    backBtn.style.display = 'none';
    outOfTime.style.display = 'none';
    header.style.display = 'none'
    document.getElementById('scoreDisplay').style.display = 'none'
})

function renderTimer() {
    countdown.textContent = timer + " seconds left!"
    if (timer == 1) {
        countdown.textContent = timer + " second left!"
    } else if (timer <= 0) {
        outOfTime.style.display = 'block'
        quizContainer.style.display = 'none'
        header.style.display = 'none'
        resultsBtn.style.display = 'block'
    }

}

function quizDisplay() {
    //first i want to set what questions the quiz will cycle through
    outOfTime.style.display = 'none'
    header.style.display = 'block'
    quizContainer.style.display = 'block'
    if (index >= questions.length) {
        //stop timer check
        //clear the page
        //view scores button check
        //prompt user to enter initials to add their score
        clearInterval(interval);
        quizContainer.style.display = 'none'
        //quiz not displaying again after pressing start the game possibly has to do with index not be reset?
        resultsContainer.style.display = 'block'
        // getScore();
    } else {

        var currentQuestion = questions[index]
        quest1.textContent = currentQuestion.question
        //first choice
        op1.textContent = currentQuestion.options.one
        //second choice
        op2.textContent = currentQuestion.options.two
        //third choice
        op3.textContent = currentQuestion.options.three
        //fourth choice
        op4.textContent = currentQuestion.options.four
    }
}

function checkAnswer(event) {
    var buttonClick = event.target
    if (questions[index].correct === buttonClick.textContent) {
        points++;
        index++;
        clearQuestion();
        quizDisplay();
        localStorage.setItem('score', points)
    } else {
        points--;
        index++;
        timer -= 5;
        clearQuestion();
        quizDisplay();
        localStorage.setItem('score', points)
    }
}

function clearQuestion() {
    quizQuestion.textContent = '';
    op1.textContent = '';
    op2.textContent = '';
    op3.textContent = '';
    op4.textContent = '';
}

function getScore() {
    resultsContainer.style.display = 'block'
    // document.getElementById('initId').style.display = 'block'
    // document.getElementById('enterInit').style.display = 'block'
    // .style.display = 'block'
    var enterInitials = document.getElementById('enterInit').value


    var objectScore = {
        initials: enterInitials,
        score: points
    }

    highScoresArray.push(objectScore);



    localStorage.setItem('highScores', JSON.stringify(highScoresArray))

    // allow me to enter initials before saving score
    //display them on the page once entered
    //something to do with local storage
    //input to enter initials
    //save and store the score!!!
    // var scoreKeeper =
    //     [{
    //         initials: 'JS',
    //         score: 5
    //     },
    //     {
    //         initials: 'MW',
    //         score: -2
    //     }
    //     ]
}
//if selected correct answer +1
//else if selected wrong answer -1
//move up one in the array to display next question
//index+1 increase index in array by one every time question is asked
//help im cry
//define variable currentAnswer as global?

//whatever choice is clicked on
//clicked option questions.options.addEventListener('click')

// var currentAnswer = questions[index].correct

// var currentQuestion = questions[index];

// var points = 0
//cries


quizDisplay();
showBtn();


submitBtn.addEventListener('click', function(){
    resultsBtn.style.display = 'block'
    document.getElementById('enterInit').style.display = 'none'
    document.getElementById('initId').style.display = 'none'
    submitBtn.style.display = 'none'

    getScore();

})

op1.addEventListener('click', checkAnswer)
op2.addEventListener('click', checkAnswer)
op3.addEventListener('click', checkAnswer)
op4.addEventListener('click', checkAnswer)