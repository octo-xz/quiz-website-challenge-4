// declaring elements involved in the quiz build

//timer isnt working :(
//this is the variable declared for countdown in html
var timerEl = document.getElementById('countdown');
//this is the function for the counter
function counter() {
    //total amount of time per quiz game
    var timer = 31;
    var timerInt = setInterval(function () {
        //decrements the timer
        timer--;
        if(timer > 1) {
            timerEl.textContent = timer + " seconds left!"
        } else if (timer === 1) {
            timerEl.textContent = timer + " second left!"
        }
        //makes setInterval cancel to keep from going into negative numbers
        if (timer === 0) {
            timerEl.textContent = timer + " seconds left!"
            clearInterval(timerInt);
            alert("You have run out of time!")
            // i want to add functionality to make the timer running out end the quiz
        }
    }, 1000);
}

counter();

//the functionality of the quiz will go in this function
function quiz() {
    //first i want to set what questions the quiz will cycle through

}


// shows the results after the quiz has been completed
function resultsPlease() { }

// this is the event listener for the button



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
            two: "2. Hello World",
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

//question 2
quest2.textContent = questions[1].question
   //first choice
    op1.textContent = questions[1].options.one
   //second choice
    op2.textContent = questions[1].options.two
   //third choice
    op3.textContent = questions[1].options.three
   //fourth choice
    op4.textContent = questions[1].options.four

//question 3
quest3.textContent = questions[2].question
   //first choice
    op1.textContent = questions[2].options.one
   //second choice
   op2.textContent = questions[2].options.two
   //third choice
   op3.textContent = questions[2].options.three
   //fourth choice
   op4.textContent = questions[2].options.four

//question 4
quest4.textContent = questions[3].question
   //first choice
    op1.textContent = questions[3].options.one
   //second choice
    op2.textContent = questions[3].options.two
   //third choice
    op3.textContent = questions[3].options.three
   //fourth choice
    op4.textContent = questions[3].options.four

//question 5
quest5.textContent = questions[4].question
   //first choice
    op1.textContent = questions[4].options.one
   //second choice
    op2.textContent = questions[4].options.two
   //third choice
    op3.textContent = questions[4].options.three
   //fourth choice
    op4.textContent = questions[4].options.four
