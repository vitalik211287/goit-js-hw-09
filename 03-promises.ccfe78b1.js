!function(){var e={delayEl:document.querySelector('input[name="delay"]'),stepEl:document.querySelector('input[name="step"]'),amountEl:document.querySelector('input[name="amount"]'),formEl:document.querySelector(".form")};e.formEl.addEventListener("submit",(function(o){var t=function(e){setTimeout((function(){n(e,u).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}),u),u+=c};o.preventDefault();for(var u=Number(e.delayEl.value),c=Number(e.stepEl.value),l=Number(e.amountEl.value),r=1;r<=l;r+=1)t(r)}));var n=function(e,n){return new Promise((function(e,n){Math.random()>.3?e(function(e,n){console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))}()):n(function(e,n){console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}())}))}}();
//# sourceMappingURL=03-promises.ccfe78b1.js.map