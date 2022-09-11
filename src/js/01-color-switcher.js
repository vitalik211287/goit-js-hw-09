const refs = {
startButton: document.querySelector("button[data-start]"),
stopButton: document.querySelector("button[data-stop]"),
bodyBackgroundColor: document.querySelector("body"),
}

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function setDisabled(el) {
  el.setAttribute("disabled",'');
}
function removeDisabled(el) {
  el.removeAttribute("disabled");
}

refs.startButton.addEventListener("click", (el) => {
  timerId = setInterval(() => {
   refs.bodyBackgroundColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
  setDisabled(refs.startButton);
  removeDisabled(refs.stopButton);
});

refs.stopButton.addEventListener("click", () => {
  clearInterval(timerId);
  setDisabled(refs.stopButton);
  removeDisabled(refs.startButton);
});
