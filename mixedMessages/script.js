const d = new Date();
let time = d.getTime(); // returns num ms since jan 1, 1970
console.log(time);
const lastDigitStr = String(time).slice(-1);  //gets last digit of the time
console.log(lastDigitStr);

// script will determine how to get to school

const totalRoute = {
    modeOfTransport: ['bike', 'train', 'bus', 'walk'],
    leaveAt: ['7:30', '8:00', '9:00'],
    getSnack: ['Dunkin\'', 'Starbucks', 'Matto']
}


// store route in an array
let schoolRoute = []

// iterate through transit, time, snack

for(let choice in totalRoute){
    let ranNum = Math.floor(Math.random()*totalRoute[choice].length)
    console.log(ranNum)
}
