const colors = [
  '#FF0000',
  '#FFA500',
  '#FFFF00',
  '#008000',
  '#00FFFF',
  '#0000FF',
  '#800080'
];


const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener('click', onBtnStartClick);
stopBtn.addEventListener('click', onBtnStopClick);

const randomIntegerFromInterval = (min, max) => {
return Math.floor(Math.random() * (max - min + 1) + min);
}

function onBtnStartClick(event) { 
  // console.log('click on start')
  intervalId = setInterval(addBackgroundColor, 1000)
  event.target.disabled = true
}

function onBtnStopClick(event) {
  // console.log('click on stop')
  clearInterval(intervalId)
  startBtn.disabled = false
}

function addBackgroundColor() {
  const randomIndex = randomIntegerFromInterval(0,colors.length-1)
  document.body.style.backgroundColor = colors[randomIndex]
}


