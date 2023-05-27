//sorting out my button first
var gameContainer = document.getElementById('theBigContainer');

var startBtn = document.getElementById('gameStartBtn');

var countdown = document.getElementById('countdown');

var resultsBtn = document.getElementById('resultsBtn');

var options = document.getElementById('options')

var quizStart = false;

var index = 0;

var timer = 30;

var interval;


//starts the quiz
//disappears buttons for questions to take place 
startBtn.addEventListener('click', function () {
    gameContainer.style.display = "block";
    startBtn.style.display = 'none';
    resultsBtn.style.display = 'none';
    quizStart = true;

    renderTimer();

    interval = setInterval(function () {
        if (!quizStart) {
            return;
        }
        timer--;
        renderTimer();
        if (timer <= 0) {
            clearInterval(interval);

            gameContainer.textContent = "You ran out of time!"
            resultsBtn.style.display = 'block'
        }
    }, 1000);



});


function renderTimer() {
    countdown.textContent = timer + " seconds left!"
    if (timer == 1) {
        countdown.textContent = timer + " second left!"
    }

}



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

//question and answers variables
var quest1 = document.getElementById('quiz-question')
var quest2 = document.getElementById('quiz-question')
var quest3 = document.getElementById('quiz-question')
var quest4 = document.getElementById('quiz-question')
var quest5 = document.getElementById('quiz-question')

var op1 = document.getElementById('op1')
var op2 = document.getElementById('op2')
var op3 = document.getElementById('op3')
var op4 = document.getElementById('op4')

op1.addEventListener('click', checkAnswer)
op2.addEventListener('click', checkAnswer)
op3.addEventListener('click', checkAnswer)
op4.addEventListener('click', checkAnswer)

function checkAnswer() {

    //if selected correct answer +1
    //else if selected wrong answer -1
    //move up one in the array to display next question
    //index+1 increase index in array by one every time question is asked
    //help im cry
    //define variable currentAnswer as global?
    //currentAnswer = questions[index].correct
    if (currentQuestion == questions[0]) && (currentAnswer == '4. HTML') {
        //give +1 pt to score 
        //repeat this format to go through all questions and correct answers in the array
    }

    if(currentQuestion == questions[0]) && (currentAnswer !== '4. HTML') {
        //-1 point from score
        //repeat format for all questions and correct answers in array
    }

    //rotate to next question and options somehow
    //use shift? will the elements return to the array when the page refreshes?
    //use a forEach method???? cries
    //questions.forEach(nextQuestion)
    //funciton nextQuestion(){
        //increase place in array by 1
   // }
    
}



//the functionality of the quiz will go in this function
function quizDisplay() {
    //first i want to set what questions the quiz will cycle through
    var currentQuestion = questions[index] //making this a global variable?
    //question 1
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

quizDisplay();

//options selection
options.addEventListener('click', function () {
    if (op1 || op2 || op3) {
        //clicked
    }
})
//unsure if this is redundant now

