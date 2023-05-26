//sorting out my button first
var gameContainer = document.getElementById('theBigContainer')

var startBtn = document.getElementById('gameStartBtn')

var countdown = document.getElementById('countdown');

var quizStart = false

var timer = 30 

//starts the quiz
startBtn.addEventListener('click', function(){
    gameContainer.style.display = "block";
    startBtn.style.display = 'none';
    quizStart = true;

    renderTimer();

    var interval = setInterval(function(){
        if(!quizStart) {
            return;
        }
        timer --;
        renderTimer();
        if (timer <= 0) {
            clearInterval(interval);

            gameContainer.textContent = "You ran out of time!"
        }
    }, 1000); 
    


});

function renderTimer() {
    countdown.textContent = timer + " seconds left!"
    if( timer == 1) {
        countdown.textContent = timer + " second left!"
    }
    
}





//timer is working or at least the first part, still need to hook it up to the quiz 
//this is the variable declared for countdown in html
//this is the function for the counter


// working on object array for questions and options need to add all options will work with that down here until their done then figure out how to add it above

var questions =
    [{ question: "What language is a mark up language?",
        options: {
            one: "1. CSS",
            two: "2. Python",
            three: "3. JavaScript",
            four: "4. HTML"
        },
        correct: "four"
     },

    { question: "What is a boolean?",
        options:{
            one: "1. A programming language",
            two: "2. A way of listening for user interaction",
            three: "3. A framework for CSS",
            four: "4. A type of true false variable"
        },
        correct: "four"
    },
    { question: "What is the not operator?",
        options: {
            one: "1. &&",
            two: "2. ||",
            three: "3. !",
            four: "4. $"
        },
        correct: "three"
    },
    { question: "What does the DOM stand for?",
        options: {
            one: "1. Dynamic Object Model",
            two: "2. Doran's Overview Manager",
            three: "3. Document Object Model",
            four: "4. Download On Motorcycle"
        },
        correct: "three"
    },
    { question: "What phrase is often used as a first exercise in JavaScript?",
        options: {
            one: "1. Gotta catch 'em all!",
            two: "2. Hello World!",
            three: "3. What is up my dudes?",
            four: "4. I am sleepy"
        },
        correct: "two"
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

//question 1
quest1.textContent = questions[0].question
   //first choice
    op1.textContent = questions[0].options.one
   //second choice
    op2.textContent = questions[0].options.two
   //third choice
    op3.textContent = questions[0].options.three
   //fourth choice
    op4.textContent = questions[0].options.four




    //the functionality of the quiz will go in this function
function quiz() {
    //first i want to set what questions the quiz will cycle through

}

// shows the results after the quiz has been completed
function resultsPlease() { }
