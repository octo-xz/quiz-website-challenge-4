// declaring elements involved in the quiz build
const submitButton = document.getElementsByClassName("quizButton");

//timer isnt working :(
//this is the variable declared for countdown in html
var timerEl = document.getElementsByClassName("countdown");
//this is the function for the counter
function counter() {
    //total amount of time per quiz game
    var timer = 31;
    var timerInt = setInterval(function () {
        //decrements the timer
        timer--;
        timerEl.textContent = `${timer} seconds left!`;
        //makes setInterval cancel to keep from going into negative numbers
        if (timer === 0) {
            clearInterval(timerInt);
            // i want to add functionality to make the timer running out end the quiz
        }
    }, 1000);
}

//the functionality of the quiz will go in this function
function quiz() {
    //first i want to set what questions the quiz will cycle through

}


// shows the results after the quiz has been completed
function resultsPlease() { }

// this is the event listener for the button
submitButton.addEventListener("click", resultsPlease);


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
