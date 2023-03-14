addEventListener("keydown", ({ key, keyCode }) => {
  const letters = document.querySelectorAll("letter[data-letter-input]");
  const tagLength = letters.length;
  const totLength = tagLength / 2;
  if (keyCode === 8) {
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
  if (keyCode >= 65 && keyCode <= 90) {
    for (let i = totLength; i < tagLength; i++) {
      if (letters[i].textContent === "") {
        letters[i].textContent = key;
        letters[i].style =
          "animation-name: write-letters; animation-duration: 1s; animation-iteration-count: 1;";
        return;
      }
    }
  }
});