let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newGame = document.getElementById("new-game");
let resetBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

//winning pattern Array

let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//Player X plays first

let xTurn = true;
let count = 0;

//Disable all buttons

function disableButtons() {
  btnRef.forEach((element) => (element.disabled = true));

  //elable popup

  popupRef.classList.remove("hide");
}

//Enable all buttons (for new game and restart)
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  popupRef.classList.add("hide");
};

//This function is executed when player wins
function winFunction(letter) {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
}

//Function for draw
function drawFunction() {
  disableButtons();
  msgRef.innerHTML = "&#x1F389; <br> Its a  Draw!";
}

//New Game
newGame.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});



//win logic
function winChecker() {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];

    //check if elements are filled
    //if 3 empty elements are same and would give win as would
    if (element1 != "" && element2 != "" && element3 != "") {
      if (element1 == element2 && element2 == element3) {
        console.log(element1);
        //if 3 buttons have same values then the value to winfunction
        winFunction(element1);
      }
    }
  }
}

//Display X/O

btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      //Display X
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      //Display X
      element.innerText = "O";
      element.disabled = true;
    }

    //Increament count on each click

    count += 1;
    if (count == 9) {
      //Its a draw since there are a total of boxed
      drawFunction();
    }

    //Check for win on every click
    winChecker();
  });
});

//Enables Buttons and disable popup on page load

window.onload = enableButtons;
