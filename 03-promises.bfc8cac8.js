!function(){var n={formEl:document.querySelector(".form")};n.formEl.addEventListener("submit",(function(e){var o=function(n){var e=a+=i;setTimeout((function(){new Promise((function(n,e){Math.random()>.3?n():e()})).then((function(){!function(n,e){console.log("✅ Fulfilled promise ".concat(n," in ").concat(e,"ms"))}(n,e)})).catch((function(){!function(n,e){console.log("❌ Rejected promise ".concat(n," in ").concat(e,"ms"))}(n,e)}))}),a)};e.preventDefault();for(var t=n.formEl.elements,c=t.delay,u=t.step,r=t.amount,a=Number(c.value),i=Number(u.value),m=Number(r.value),l=1;l<=m;l+=1)o(l)}))}();
//# sourceMappingURL=03-promises.bfc8cac8.js.map
