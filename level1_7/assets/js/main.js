const date1 = new Date("12.15.2019");
const date2 = new Date("2.16.2001");
const date3 = new Date("2.1.2020");
const date4 = new Date("2.29.2020");
const date5 = new Date("10.14.2023");

function getDay(date) {
  let day = date.getDay();
  if ((day != 0, day != 6)) {
    console.log("Arbeitstag");
  } else {
    console.log("Wochenende");
  }
}

getDay(date1);
getDay(date2);
getDay(date3);
getDay(date4);
getDay(date5);
