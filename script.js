let digClock = document.querySelector(".digitalClock");
let dayInWeek = document.querySelector(".date");
let analogHour = document.querySelector(".hourLine");
let analogMinute = document.querySelector(".minuteLine");
let analogSecund = document.querySelector(".secondLine");

let day = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];

let months = [
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
  console.log(date.getHours());

  const nowMonth = date.getMonth();
  const nowWeek = date.getDay();
  const nowDay = date.getDate();

  digClock.innerHTML = `${hour < 10 ? `0${hour}` : hour}: ${minutes < 10 ? `0${minutes}` : minutes
    }`;

  dayInWeek.innerHTML = `${day[nowWeek]}, ${months[nowMonth]} <span>${nowDay}</span>`;

  analogSecund.style.transform = `rotate(${viewSecond}deg)`;
  analogMinute.style.transform = `rotate(${viewMinutes}deg)`;
  analogHour.style.transform = `rotate(${viewHour > 360 ? viewHour - 360 : viewHour}deg)`;
}, 1000);
