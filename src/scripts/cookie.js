const cookieBackground = document.querySelector(".cookie-background");
const denyBtn = document.querySelector(".deny-btn");
const acceptBtn = document.querySelector(".accept-btn");

document.addEventListener("DOMContentLoaded", () => {
  localStorage.setItem("cookieBlocker", "1"); // da togliere
  const cookieBlockerValue = localStorage.getItem("cookieBlocker");
  cookieBackground.style="display: block;";
  if (cookieBlockerValue == 0 || cookieBlockerValue == 1) {
    cookieBackground.style="display: none;";
  }
});

denyBtn.addEventListener("click", () => {
  localStorage.setItem("cookieBlocker", 0);
  cookieBackground.style = "display: none;";
});

acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookieBlocker", 1);
  cookieBackground.style = "display: none;";
});
