const refs = {
    delayEl: document.querySelector('input[name="delay"]'),
    stepEl: document.querySelector('input[name="step"]'),
    amountEl: document.querySelector('input[name="amount"]'),
    formEl: document.querySelector('.form'),
};



refs.formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  let inputDelayValue = Number(refs.delayEl.value);
  const inputStepValue = Number(refs.stepEl.value);
  const amountValue = Number(refs.amountEl.value);

  for (let position = 1; position <= amountValue; position+=1) {
    setTimeout(()=>{
      console.log(position)
    }, inputDelayValue);

    inputDelayValue+=inputStepValue;
  }
})

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }