// como transformar string em número:
// let testString = "29"
// console.log(Number(testString))


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

    if(!celsius || !farenheit){
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

console.log(calculateDegree("20g"))









// function testCelsius(cDegrees){
//     let celciusDegrees = cDegrees.toUpperCase().includes("C")
// }

// function testCelsius(cDegrees){
//  
//
//
//}
//
//
//
//
//
//
//
// function testFarenheit(fDegrees){
//     let farenheitDegrees = fDegrees.toUpperCase().includes("F")
// }
// function calculateDegree(){

//     testCelsius(celsius)
//     testFarenheit(farenheit)
//     if(!testCelsius && !testFarenheit){
//         throw new Error ("Tipo de grau não idenficado!")
//     }
// }

// console.log(calculateDegree())
// //marcação aqui
// // let celsius = "22";
// // let farenheit = "70";


// function transformToAny(){
 
//     if(celsius!=="0" && farenheit!=="0"){

//         Number(celsius)
//         let F = celsius * 9/5 + 32

//         Number(farenheit)
//         let C = (farenheit - 32) * 5/9  

//         console.log("A temperatura de graus Farenheit em graus Celsius é: " + C + "°C")
//         console.log("A temperatura em graus Celsius em graus Farenheit é: " + F + "°F")
//     }
//     else if(celsius!=="0"){

//         Number(celsius)
//         let F = celsius * 9/5 + 32;

//         console.log("A temperatura em graus Farenheit é: " + F + "°F")
//     }
//     else if(farenheit!=="0"){

//         Number(farenheit)
//         let C = (farenheit - 32) * 5/9;

//         console.log("A temperatura em graus Celsius é: " + C + "°C")
//     }
    


// }


// console.log(transformToAny())