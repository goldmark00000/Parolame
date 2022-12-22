const confirmBtn = document.querySelector(".confirm-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const idInput = document.querySelector("#idUser");
const passwordInput = document.querySelector("#passwordUser");

cancelBtn.addEventListener("click", () => {
  location.href="../src/home.php";
});

confirmBtn.addEventListener("click", () => {
  if (localStorage.getItem("cookieBlocker") == 0) {
    return alert("you not accept the cookies");
  }

  const password = passwordInput.value;
  const httpReq = new XMLHttpRequest();
  let parameters = `newAccountPassword=${password}`;

  httpReq.onload = () => {
    document.querySelector()
    const obj=document.createElement("div").setAttribute("class", "");
  };

  httpReq.open("POST", "../src/newaccountref.php");
  httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  httpReq.send(parameters);
});
