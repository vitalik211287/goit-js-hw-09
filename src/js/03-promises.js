import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function submitHandler(e) {
  e.preventDefault();

  const {
    elements: { delay: _delay, step, amount },
  } = e.target;

  let delay = Number(_delay.value);
  const inputStepValue = Number(step.value);
  const amountValue = Number(amount.value);

  for (let position = 1; position <= amountValue; position += 1) {
    createPromise(position, delay).then(onSuccess).catch(onErrore);

    delay += inputStepValue;
    e.target.reset();
  }
}

function onSuccess({ position, delay }) {
  return Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onErrore({ position, delay }) {
  return Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

refs.formEl.addEventListener('submit', submitHandler);
