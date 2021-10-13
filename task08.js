function convertIntoTime(number){
    
    var hours = 0;
    while(number > 60)
    {
        number -= 60;
        hours++;
    }
    var minutes = number;

    var minuteToken;
    var hourToken;

    if(minutes === 1){
        minuteToken = "minute";
    }
    else{
        minuteToken = "minutes"
    }

    if(hours === 1){
        hourToken = "hour";
    }
    else{
        hourToken = "hours"
    }

    return hours + " " + hourToken + ", " + minutes + " " + minuteToken;
}

console.log(convertIntoTime(1));

