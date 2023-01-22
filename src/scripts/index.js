const statsBtn = document.querySelector("#statsBtn");
const rulesBtn = document.querySelector("#rulesBtn");
const changeMode = document.querySelector("#changeModeBtn");
const fullChangeMode = document.querySelector("#fullChangeModeBtn");
const confirmBtn = document.querySelector("#confirmWord");
const disconnectBtn = document.querySelector(".disconnect");

statsBtn.addEventListener("click", () => {
  console.log("stats");
});

rulesBtn.addEventListener("click", () => {
  console.log("rules");
});

fullChangeMode.addEventListener("click", () => {
  const lettersContainer = document.querySelector(".letters-used");
  if(changeMode.getAttribute("data-mode")==0){
    changeMode.setAttribute("data-mode", "1");
    lettersContainer.style="opacity: 0;";
    changeMode.textContent="hard";
  } else{
    changeMode.setAttribute("data-mode", "0");
    lettersContainer.style="opacity: 1;";
    changeMode.textContent="normal";
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

    ////////////////////////////////////////////////////

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
    location.href="../src/login.php";
  };
  httpReq.open("POST", "../src/disconnectref.php");
  httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  httpReq.send(parameters);
});