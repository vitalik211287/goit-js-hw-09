import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let timeInMs = Date.now();

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: timeInMs,
  minuteIncrement: 1,
  onClose: onCloseCallback,
});

const refs = {
  startButton: document.querySelector('button[data-start]'),
  inputClick: document.querySelector('#datetime-picker'),
  divDays: document.querySelector('span[data-days]'),
  divHours: document.querySelector('span[data-hours]'),
  divMinutes: document.querySelector('span[data-minutes]'),
  divSeconds: document.querySelector('span[data-seconds]'),
};

disableStartButton();

refs.startButton.addEventListener('click', () => {
  refs.inputClick.setAttribute('disabled', '');
  disableStartButton();
  const intervalId = setInterval(() => {
    if (timeInMs > Date.now()) {
      const timeObj = convertMs(timeInMs - Date.now());
      return updateTimer(timeObj);
    }
    clearInterval(intervalId);
  }, 1000);
});

function disableStartButton() {
  refs.startButton.setAttribute('disabled', '');
}

function onCloseCallback([selectedTime]) {
  if (selectedTime < Date.now()) {
    disableStartButton();
    return alert('Please choose a date in the future');
  }
  timeInMs = selectedTime;
  refs.startButton.removeAttribute('disabled');
}

function pad(value) {
  return String(value).padStart(2, '0');
}

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

function updateTimer({ days, hours, minutes, seconds }) {
  refs.divDays.textContent = `${days}`;
  refs.divHours.textContent = `${hours}`;
  refs.divMinutes.textContent = `${minutes}`;
  refs.divSeconds.textContent = `${seconds}`;
}
