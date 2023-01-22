const keyboardBtn = document.querySelector(".keyboard-btn");
const keysBtn = document.querySelectorAll(".keys-btn");

let activeKeyboard = 0;

keyboardBtn.addEventListener("click", () => {
  if (activeKeyboard == 0) {
    activeKeyboard = 1;
    document.querySelector(".keyboard-box").style =
      "transform: translateY(0em);";
    document.querySelector(".keyboard-btn>img").style = "transform: rotate(0);";
  } else {
    activeKeyboard = 0;
    document.querySelector(".keyboard-box").style =
      "transform: translateY(10em);";
    document.querySelector(".keyboard-btn>img").style =
      "transform: rotate(-180deg);";
  }
});

const keysBtnLength = document.querySelectorAll(".keys-btn").length;

for (let j = 0; j < keysBtnLength; j++) {
  keysBtn[j].addEventListener("click", () => {
    const keyValue = keysBtn[j].getAttribute("data-info");
    const letters = document.querySelectorAll("letter[data-letter-input]");
    const tagLength = letters.length;
    const totLength = tagLength / 2;
    if (keyValue === "canc") {
      let c;
      for (let i = totLength; i < tagLength; i++) {
        if (letters[i].textContent === "" /*&& i!==0*/) {
          letters[i - 1].textContent = "";
          letters[i - 1].style = "";
          return;
        }
        c = i;
      }
      if (c != -1) {
        letters[c].textContent = "";
        letters[c].style = "";
      }
      return;
    }
    for (let i = totLength; i < tagLength; i++) {
      if (letters[i].textContent === "") {
        letters[i].textContent = keyValue;
        letters[i].style =
          "animation-name: write-letters; animation-duration: 1s; animation-iteration-count: 1;";
        return;
      }
    }
  });
}
