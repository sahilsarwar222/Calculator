const clickSound = new Audio('click.wav');

function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

let display = document.getElementById('display');

function appendValue(value) {
  playSound();
  display.value += value;
}

function clearDisplay() {
  playSound();
  display.value = '';
}

function deleteLast() {
  playSound();
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    playSound();
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

document.addEventListener('keydown', function (e) {
  if (e.key >= 0 && e.key <= 9) appendValue(e.key);
  else if (['+', '-', '*', '/', '%', '.'].includes(e.key)) appendValue(e.key);
  else if (e.key === 'Enter') calculateResult();
  else if (e.key === 'Backspace') deleteLast();
  else if (e.key.toLowerCase() === 'c') clearDisplay();
});