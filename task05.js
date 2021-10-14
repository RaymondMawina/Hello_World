function calculateArea(sideA,sideB,sideC){
    let semiPerimeter = 0.5*(sideA + sideB + sideC);
    return Math.sqrt(semiPerimeter*(semiPerimeter-sideA)*(semiPerimeter-sideB)*(semiPerimeter-sideC));
}

console.log(calculateArea(1,2,2));