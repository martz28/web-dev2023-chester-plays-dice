


var buttonClicked = document.querySelector(".btn");

buttonClicked.addEventListener('click', function() {
    // Change the text content of the target element
    var diceMine = Math.floor(Math.random() * 6) + 1;
    var diceChester = Math.floor(Math.random() * 6) + 1;
    document.getElementById("diceYours").src = "./svgs/dice_" + diceMine + ".svg";
    document.getElementById("diceChesters").src = "./svgs/dice_" + diceChester + ".svg";


    if (diceMine > diceChester) {
        document.querySelector('#wordResult').innerHTML = "You made him sad!";
        document.getElementById("chesterPhoto").src = "./images/chesterIsSad.jpg"
    }
    else if (diceMine < diceChester) {
        document.querySelector('#wordResult').innerHTML = "He is happy and" +
            " wants to go swiming";
        document.getElementById("chesterPhoto").src = "./images/chesterIsHappy.jpg"
    }
    else {
        document.querySelector('#wordResult').innerHTML = "It's a draw it's" +
            " time for a run in the snow";
        document.getElementById("chesterPhoto").src = "./images/chesterIsEven.jpg"
    }

});