function calsiusToFahrenheit(calsius){
    let fahrenheit = (9/5)*calsius + 32;
    return fahrenheit;
}

function fahrenheitToCalsius(fahrenheit){
    let calsius = (fahrenheit - 32)*(5/9);
    return calsius;
}

console.log(calsiusToFahrenheit(50));
console.log(fahrenheitToCalsius(122));