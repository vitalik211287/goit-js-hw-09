// const flatpickr = require('flatpickr');
// import 'flatpickr/dist/flatpickr.min.css';
// import flatpickr from 'flatpickr';



flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});

// console.log(selectedDates[0]);

const refs = {
  startButton: document.querySelector('button[data-start]'),
  inputClick: document.querySelector('#datetime-picker'),
  divDays: document.querySelector('span[data-days]'),
  divHours: document.querySelector('span[data-hours]'),
  divMinutes: document.querySelector('span[data-minutes]'),
  divSeconds: document.querySelector('span[data-seconds]'),
};



// const startTime = refs.inputClick.addEventListener('input', () => console.log(new Date(refs.inputClick.value).getTime()) )
// console.log(startTime);
// let currentTime = Date.now();
// console.dir(refs.divField);


// console.log(startTime);





 refs.inputClick.addEventListener('input', () => {
    const startTime = new Date(refs.inputClick.value).getTime();
    console.log(startTime);
    if (startTime < Date.now()) {
      refs.startButton.setAttribute('disabled', '');

      return alert('Please choose a date in the future');
    } else {
      refs.startButton.removeAttribute('disabled');
      //   const timer = {
      // start() {
      // convertMs();
      
      // },
      //   };
      //   timer.start();
    }
});
// 
// console.log(x);
function pad(value) {
    return String(value).padStart(2, '0');
}

refs.startButton.addEventListener('click', ()=>{
  const startTime = new Date(refs.inputClick.value).getTime();
  refs.inputClick.setAttribute('disabled', '')
        refs.startButton.setAttribute('disabled', '')
  const intervalId = setInterval(() => {
    if (startTime > Date.now()) {
      const {days, hours, minutes, seconds} = convertMs(startTime - Date.now());
        console.log(`${days}:${hours}:${minutes}:${seconds}`);
        updateTimer({ days, hours, minutes, seconds });
        
  } else {
    clearInterval(intervalId);
  }
}, 1000)
}
);



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateTimer(days, hours, minutes, seconds) {
    refs.divDays.textContent =`${days}`,
  refs.divHours.textContent = `${hours}`,
  refs.divMinutes.textContent = `${minutes}`,
  refs.divSeconds.textContent =  `${seconds}`
    // refs.divField.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}

// alert('Please choose a date in the future');
// console.log(convertMs(16000000));



// function y() {
//     if (new Date(refs.inputClick.value).getTime() >= Date.now()) {
//         timerId = setInterval(() => {
//           const timeCur =
//             new Date(refs.inputClick.value).getTime() - Date.now();
//           console.log(timeCur);
//         }, 1000);
//     }
//     // else {
//     //     clearInterval(timerId);
//     // }
// }

// // function z() {
// //     timerId = setInterval(() => {
// //         if (new Date(refs.inputClick.value).getTime() >= Date.now()) {
// //             const timeCur = new Date(refs.inputClick.value).getTime() - Date.now();
// //             // console.log(timeCur);
// //         }
// //     }, 1000)
// //      else {
// //         clearInterval(timerId);
// //     }
// //     }

 
 









