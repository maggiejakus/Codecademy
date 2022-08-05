const d = new Date();
let time = d.getTime(); // returns num ms since jan 1, 1970
const lastDigitStr = String(time).slice(-1);  //gets last digit of the time

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
    schoolRoute[choice] = totalRoute[choice][ranNum]
}

//console.log('to get to school, you will take the ' + schoolRoute[modeOfTransport] + ' and you will leave at ' + schoolRoute[leaveAt] + ' and you will eat ' + schoolRoute[getSnack])
let newString = 'You will take the ' + schoolRoute.modeOfTransport + ', leaving at ' + schoolRoute.leaveAt + ' and you will get a snack at '+ schoolRoute.getSnack + '. You will do this ' + lastDigitStr + ' days in a row'
console.log(newString)
