!function(){var n={formEl:document.querySelector(".form")};n.formEl.addEventListener("submit",(function(e){var o=function(n){setTimeout((function(){new Promise((function(n,e){Math.random()>.3?n():e()})).then((function(){!function(n,e){console.log("✅ Fulfilled promise ".concat(n," in ").concat(e,"ms"))}(n,i)})).catch((function(){!function(n,e){console.log("❌ Rejected promise ".concat(n," in ").concat(e,"ms"))}(n,i)}))}),i),i+=m};e.preventDefault();for(var t=n.formEl.elements,c=t.delay,u=t.step,r=t.amount,i=Number(c.value),m=Number(u.value),a=Number(r.value),l=1;l<=a;l+=1)o(l)}))}();
//# sourceMappingURL=03-promises.354cdc9e.js.map
