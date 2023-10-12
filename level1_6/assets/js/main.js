date1 = new Date(1999, 10, 5, 15);
console.log(date1);

date2 = new Date();
console.log(date2);

date3 = new Date(2019, 12, 3, 12);
console.log(date3);

date4 = new Date(2000, 1, 1, 11);
console.log(date4);

function getTime(date) {
  let hours = date.getHours();
  if (hours >= 12) {
    console.log("PM");
  } else {
    console.log("AM");
  }
}

getTime(date1);
getTime(date2);
getTime(date3);
getTime(date4);
