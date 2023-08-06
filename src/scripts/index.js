const statsBtn = document.querySelector("#statsBtn");
const rulesBtn = document.querySelector("#rulesBtn");
const changeMode = document.querySelector("#changeModeBtn");
const fullChangeMode = document.querySelector("#fullChangeModeBtn");
const confirmBtn = document.querySelector("#confirmWord");
const disconnectBtn = document.querySelector(".disconnect");

statsBtn.addEventListener("click", () => {
  if (document.querySelector(".stats-container")) {
    return;
  }

  const httpReq = new XMLHttpRequest();

  httpReq.onload = ({ target }) => {
    const response = JSON.parse(target.response);
    const containerStats = document.createElement("div");
    containerStats.classList.add("stats-container");
    setTimeout(() => {
      containerStats.style = "transform: translateY(1em); opacity: 1;";
    }, 10);

    const rightAnswersSpan = document.createElement("span");
    rightAnswersSpan.textContent = "Right words: " + response.nRightWords;
    containerStats.append(rightAnswersSpan);

    const wrongAnswersSpan = document.createElement("span");
    wrongAnswersSpan.textContent = "Wrong words: " + response.nWrongWords;
    containerStats.append(wrongAnswersSpan);

    const actualStreakSpan = document.createElement("span");
    actualStreakSpan.textContent = "Actual Streak: " + response.actuallyStreak;
    containerStats.append(actualStreakSpan);

    const maxStreakSpan = document.createElement("span");
    maxStreakSpan.textContent = "Max Streak: " + response.maxStreak;
    containerStats.append(maxStreakSpan);

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    containerStats.append(closeBtn);

    closeBtn.addEventListener("click", () => {
      document.querySelector(".stats-container").remove();
    });

    document.querySelector("body").append(containerStats);
  };

  httpReq.open("POST", "../src/statsref.php");
  httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  httpReq.send();
});

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

  for (let i = lengthWord; i < lengthLetters; i++) {
    lettersBox[i].style =
      "animation-name: spin-letter; animation-duration: 3000ms; animation-iteration-count: 1;";
  }

  const httpReq = new XMLHttpRequest();
  let parameters = `checkWord=${checkTheWord}`;
  httpReq.onload = ({ target }) => {
    const response = JSON.parse(target.response);

    if (response.result == "win") {
      window.location.reload();
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

    const idMissed = document.querySelector("#lettersMissed");
    const idWrongSpot = document.querySelector("#lettersWrongSpot");

    // console.log("id missed: "+ idMissed)
    // console.log("id wrong spot: "+ idWrongSpot)

    const checkMissed = () => {
      if (document.querySelectorAll("letter[data-missed-letter]") == true) {
        return document.querySelectorAll("letter[data-missed-letter]");
      }
      return 0;
    };
    const checkWrongSpot = () => {
      if (document.querySelectorAll("letter[data-wrong-spot-letter]")  == true) {
        return document.querySelectorAll("letter[data-wrong-spot-letter]");
      }
      return 0;
    };

    const missed = checkMissed();
    const wrongSpot = checkWrongSpot();

    const lettersRightLength = response.lettersRight.length;
    const lettersBox = document.querySelectorAll("letter[data-letter-input]");

    // console.log("lista letter: " + lettersBox);

    const lengthLetters = lettersBox.length;

    // console.log("length letter: " + lengthLetters);

    let lengthWord = lengthLetters / 2;
    for (let i = 0; i < lengthWord; i++) {
      for (let j = 0; j < lettersRightLength; j++) {
        const letterPosition = response.lettersRight[j].position;
        lettersBox[lengthWord + letterPosition].textContent =
          response.lettersRight[j].letter;
        lettersBox[lengthWord + letterPosition].setAttribute(
          "data-letter-input", "1"
        );
      }
    }

    for (let i = 0; i < lengthWord; i++) {
      if(lettersBox[i].getAttribute("data-letter-input") == 0){
        lettersBox[i].textContent="";
      }
    }

    const lettersSpotMissedLength = response.lettersSpotMissed.length;

    if (wrongSpot === 0) {
      for (let i = 0; i < lettersSpotMissedLength; i++) {
        const gamebox = document.createElement("game-box");
        const letter = document.createElement("letter");
        letter.setAttribute("data-wrong-spot-letter", "0");
        letter.textContent = response.lettersSpotMissed[i];
        gamebox.append(letter);
        idWrongSpot.append(gamebox);
      }
    } else {
      const wrongSpotLength = wrongSpot.length;
      for (let i = 0; i < lettersSpotMissedLength; i++) {
        for (let j = 0; j < wrongSpotLength; j++) {
          if (wrongSpot[j].textContent != response.lettersSpotMissed[i]) {
            const gamebox = document.createElement("game-box");
            const letter = document.createElement("letter");
            letter.setAttribute("data-wrong-spot-letter", "0");
            letter.textContent = response.lettersSpotMissed[i];
            gamebox.append(letter);
            idWrongSpot.append(gamebox);
          }
        }
      }
    }
    
    const lettersMissedLength = response.lettersMissed.length;
    // console.log("length missed: " + lettersMissedLength)
    // console.log("missed: " + missed)
    
    if (missed === 0) {
      for (let i = 0; i < lettersMissedLength; i++) {
        const gamebox = document.createElement("game-box");
        const letter = document.createElement("letter");
        letter.setAttribute("data-missed-letter", "0");
        letter.textContent = response.lettersMissed[i];
        gamebox.append(letter);
        idMissed.append(gamebox);
      }
    } else {
      const missedLength = missed.length;
      for (let i = 0; i < lettersMissedLength; i++) {
        for (let j = 0; j < missedLength; j++) {
          if (missed[j].textContent != response.lettersMissed[i]) {
            const gamebox = document.createElement("game-box");
            const letter = document.createElement("letter");
            letter.setAttribute("data-missed-letter", "0");
            letter.textContent = response.lettersMissed[i];
            gamebox.append(letter);
            idMissed.append(gamebox);
          }
        }
      }
    }

    

  };
  httpReq.open("POST", "../src/checkwordref.php");
  httpReq.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
  );
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
