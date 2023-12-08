"use strict";
const digClock = document.querySelector(".digitalClock");
const dayInWeek = document.querySelector(".date");
const analogHour = document.querySelector(".hourLine");
const analogMinute = document.querySelector(".minuteLine");
const analogSecund = document.querySelector(".secondLine");
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
    console.log(date.getHours());
    const nowMonth = date.getMonth();
    const nowWeek = date.getDay();
    const nowDay = date.getDate();
    digClock === null ? null : digClock.innerHTML = `${hour < 10 ? `0${hour}` : hour}: ${minutes < 10 ? `0${minutes}` : minutes}`;
    dayInWeek === null ? null : dayInWeek.innerHTML = `${day[nowWeek]}, ${months[nowMonth]} <span>${nowDay}</span>`;
    analogSecund === null ? null : analogSecund.style.transform = `rotate(${viewSecond}deg)`;
    analogMinute === null ? null : analogMinute.style.transform = `rotate(${viewMinutes}deg)`;
    analogHour === null ? null : analogHour.style.transform = `rotate(${viewHour > 360 ? viewHour - 360 : viewHour}deg)`;
}, 1000);
