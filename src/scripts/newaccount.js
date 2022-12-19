const confirmBtn = document.querySelector(".confirm-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const idInput = document.querySelector("#idUser");
const passwordInput = document.querySelector("#passwordUser");

confirmBtn.addEventListener("click", () => {
  const password = passwordInput.value;
  const httpReq = new XMLHttpRequest();
  let parameters = `newAccountPassword=${password}`;
  httpReq.open("POST", "../src/newaccountref.php");
  httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  httpReq.send(parameters);
});