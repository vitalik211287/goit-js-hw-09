const e={delayEl:document.querySelector('input[name="delay"]'),stepEl:document.querySelector('input[name="step"]'),amountEl:document.querySelector('input[name="amount"]'),formEl:document.querySelector(".form")};e.formEl.addEventListener("submit",(n=>{n.preventDefault();let o=Number(e.delayEl.value);const l=Number(e.stepEl.value),u=Number(e.amountEl.value);for(let e=1;e<=u;e+=1)setTimeout((()=>{t(e,o).then((e=>{})).catch((e=>{}))}),o),o+=l}));const t=(e,t)=>new Promise(((n,o)=>{Math.random()>.3?n(function(e,t){return console.log(`✅ Fulfilled promise ${e} in ${t}ms`)}(e,t)):o(function(e,t){return console.log(`❌ Rejected promise ${e} in ${t}ms`)}(e,t))}));
//# sourceMappingURL=03-promises.95feb20e.js.map