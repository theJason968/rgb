var numOfSquares = 6;
var colors = generateRandomColor(numOfSquares);

var squareColor = document.querySelectorAll(".square");
var rgbAnswer = document.getElementById("rgbColors");
var tryAgainButton = document.getElementById("tryAgain");
var h1 = document.querySelector("#theTitle");
var resetColors = document.getElementById("resetColors");
var easyMode = document.querySelector("#easyMode")
var hardMode = document.querySelector("#hardMode")
//randomize picked color in array.
var pickedColor = colors[Math.floor(Math.random()*colors.length)];
//the rgb color of the answer
rgbAnswer.textContent = pickedColor;
console.log(pickedColor);
//lock colors if correct
var gameOver = false;



//add colors to squares.
for(var i = 0; i < squareColor.length; i++){
    squareColor[i].style.backgroundColor = colors[i];
    //add listener to squares
    squareColor[i].addEventListener("click", function(){
        //grab color
        var chosenColor = this.style.backgroundColor;
        //compare picked color
        if(!gameOver){
            if(chosenColor === pickedColor){
                console.log("Correct");
                tryAgainButton.textContent = "Correct! Play Again?";
                gameOver = true;
                changeColor(chosenColor);
                h1.style.backgroundColor = chosenColor;
                resetColors.innerHTML = "<strong>Play Again</strong>"
            }else{
                this.style.backgroundColor = "#232323";
                this.style.transitionDuration = "1s";
                tryAgainButton.textContent = "Wrong! Try again."
            }
        }
    });
}

resetColors.addEventListener("click", function(){
    reset();
})

function reset(){
    //generate new colours
    colors = generateRandomColor(numOfSquares);
    //pick a new num
    pickedColor = colors[Math.floor(Math.random()*colors.length)];
    //reset background
    h1.style.backgroundColor = "#232323";
    //reset lock
    gameOver = false;
    //change color display
    rgbAnswer.textContent = pickedColor;

    for(var i = 0; i < squareColor.length; i++){
        squareColor[i].style.backgroundColor = colors[i];
    }
    resetColors.innerHTML = "<strong>New Colors</strong>"
    tryAgainButton.textContent = ""
}

function pickcolor(){
    var random = olors[Math.floor(Math.random()*colors.length)];
    return colors[random];
}


function changeColor(colors){
    for(var i = 0; i < squareColor.length; i++){
        //change each color to match chosen
        squareColor[i].style.backgroundColor = colors;
    }
}

function generateRandomColor(num){
    //make array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i < num; i++){
        //push color into array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick between 0-255
    var r = Math.floor(Math.random() * 256);

    var g = Math.floor(Math.random() * 256);

    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

easyMode.addEventListener("click", function(){
    easyMode.classList.add("selected");
    hardMode.classList.remove("selected");
    removeColors();
    addToEasy();

    for(var i = 0; i < 4; i++){
        squareColor[i].style.backgroundColor = colors[i];
    }
});

function removeColors(){
    //hide 3 colors
    for(var i = 3; i < squareColor.length; i++){
        squareColor[i].style.display = "none";
    }
}

function addToEasy(){
    //generate new colours
    numOfSquares = 3;
    colors = generateRandomColor(numOfSquares);
    //pick a new num
    pickedColor = colors[Math.floor(Math.random()*colors.length)];
    //reset background
    h1.style.backgroundColor = "#232323";
    //reset lock
    gameOver = false;
    //change color display
    rgbAnswer.textContent = pickedColor;
    for(var i = 0; i < squareColor.length; i++){
        squareColor[i].style.backgroundColor = colors[i];
    }
}

hardMode.addEventListener("click", function(){
    easyMode.classList.add("selected");
    hardMode.classList.remove("selected");
    addToHard();
    addColors();
});

function addToHard(){
    //generate new colours
    numOfSquares = 6;
    colors = generateRandomColor(numOfSquares);
    //pick a new num
    pickedColor = colors[Math.floor(Math.random()*colors.length)];
    //reset background
    h1.style.backgroundColor = "#232323";
    //reset lock
    gameOver = false;
    //change color display
    rgbAnswer.textContent = pickedColor;

    for(var i = 0; i < squareColor.length; i++){
        squareColor[i].style.backgroundColor = colors[i];
    }
}

function addColors(){
    //unhide the colors
    for(var i = 3; i <= 6; i++){
        squareColor[i].style.display = "block";
    }
}
