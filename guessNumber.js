var number = document.querySelector("#number");
var output = document.querySelector("#output");
var yourNum = document.querySelector("#yourNum");
var random = document.querySelector("#random");
var livesLeft = document.querySelector("#guessLeft");
var yourGuess = document.querySelector("#yourGuess");

var button = document.querySelector("#play");
var rules = document.querySelector("#rulesBlock");
var confusedFace = document.querySelector(".defaultimg");
var smileFace = document.querySelector(".winnerimg");
var unhappyFace = document.querySelector(".loseimg");

var lives = 5;
var total = 1;

window.addEventListener("keydown", keydownHandler, false);

function keydownHandler(event) {
    if (event.keyCode === 13) {
        validateInput();
    }
}

var validateInput = function () {
    num = parseInt(number.value);

    if (isNaN(num)) {
        output.innerHTML = "Please enter a numeric value! Try Again.";
        clearItems();
    }
    if (num > 20 || num < 0) {
        output.innerHTML = "Please enter a number between 0 - 20. Try Again.";
        clearItems();
    } else {
        calculateGuess(num);
    }
}

var calculateGuess = function (newNumber) {
        // output.innerHTML = newNumber;
        var randomNum = Math.floor(Math.random() * 21);

        yourGuess.innerHTML = total++;
        livesLeft.innerHTML = lives--;

        if (livesLeft.innerHTML == 0) {
            endGame(false);
        } else {

            if (newNumber > randomNum) {
                output.innerHTML = "That was too HIGH!";
                yourNum.innerHTML = newNumber;
                random.innerHTML = randomNum;
                
            } else if (newNumber < randomNum) {
                output.innerHTML = "That was too LOW!";
                yourNum.innerHTML = newNumber;
                random.innerHTML = randomNum;
                
            } else if (newNumber = randomNum) {
                yourNum.innerHTML = newNumber;
                random.innerHTML = randomNum;
                endGame(true);
            }

        }
}

        var endGame = function (winner) {
            if (winner == false) {
                output.innerHTML = "You LOST! Click Try Again Button Below.";
                
                unhappyFace.style.opacity = 1;
                confusedFace.style.opacity = 0;
                smileFace.style.opacity = 0;
                
            } else {
                output.innerHTML = "CORRECT your geuss was spot on!"
                
                unhappyFace.style.opacity = 0;
                confusedFace.style.opacity = 0;
                smileFace.style.opacity = 1;
            }
            
            button.disabled = true;
            window.removeEventListener("keydown", keydownHandler, false);
            
            number.disabled = true;
        }

        var clearItems = function () {
            livesLeft.innerHTML = 5;
            lives = 5;
            total = 1;
            yourNum.innerHTML = "...";
            random.innerHTML = "...";
            yourGuess.innerHTML = "...";
            
            unhappyFace.style.opacity = 0;
            confusedFace.style.opacity = 1;
            smileFace.style.opacity = 0;
            
            number.innerHTML = 0;
            
            button.disabled = false;
            window.addEventListener("keydown", keydownHandler, false);
            
            number.disabled = false;
            
            number.focus();
        }
        
        var showRules = function() {
            rules.style.opacity = 1;
        }