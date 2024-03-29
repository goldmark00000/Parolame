addEventListener("keydown", ({ key, keyCode }) => {
  const letters = document.querySelectorAll("letter[data-letter-input]");
  const tagLength = letters.length;
  const totLength = tagLength / 2;
  if (keyCode === 8) {
    let c;
    for (let i = totLength; i < tagLength; i++) {
      if (letters[i].textContent === "") {
        letters[i - 1].textContent = "";
        letters[i - 1].parentNode.style = "";
        return;
      }
      c = i;
    }
    if (c != -1) {
      letters[c].textContent = "";
      letters[c].parentNode.style = "";
    }
    return;
  }
  if (keyCode >= 65 && keyCode <= 90) {
    for (let i = totLength; i < tagLength; i++) {
      if (letters[i].textContent === "") {
        letters[i].textContent = key;
        letters[i].parentNode.style =
          "animation-name: writing-letters; animation-duration: 500ms; animation-iteration-count: 1;";
        return;
      }
    }
  }
});