const refs = {
  delayEl: document.querySelector('input[name="daley"]'),
  stepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelector('input[name="amount"]'),
  formEl: document.querySelector('.form'),
};

const createPromise = (position, daley) => {
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
  let {
    elements: { delay, step, amount },
  } = refs.formEl;

  let daley = Number(delay.value);
  const inputStepValue = Number(step.value);
  const amountValue = Number(amount.value);

  for (let position = 1; position <= amountValue; position += 1) {
    setTimeout(() => {
      createPromise(position, daley)
        .then(() => {
          onSuccess(position, daley);
        })
        .catch(() => {
          onErrore(position, daley);
        });
    }, daley);

    daley += inputStepValue;
  }
});

function onSuccess(position, daley) {
  return console.log(`✅ Fulfilled promise ${position} in ${daley}ms`);
}
function onErrore(position, daley) {
  return console.log(`❌ Rejected promise ${position} in ${daley}ms`);
}
