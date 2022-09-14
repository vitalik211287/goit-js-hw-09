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
        .then(cuccess => {
          console.log(cuccess);
        })
        .catch(error => {
          console.log(error);
        });
    }, delay);

    delay += inputStepValue;
  }
});

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(onSuccess());
    } else {
      reject(onErrore());
    }
  });
};
// createPromise(2, 1500)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

function onSuccess(position, delay) {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
function onErrore(position, delay) {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
}
