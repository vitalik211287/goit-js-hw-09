!function(){var t={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]"),bodyBackgroundColor:document.querySelector("body")},o=null;function n(t){t.setAttribute("disabled","")}function e(t){t.removeAttribute("disabled")}t.startButton.addEventListener("click",(function(r){o=setInterval((function(){t.bodyBackgroundColor.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),n(t.startButton),e(t.stopButton)})),t.stopButton.addEventListener("click",(function(){clearInterval(o),n(t.stopButton),e(t.startButton)}))}();
//# sourceMappingURL=01-color-switcher.93fc2511.js.map
