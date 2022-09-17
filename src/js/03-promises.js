const refs = {
  formEl: document.querySelector('.form'),
};

const createPromise = (position, _delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve();
    } else {
      reject();
    }
  });
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const {
    elements: { delay: _delay, step, amount },
  } = refs.formEl;

  let delay = Number(_delay.value);
  const inputStepValue = Number(step.value);
  const amountValue = Number(amount.value);

  for (let position = 1; position <= amountValue; position += 1) {
    const totalDelay = (delay += inputStepValue);
    setTimeout(() => {
      createPromise(position, delay)
        .then(() => {
          onSuccess(position, totalDelay);
        })
        .catch(() => {
          onErrore(position, totalDelay);
        });
    }, delay);
    totalDelay;
  }
});

function onSuccess(position, delay) {
  return console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
function onErrore(position, delay) {
  return console.log(`❌ Rejected promise ${position} in ${delay}ms`);
}
