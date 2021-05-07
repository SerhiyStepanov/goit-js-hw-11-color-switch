const colors = [
  "#FFC0CB",
  "#FF69B4",
  "#E6E6FA",
  "#DDA0DD",
  "#9932CC",
  "#9370DB",
  "#FFA07A",
  "#F08080",
  "#FF8C00",
  "#FF6347",
  "#FFFFE0",
  "#FFDAB9",
  "#98FB98",
  "#9ACD32",
  "#20B2AA",
  "#00FFFF",
  "#6495ED",
  "#FFEBCD",
  "#BC8F8F",
  "#C0C0C0",
  "#696969",
  "#708090",
  "#FFF0F5",
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener("click", onBtnStartClick);
stopBtn.addEventListener("click", onBtnStopClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onBtnStartClick(event) {
  // console.log('click on start')
  intervalId = setInterval(addBackgroundColor, 1000);
  event.target.disabled = true;
}

function onBtnStopClick(event) {
  // console.log('click on stop')
  clearInterval(intervalId);
  startBtn.disabled = false;
}

function addBackgroundColor() {
  const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.backgroundColor = colors[randomIndex];
  startBtn.style.color = colors[randomIndex];
  startBtn.style.backgroundColor = "#808080";
  startBtn.style.border = "none";
  startBtn.style.padding = "10px 20px";
  startBtn.style.cursor = "pointer";

  stopBtn.style.color = colors[randomIndex];
  stopBtn.style.backgroundColor = "#808080";
  stopBtn.style.border = "none";
  stopBtn.style.padding = "10px 20px";
  stopBtn.style.cursor = "pointer";
}
