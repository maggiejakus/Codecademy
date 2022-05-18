const d = new Date();
let time = d.getTime(); // returns num ms since jan 1, 1970
console.log(time);
const lastDigitStr = String(time).slice(-1);  //gets last digit of the time
console.log(lastDigitStr);