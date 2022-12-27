const confirmBtn = document.querySelector(".confirm-btn");
const cancelBtn = document.querySelector(".cancel-btn");

cancelBtn.addEventListener("click", () => {
  location.href = "../src/home.php";
});

confirmBtn.addEventListener("click", () => {

  if (localStorage.getItem("cookieBlocker") != 1) {
    return alert("You DIDN'T ACCEPT the cookies");
  }

  const password = document.querySelector("#password").value;
  const passwordConfirm = document.querySelector("#confirmPassword").value;

  const whitespace=password.match(/\s/);
  if(whitespace !== null){
    return alert("Spaces are not allowed");
  }

  if (password !== passwordConfirm) {
    return alert("Passwords don't match");
  }

  const httpReq = new XMLHttpRequest();
  let parameters = `newAccountPassword=${password}`;

  httpReq.onload = ({ target }) => {
    const responseJSON = JSON.parse(target.response);
    const idPlayerDisplay = document.querySelector("#idPlayerShow");
    const idPlayerContainer = document.querySelector(".id-player-container");
    idPlayerDisplay.textContent = responseJSON.idNewPlayer;
    document.getElementById("displayPassword").remove();
    document.getElementById("displayConfirmPassword").remove();
    idPlayerContainer.style = "display: block;";
  };

  httpReq.open("POST", "../src/newaccountref.php");
  httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  httpReq.send(parameters);
});
