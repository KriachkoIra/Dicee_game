var images = document.querySelectorAll("img");

var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

images[0].setAttribute("src", "images/dice" + randomNum1 + ".png");
images[1].setAttribute("src", "images/dice" + randomNum2 + ".png");

var heading = document.querySelector("h1");

if(randomNum1 > randomNum2)
    heading.innerHTML = "Player 1 wins!";
else if(randomNum1 < randomNum2)
    heading.innerHTML = "Player 2 wins!";
else
    heading.innerHTML = "Draw!";