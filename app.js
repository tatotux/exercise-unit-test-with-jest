// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

const fromDollartoEuro = function(valueInDolar){
    let valueInEuro = Math.floor(valueInDolar / oneEuroIs.USD);
    return valueInEuro;
}
const fromDollarToYen = function(valueInDollar){     
     let valueInYen = fromDollartoEuro(valueInDollar) * oneEuroIs.JPY;
     return valueInYen;
}

const fromYentoEuro = function(valueInYen){
    let valueInEuro = Math.floor(valueInYen / oneEuroIs.JPY);
    return valueInEuro;
}
const fromYenToPound = function(valueInYen){
     let valueInBp = fromYentoEuro(valueInYen) * oneEuroIs.GBP;
     return valueInBp;
}
module.exports = { sum, fromDollarToYen,fromEuroToDollar,fromYenToPound}