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
});

confirmBtn.addEventListener("click", () => {
  if (localStorage.getItem("cookieBlocker") != 1) {
    return alert("You DIDN'T ACCEPT the cookies");
  }
  if (document.querySelector("#nAttemptsRemaing").value == 0) {
    return alert("Out of attempts");
  }
  const lettersBox = document.querySelectorAll("letter[data-letter-input]");
  const lengthLetters = lettersBox.length;
  const lengthWord = lengthLetters / 2;
  let checkWord;
  for (let i = lengthWord - 1; i < lengthWord; i++) {
    if (lettersBox[i].value === "") {
      return alert("You don't write in all input squares");
    }
    checkWord += lettersBox[i].value;
  }
  const httpReq = new XMLHttpRequest();
  let parameters = `checkWord=${checkWord}`;
  httpReq.onload = () => {
    const response = JSON.parse(this.responseText);
    //////////////////////////////////
    console.log(response);

    //////////////////////////////////
  };
  httpReq.open("POST", "../src/newaccountref.php");
  httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  httpReq.send(parameters);
});
