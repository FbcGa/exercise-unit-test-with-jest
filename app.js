const fromDollarToYen = (dolar) => {
    return dolar*156.5
}

const fromEuroToDollar = (dolar) => {
    return dolar*1.07
}

const fromYenToPound = (dolar) => {
    return dolar*0.87
}

module.exports = { fromDollarToYen,fromEuroToDollar,fromYenToPound };
