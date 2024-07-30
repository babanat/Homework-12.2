const buttons = document.getElementById("buttons");

function pressing(event) {
  if (event.target.tagName === "BUTTON") {
    document.getElementById("result").textContent = event.target.textContent;
  }
}
buttons.addEventListener("click", pressing);
