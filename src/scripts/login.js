const confirmBtn = document.querySelector(".confirm-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const idInput = document.querySelector("#idUser");
const passwordInput = document.querySelector("#passwordUser");

confirmBtn.addEventListener("click", () => {
  const ID = idInput.value;
  const password = passwordInput.value;
  const httpReq = new XMLHttpRequest();
  let parameters = `newId=${ID}&newPassword=${password}`;
  httpReq.open("POST", "../src/newaccount.php");
  httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  httpReq.send(parameters);
});
