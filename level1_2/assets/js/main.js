// -============ Konsole ===============================================

let dateToday = new Date();
console.log(dateToday);

let dateTodayYear = dateToday.getFullYear().toString();
console.log(dateTodayYear);

let dateTodayMonth = dateToday.getMonth();
console.log(dateTodayMonth + " Monat");

let dateTodayHour = dateToday.getHours();
console.log(dateTodayHour + " Stunde");

let dateTodayMinutes = dateToday.getMinutes();
console.log(dateTodayMinutes + " Minute");

let dateTodaySeconds = dateToday.getSeconds();
console.log(dateTodaySeconds + " Sekunde");

let dateObj1 = new Date();
let weekday = dateObj1.toLocaleString("default", { weekday: "long" });
console.log(weekday); //// Dienstag

let dateObj2 = new Date();
let month = dateObj2.toLocaleString("default", { month: "long" });
console.log(month); //// Oktober

// -============ Konsole ===============================================

let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

let now = new Date();

let hours = now.getHours();
console.log(hours);
let minutes = now.getMinutes();
console.log(minutes);
let seconds = now.getSeconds();
console.log(seconds);

function getTime() {
  let uhrzeit = document.querySelector(".uhrzeit");
  uhrzeit.innerHTML = `${hours} : ${minutes} : ${seconds}`;
  if (seconds === 0) {
    seconds++;
    uhrzeit.innerHTML = `${hours} : ${minutes} : 0${seconds}`;
  } else if (seconds < 9) {
    seconds++;
    uhrzeit.innerHTML = `${hours} : ${minutes} : 0${seconds}`;
  } else if (seconds >= 9 && seconds < 60) {
    seconds++;
    uhrzeit.innerHTML = `${hours} : ${minutes} : ${seconds}`;
  } else if (seconds === 59) {
    seconds = 0;
    minutes++;
  } else if (minutes <= 9) {
    minutes++;
    uhrzeit.innerHTML = `${hours} : 0${minutes} : ${seconds}`;
  } else if (minutes >= 9 && minutes < 59) {
    seconds++;
    uhrzeit.innerHTML = `${hours} : ${minutes} : ${seconds}`;
  } else if (minutes === 59) {
    minutes = 0;
    uhrzeit.innerHTML = `${hours} : 00 : ${seconds}`;
    hours++;
  } else if (hours <= 9) {
    uhrzeit.innerHTML = `0${hours} : ${minutes} : ${seconds}`;
  }
}

setInterval(() => {
  getTime();
}, 1000);
