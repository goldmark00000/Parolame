const confirmBtn = document.querySelector(".confirm-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const idInput = document.querySelector("#idUser");
const passwordInput = document.querySelector("#passwordUser");

cancelBtn.addEventListener("click", () => {
  location.href="../src/home.php";
});

confirmBtn.addEventListener("click", () => {
  const ID = idInput.value;
  const password = passwordInput.value;
  const httpReq = new XMLHttpRequest();
  let parameters = `IdUser=${ID}&Password=${password}`;
  
  httpReq.onload = ({ target }) => {
    if(target.response==true){
      location.href="../src/home.php";
    }else{
      alert("ID or password incorrect");
    }
  };

  httpReq.open("POST", "../src/authenticationref.php");
  httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  httpReq.send(parameters);
});