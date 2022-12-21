const statsBtn = document.querySelector("#statsBtn");
const rulesBtn = document.querySelector("#rulesBtn");
const changeMode = document.querySelector("#changeModeBtn");
const confirmBtn = document.querySelector("#confirmWord");

statsBtn.addEventListener("click", () => {
  console.log("stats");
});  

rulesBtn.addEventListener("click", () => {
  console.log("rules");
});    

changeMode.addEventListener("click", () => {
  console.log("change mode");
});


confirmBtn.addEventListener("click", () => {
  const word = "parola"; //////////////////////////////////////////
  const httpReq = new XMLHttpRequest();
  let parameters = `checkWord=${word}`;
  httpReq.onload = ()=>{
    const response = JSON.parse(this.responseText);
    ///////////////////////////////////////////////////////////////
  }
  httpReq.open("POST", "../src/newaccountref.php");
  httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  httpReq.send(parameters);
});
