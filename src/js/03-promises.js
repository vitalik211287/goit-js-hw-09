function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const refs = {
    delayEl: document.querySelector('input[name=delay]'),
    stepEl: document.querySelector('input[name=step]'),
    amountEl: document.querySelector('input[name=amount]'),
  submitEl: document.querySelector('button[type=submit]'),
};


let inputDelayValue = refs.delayEl.value;
let inputstepValue = refs.stepEl.value;
// inputDelayValue = 1000;
// inputstepValue = 1000;
const totalDelay = inputDelayValue + inputstepValue;
// console.log(totalDelay);

refs.submitEl.addEventListener('click', () => {
   let num = 0
    function countNum() {
        num += 1
        console.log(num);
    }
    for (let i = 0; i < refs.amountEl.value; i++) {
      setTimeout(countNum, totalDelay * (i + 1));
    }
});
