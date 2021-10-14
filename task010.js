function findCommonLetters(string1,string2){
    var commonLetters = [];
    var copyOfLetters = "";

    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();


    var count=0;
    while(count<string1.length){
        for(var index=0; index<string2.length; index++){
            if(string1[count] === string2[index]){
                commonLetters.push(string1[count]);
                break;
            }
        }
        count++;
    }
    copyOfLetters = commonLetters;

    count = 0;
    while(count<copyOfLetters.length){
        for(var index=0; index<commonLetters.length; index++){
            if(count !== index && copyOfLetters[count] === commonLetters[index]){
                commonLetters.splice(index,1);
            }
        }
        count++;
    }

    var output = "Common letters: ";
    for(var index=0; index<commonLetters.length; index++){
        if(index === 0){
            output += commonLetters[index];
        }
        else{
            output += ", " + commonLetters[index];
        }

    }

    console.log(output);
}

findCommonLetters("Raaymond", "aurthorm");