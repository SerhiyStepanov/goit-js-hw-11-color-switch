const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener('click', onBtnStartClick);
stopBtn.addEventListener('click', onBtnStopClick);

const randomIntegerFromInterval = (min, max) => {
  min = 0;
  max = colors.length;
return Math.floor(Math.random() * (max - min + 1) + min);
}

function onBtnStartClick() { 
  console.log('click on start')
  intervalId = setInterval(getItem,1000)
}

function onBtnStopClick() {
  console.log('click on stop')
  clearInterval(intervalId)
}

function getItem() {
  console.log(randomIntegerFromInterval())
}



