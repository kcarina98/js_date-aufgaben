let date1 = new Date();
console.log(date1);

const date2 = new Date();
date2.setFullYear(2123);
console.log(date2); //// Jahr 2123

date2.setMonth(10);
console.log(date2); //// November

date2.setDate(25);
console.log(date2); //// 25. November

//- ???????????????????
let date3 = new Date(date3.setDate(+3 * 24 * 60 * 60 * 1000));

console.log(date3);
