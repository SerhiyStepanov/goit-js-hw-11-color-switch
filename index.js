const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]') 
// console.log(startBtn)
const stopBtn = document.querySelector('button[data-action="stop"]')
// console.log(stopBtn)

startBtn.addEventListener('click', onBtnStartClick)
stopBtn.addEventListener('click', onBtnStopClick)

function onBtnStartClick() { 
  console.log('click on start')
}

function onBtnStopClick() {
  console.log('click on stop')
}

function getItem() {
   for (let i = 0; i < colors.length; i += 1) {
    console.log(colors)
  }
}
 
const randomIntegerFromInterval = (min, max) => {
return Math.floor(Math.random() * (max - min + 1) + min);
};

