type ClockHTML =  HTMLElement | null;

const digClock = document.querySelector(".digitalClock");
const dayInWeek = document.querySelector(".date");
const analogHour: ClockHTML = document.querySelector(".hourLine");
const analogMinute: ClockHTML = document.querySelector(".minuteLine");
const analogSecund: ClockHTML = document.querySelector(".secondLine");

const day = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];

const months = [
  "JAN",
  "FEB",
  "MART",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function setClock() { }

setInterval(() => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const second = date.getSeconds();

  const viewSecond = second * 6;
  const viewMinutes = minutes * 6;
  const viewHour = date.getHours() * 30;

  const nowMonth = date.getMonth();
  const nowWeek = date.getDay();
  const nowDay = date.getDate();

  digClock !== null ? digClock.innerHTML = `${hour < 10 ? `0${hour}` : hour}: ${minutes < 10 ? `0${minutes}` : minutes}` : null;
  dayInWeek !== null ? dayInWeek.innerHTML = `${day[nowWeek]}, ${months[nowMonth]} <span>${nowDay}</span>` : null;

  analogSecund !== null ? analogSecund.style.transform = `rotate(${viewSecond}deg)` : null;
  analogMinute !== null ? analogMinute.style.transform = `rotate(${viewMinutes}deg)` : null;
  analogHour !== null ? analogHour.style.transform = `rotate(${viewHour > 360 ? viewHour - 360 : viewHour}deg)` : null;
}, 1000);
