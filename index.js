const main = document.querySelector("main");
const root = document.querySelector(":root");
const playerOne = document.getElementById("player-one");
const playerTwo = document.getElementById("player-two");

const gameTurn = document.getElementById("turn");
let turn = document.getElementById("player-turn");

const gameWin = document.getElementById("winner");
let winner = document.createElement("div");
winner.id = "player-win";
gameWin.append(winner);

const btnOne = document.getElementById("1");
const btnTwo = document.getElementById("2");
const btnThree = document.getElementById("3");
const btnFour = document.getElementById("4");
const btnFive = document.getElementById("5");
const btnSix = document.getElementById("6");
const btnSeven = document.getElementById("7");
const btnEight = document.getElementById("8");
const btnNine = document.getElementById("9");

document.getElementById("play-game").addEventListener("click", function () {
  if (!turn) {
    turn = document.createElement("div");
    turn.id = "player-turn";
    gameTurn.append(turn);
  }
  turn.innerText = "Turn: " + playerOne.value;
  erase();
  ableBtn();
  rebootWinner();
});

function erase() {
  document.querySelectorAll(".btn").forEach(function (eraseBtn) {
    eraseBtn.innerText = "";
  });
  winner.innerText = "";
}

function ableBtn() {
  document.querySelectorAll(".btn").forEach(function (gameBtn) {
    gameBtn.disabled = false;
  });
}

function rebootWinner() {
  btnOne.dataset.value = "1";
  btnTwo.dataset.value = "2";
  btnThree.dataset.value = "3";
  btnFour.dataset.value = "4";
  btnFive.dataset.value = "5";
  btnSix.dataset.value = "6";
  btnSeven.dataset.value = "7";
  btnEight.dataset.value = "8";
  btnNine.dataset.value = "9";

  btnOne.removeAttribute("id");
  btnTwo.removeAttribute("id");
  btnThree.removeAttribute("id");
  btnFour.removeAttribute("id");
  btnFive.removeAttribute("id");
  btnSix.removeAttribute("id");
  btnSeven.removeAttribute("id");
  btnEight.removeAttribute("id");
  btnNine.removeAttribute("id");
}

document.querySelectorAll(".btn").forEach(function (gameBtn) {
  gameBtn.addEventListener("click", handleClick);
});

function handleClick() {
  if (turn.innerText === "Turn: " + playerOne.value) {
    this.innerText = "X";
    this.dataset.value = playerOne.value;
    turn.innerText = "Turn: " + playerTwo.value;
    result();
  } else {
    this.innerText = "O";
    this.dataset.value = playerTwo.value;
    turn.innerText = "Turn: " + playerOne.value;
    result();
  }
  this.disabled = true;
}

function result() {
  if (
    btnOne.dataset.value === btnTwo.dataset.value &&
    btnTwo.dataset.value === btnThree.dataset.value
  ) {
    winner.innerText = btnOne.dataset.value + " wins!";
    disableBtn();
    btnOne.id = "winStyle";
    btnTwo.id = "winStyle";
    btnThree.id = "winStyle";
  } else if (
    btnFour.dataset.value === btnFive.dataset.value &&
    btnFive.dataset.value === btnSix.dataset.value
  ) {
    winner.innerText = btnFour.dataset.value + " wins!";
    disableBtn();
    btnFour.id = "winStyle";
    btnFive.id = "winStyle";
    btnSix.id = "winStyle";
  } else if (
    btnSeven.dataset.value === btnEight.dataset.value &&
    btnEight.dataset.value === btnNine.dataset.value
  ) {
    winner.innerText = btnSeven.dataset.value + " wins!";
    disableBtn();
    btnSeven.id = "winStyle";
    btnEight.id = "winStyle";
    btnNine.id = "winStyle";
  } else if (
    btnOne.dataset.value === btnFour.dataset.value &&
    btnFour.dataset.value === btnSeven.dataset.value
  ) {
    winner.innerText = btnOne.dataset.value + " wins!";
    disableBtn();
    btnOne.id = "winStyle";
    btnFour.id = "winStyle";
    btnSeven.id = "winStyle";
  } else if (
    btnTwo.dataset.value === btnFive.dataset.value &&
    btnFive.dataset.value === btnEight.dataset.value
  ) {
    winner.innerText = btnTwo.dataset.value + " wins!";
    disableBtn();
    btnTwo.id = "winStyle";
    btnFive.id = "winStyle";
    btnEight.id = "winStyle";
  } else if (
    btnThree.dataset.value === btnSix.dataset.value &&
    btnSix.dataset.value === btnNine.dataset.value
  ) {
    winner.innerText = btnThree.dataset.value + " wins!";
    disableBtn();
    btnThree.id = "winStyle";
    btnSix.id = "winStyle";
    btnNine.id = "winStyle";
  } else if (
    btnOne.dataset.value === btnFive.dataset.value &&
    btnFive.dataset.value === btnNine.dataset.value
  ) {
    winner.innerText = btnOne.dataset.value + " wins!";
    disableBtn();
    btnOne.id = "winStyle";
    btnFive.id = "winStyle";
    btnNine.id = "winStyle";
  } else if (
    btnThree.dataset.value === btnFive.dataset.value &&
    btnFive.dataset.value === btnSeven.dataset.value
  ) {
    winner.innerText = btnThree.dataset.value + " wins!";
    disableBtn();
    btnThree.id = "winStyle";
    btnFive.id = "winStyle";
    btnSeven.id = "winStyle";
  } else if (
    (btnOne.innerText === "X" || btnOne.innerText === "O") &&
    (btnTwo.innerText === "X" || btnTwo.innerText === "O") &&
    (btnThree.innerText === "X" || btnThree.innerText === "O") &&
    (btnFour.innerText === "X" || btnFour.innerText === "O") &&
    (btnFive.innerText === "X" || btnFive.innerText === "O") &&
    (btnSix.innerText === "X" || btnSix.innerText === "O") &&
    (btnSeven.innerText === "X" || btnSeven.innerText === "O") &&
    (btnEight.innerText === "X" || btnEight.innerText === "O") &&
    (btnNine.innerText === "X" || btnNine.innerText === "O")
  ) {
    winner.innerText = "A tie!";
    disableBtn();
  }
}

function disableBtn() {
  document.querySelectorAll(".btn").forEach(function (gameBtn) {
    gameBtn.disabled = true;
  });
  turn.innerText = "";
}

document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--primary-color", "#26834a");
    root.style.setProperty("--play-color", "#ddac84");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--primary-color", "#4dff91");
    root.style.setProperty("--play-color", "#ff0043");
    main.dataset.theme = "dark";
  }
});
