const statsBtn = document.querySelector("#statsBtn");
const rulesBtn = document.querySelector("#rulesBtn");
const changeMode = document.querySelector("#changeModeBtn");
const confirmBtn = document.querySelector("#confirmWord");

statsBtn.addEventListener("click", () => {
  console.log("stats");
});

rulesBtn.addEventListener("click", () => {
  console.log("rules");
});

changeMode.addEventListener("click", () => {
  console.log("change mode");
  // NORMAL MODE
  // HARD MODE
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
  let checkTheWord;
  for (let i = lengthWord; i < lengthWord; i++) {
    if (lettersBox[i].textContent === "") {
      return alert("You don't write in all input squares");
    }
    checkTheWord += lettersBox[i].textContent;
  }
  const httpReq = new XMLHttpRequest();
  let parameters = `checkWord=${checkTheWord}`;
  console.log(parameters);
  httpReq.onload = () => {
    const response = JSON.parse(this.responseText);
    //////////////////////////////////
    console.log(response);

    
    //////////////////////////////////
  };
  httpReq.open("POST", "../src/checkwordref.php");
  httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  httpReq.send(parameters);
});
