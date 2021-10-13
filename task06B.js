function findMaximum(){
    var max = arguments[0];
    for(var index=0; index<arguments.length; index++){
        if(arguments[index] > max){
            max = arguments[index]
        }
    }

    return max;
}

console.log(findMaximum(6,8,3,10));