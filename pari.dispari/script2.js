const divide = prompt('pari o dispari?')
const userNum = parseInt(prompt('Digita un numero da uno a 5'))
const pcNum = getRandomNum (1,5)
const sum = userNum + pcNum
console.log(divide,userNum, pcNum, sum)

if (divide == oddOrEven(sum)){
    console.log('Hai vinto')
} else{
    console.log('Hai perso')
}


function getRandomNum (min, max) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random
}

function oddOrEven(number) {
    if (number % 2 == 0) {
        return 'pari'
    }
    return 'dispari'
}