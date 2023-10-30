function calculateCelsiusToFarenheit(val){
    val = val * 9/5 + 32
    return val
}

function calculateFarenheitToCelsius(val){
    val = (val - 32) * 5/9  
    return val
}

function calculateDegree(degree){
    let celsius = degree.toUpperCase().includes("C")
    let farenheit = degree.toUpperCase().includes("F")

    if(!celsius && !farenheit){
        console.log("Tipo de grau não identificado")
    }

    if(celsius){
        let newCelsius = Number(degree.toUpperCase().replace("C", ""));

        console.log("A temperatura em graus Farenheit é de: " + calculateCelsiusToFarenheit(newCelsius) + "°F")

    }
    if(farenheit){
        let newFarenheit = Number(degree.toUpperCase().replace("F", ""))
        console.log("A temperatura em graus Celsius é de: " + calculateFarenheitToCelsius(newFarenheit) + "°C")
    }
}

console.log(calculateDegree("20D"))
console.log(calculateDegree("70f"))
