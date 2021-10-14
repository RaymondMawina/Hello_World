function vowelPrinter(string){
    // result = "Vowels:";
    var vowels = [];

    var aExists = false;
    var eExists = false;
    var iExists = false;
    var oExists = false;
    var uExists = false;

    for(var index=0; index<string.length; index++){
         if(aExists === false && (string.charAt(index) === 'A' || string.charAt(index) === 'a')){
            vowels.push(string.charAt(index));
            aExists = true;
         }
         if(eExists === false && (string.charAt(index) === 'E' || string.charAt(index) === 'e')){
            vowels.push(string.charAt(index));
            eExists = true;
         }
         if(iExists === false && (string.charAt(index) === 'I' ||string.charAt(index) === 'i' )){
            vowels.push(string.charAt(index));
            iExists = true;
         }
         if(oExists === false && (string.charAt(index) === 'O' || string.charAt(index) === 'o')){
            vowels.push(string.charAt(index));
            oExists = true;
         }
         if(uExists === false && (string.charAt(index) === 'U' || string.charAt(index) === 'u')){
            vowels.push(string.charAt(index));
            uExists = true;
         }
    }

    var output = "Vowels: ";
    for(var index=0; index<vowels.length; index++){
        if(index === 0)
        {
            output += " " + vowels[index].toLowerCase();
        }
        else{
            output += " ," + vowels[index].toLowerCase();
        }
    }

    return output;
}

console.log(vowelPrinter("Umuzi"));



