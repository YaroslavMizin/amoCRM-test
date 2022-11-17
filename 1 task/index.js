const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {

  let interval;
  const form = (time) => time < 10 ? '0' + time : time;

  return (seconds) => {

    clearInterval(interval);

    interval = setInterval(() => {
      if (seconds <= 0) return;
      seconds--;
      const hours = Math.floor(seconds / 60 / 60),
        minutes = Math.floor(seconds * 60 / 60 / 60) - (hours * 60);
      timerEl.innerHTML = `${form(hours)}:${form(minutes)}:${form(seconds % 60)}`
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  if (isNaN(inputEl.value)) {
    inputEl.value = '';
  }
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});