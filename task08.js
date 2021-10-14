function convertIntoTime(number){
    
    let hours = 0;
    while(number > 60)
    {
        number -= 60;
        hours++;
    }
    let minutes = number;

    let minuteToken;
    let hourToken;

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

