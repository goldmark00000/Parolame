const wordlLength = 6;
const wordls = [];
let nrow = 1;

addEventListener("keydown", ({ key, keyCode }) => {
  const letters = document.querySelectorAll(`letter[data-row="${nrow}"]`);
  const tagLength = letters.length;
  if (keyCode === 13) {
    if (nrow <= 4) {
      nrow++;
    }
    return;
  }
  if (keyCode === 8) {
    let c;
    for (let i = 0; i < tagLength; i++) {
      if (letters[i].textContent === "") {
        letters[i - 1].textContent = "";
        return;
      }
      c = i;
    }
    letters[c].textContent = "";
    return;
  }
  if (keyCode >= 65 && keyCode <= 90)
    for (let i = 0; i < tagLength; i++) {
      if (letters[i].textContent === "") {
        letters[i].textContent = key;
        return;
      }
    }
});
