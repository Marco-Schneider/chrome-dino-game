console.log("Loaded the javaScript file!");

var character = document.getElementById("game-character");

document.onkeyup = (e) => {
  e = e || window.event;
  if(e.keyCode == 38) {
    character.classList.add("chromium-dino-jump");
  }
}

character.addEventListener("animationend", () => {
  character.classList.remove("chromium-dino-jump");
})
