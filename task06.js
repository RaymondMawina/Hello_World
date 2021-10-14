function findMaximum(){
    let max = arguments[0];
    for(let index=0; index<arguments.length; index++){
        if(arguments[index] > max){
            max = arguments[index]
        }
    }

    return max;
}

console.log(findMaximum(6,8,3,10));