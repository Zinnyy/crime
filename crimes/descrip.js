const buttons = document.querySelector(".submit");
buttons.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.replace("check.html");
});
