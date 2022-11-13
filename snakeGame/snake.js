
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); //for drawing 2d games, found it online... It makes you able to access the <canvas> and draw 2d on it


var sqCount = 20; //how big the snake is and counts the squares
var sqSize = 20; //the size of the squares in the canvas. How many pixels the snake is
var heX = 10; //the head of my snake in the X position
var heY = 10; //the head of my snake in the Y position

var xSpe = 0;
var ySpe = 0;

function gameRefresh() {
    gameBox();
    gameSnake();
    setTimeout(gameRefresh, 1000); //1000 = 1 second. This updates the game every second
    console.log("Game Refresh");

}

function gameBox() {
    ctx.fillStyle = "green"; //what color i should fill it with "https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle"
    ctx.fillRect(0, 0, 750, 750); //fills the rectangle "https://www.w3schools.com/TAGs/canvas_fillrect.asp"

}


function gameSnake() {
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(heX, heY, sqSize, sqSize) 

}





document.addEventListener("keydown", keyDown);

function keyDown(event){
    if(event.keyCode == 37) {
        alert("you pressed left");
    }

        else if(event.keyCode == 39) {
            alert('You pressed right');
        }
        console.log(event);
    }


gameRefresh();