// const statsBtn = document.querySelector("#statsBtn");
const rulesBtn = document.querySelector("#rulesBtn");
const changeMode = document.querySelector("#changeModeBtn");
const fullChangeMode = document.querySelector("#fullChangeModeBtn");
const confirmBtn = document.querySelector("#confirmWord");
const disconnectBtn = document.querySelector(".disconnect");

// statsBtn.addEventListener("click", () => {
//   console.log("stats");
// });

rulesBtn.addEventListener("click", () => {
  const rulesContainer = document.querySelector(".rules-container");
  if (rulesBtn.getAttribute("data-active") == 0) {
    rulesBtn.setAttribute("data-active", "1");
    rulesContainer.style = "display: block;";
  } else {
    rulesBtn.setAttribute("data-active", "0");
    rulesContainer.style = "display: none;";
  }
});

fullChangeMode.addEventListener("click", () => {
  const lettersContainer = document.querySelector(".letters-used");
  if (changeMode.getAttribute("data-mode") == 0) {
    changeMode.setAttribute("data-mode", "1");
    lettersContainer.style = "opacity: 0;";
    changeMode.textContent = "hard";
  } else {
    changeMode.setAttribute("data-mode", "0");
    lettersContainer.style = "opacity: 1;";
    changeMode.textContent = "normal";
  }
});

confirmBtn.addEventListener("click", () => {
  if (localStorage.getItem("cookieBlocker") != 1) {
    return alert("You DIDN'T ACCEPT the cookies");
  }
  if (document.querySelector("#nAttemptsRemaing").textContent == 0) {
    return alert("Out of attempts");
  }
  const lettersBox = document.querySelectorAll("letter[data-letter-input]");
  const lengthLetters = lettersBox.length;
  const lengthWord = lengthLetters / 2;
  let checkTheWord = "";
  for (let i = lengthWord; i < lengthLetters; i++) {
    if (lettersBox[i].textContent == "" || lettersBox[i].textContent == " ") {
      return alert("You don't write in all input squares");
    }
    checkTheWord += lettersBox[i].textContent;
  }
  const httpReq = new XMLHttpRequest();
  let parameters = `checkWord=${checkTheWord}`;
  httpReq.onload = ({ target }) => {
    const response = JSON.parse(target.response);

    if (response.result == "win") {
      return alert("YOU WIN");
    }

    const userAttempt = document.getElementById("nAttemptsRemaing");
    userAttempt.textContent = response.attemptsRemained;
    if (parseInt(userAttempt.textContent) > 3) {
      userAttempt.classList.add("green");
      userAttempt.classList.remove("yellow");
      userAttempt.classList.remove("red");
    } else if (parseInt(userAttempt.textContent) > 1) {
      userAttempt.classList.add("yellow");
      userAttempt.classList.remove("green");
      userAttempt.classList.remove("red");
    } else {
      userAttempt.classList.add("red");
      userAttempt.classList.remove("yellow");
      userAttempt.classList.remove("green");
    }

    const idMissed = document.getElementById("lettersMissed");
    const idWrongSpot = document.getElementById("lettersWrongSpot");

    const missed = document.querySelectorAll("letter[data-missed-letter]");
    const wrongSpot = document.querySelectorAll(
      "letter[data-wrong-spot-letter]"
    );

    const lettersRightLength = response.lettersRight.length;
    const rightLength = missed.length;
    const lettersBox = document.querySelectorAll("letter[data-letter-input]");
    const lengthLetters = lettersBox.length;
    let lengthWord = lengthLetters / 2;
    for (let i = 0; i < lettersRightLength; i++) {
      for (let j = 0; j < rightLength; j++) {
        const letterPosition = response.lettersRight[j].position;
        lettersBox[lengthWord + letterPosition].textContent =
          response.lettersRight[j].letter;
        lettersBox[lengthWord + letterPosition].setAttribute(
          "data-right-letter"
        );
        lengthWord++;
      }
    }

    const lettersSpotMissedLength = response.lettersSpotMissed.length;
    const missedLength = missed.length;
    for (let i = 0; i < lettersSpotMissedLength; i++) {
      for (let j = 0; j < missedLength; j++) {
        if (missed[j] == response.lettersSpotMissed[i]) {
          const lObject = letterObject(0);
          idMissed.append(lObject);
        }
      }
    }

    const lettersMissedLength = response.lettersMissed.length;
    const wrongSpotLength = wrongSpot.length;
    for (let i = 0; i < lettersMissedLength; i++) {
      for (let j = 0; j < wrongSpotLength; j++) {
        if (wrongSpot[j] == response.lettersMissed[i]) {
          const lObject = letterObject(1);
          idWrongSpot.append(lObject);
        }
      }
    }
  };
  httpReq.open("POST", "../src/checkwordref.php");
  httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  httpReq.send(parameters);
});

disconnectBtn.addEventListener("click", () => {
  if (localStorage.getItem("cookieBlocker") != 1) {
    return alert("You DIDN'T ACCEPT the cookies");
  }
  const httpReq = new XMLHttpRequest();
  let parameters = `disconnect=1`;
  httpReq.onload = () => {
    location.href = "../src/login.php";
  };
  httpReq.open("POST", "../src/disconnectref.php");
  httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  httpReq.send(parameters);
});

function letterObject(x) {
  const gamebox = document.createElement("game-box");
  const letter = document.createElement("letter");
  switch (x) {
    case 0:
      letter.setAttribute("data-wrong-spot-letter", "0");
      gamebox.append(letter);
      break;
    case 1:
      letter.setAttribute("data-missed-letter", "0");
      gamebox.append(letter);
      break;
  }
  return gamebox;
}




