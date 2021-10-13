function vowelPrinter(string){
    var result = "Vowels:";
    for(var index=0; index<string.length; index++){
        if(result === "Vowels:"){
            if(string.charAt(index) === 'a' || string.charAt(index) === 'A'){
                result += " " + string.charAt(index);
            }

            else if(string.charAt(index) === 'e'|| string.charAt(index) === 'E'){
                result += " " + string.charAt(index);
            }

            else if(string.charAt(index) === 'i' || string.charAt(index) === 'I'){
                result += " " + string.charAt(index);
            }

            else if(string.charAt(index) === 'o' || string.charAt(index) === 'O'){
                result += " " + string.charAt(index);
            }

            else if(string.charAt(index) === 'u' || string.charAt(index) === 'U'){
                result += " " + string.charAt(index);
            }
        }
        else{
            if(string.charAt(index) === 'a' || string.charAt(index) === 'A'){
                result += " ," + string.charAt(index);
            }

            else if(string.charAt(index) === 'e' || string.charAt(index) === 'E'){
                result += " ," + string.charAt(index);
            }

            else if(string.charAt(index) === 'i' || string.charAt(index) === 'I'){
                result += " ," + string.charAt(index);
            }

            else if(string.charAt(index) === 'o' || string.charAt(index) === 'O'){
                result += " ," + string.charAt(index);
            }

            else if(string.charAt(index) === 'u' || string.charAt(index) === 'U'){
                result += " ," + string.charAt(index);
            }
        }
    }

    return result;
}

console.log(vowelPrinter("Umuzi"));



