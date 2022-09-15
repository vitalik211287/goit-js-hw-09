const refs = {
  delayEl: document.querySelector('input[name="delay"]'),
  stepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelector('input[name="amount"]'),
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  let delay = Number(refs.delayEl.value);
  const inputStepValue = Number(refs.stepEl.value);
  const amountValue = Number(refs.amountEl.value);

  for (let position = 1; position <= amountValue; position += 1) {
    setTimeout(() => {
      createPromise(position, delay)
        .then(succses=>{succses})
        .catch(error=>{error});
    }, delay);

    delay += inputStepValue;
  }
});

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(onSuccess(position, delay));
    } else {
      reject(onErrore(position, delay));
    }
  });
};


function onSuccess(position, delay) {
  return console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
function onErrore(position, delay) {
 return console.log(`❌ Rejected promise ${position} in ${delay}ms`);
}
