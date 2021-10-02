function caesar(string,shiftValue) {
    let output = '';
    for (let i=0; i < string.length; i++) {
        output += valueToLetter(shift(letterToValue(
            stringToArray(string)[i]),shiftValue))  
    }
    return output
}

export{caesar}

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'
, 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let capAlphabet = ['A', 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' ,
 'J' , 'K' , 'L' , 'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' ,
  'V' , 'W' , 'X' , 'Y' , 'Z']

function stringToArray(string) {
    let array = string.split("");
    return array;
}

  function letterToValue(letter) {
      if (alphabet.includes(letter.toLowerCase())) {
        if (letter == letter.toUpperCase()) {
            let value = [capAlphabet.indexOf(letter),"upper"];
            return value;
        }
        let value = [alphabet.indexOf(letter),"lower"];
        return value;
      }
      let value = [letter,"misc"]
      return value
}

function shift(value,shiftValue) {
    if (value[1] !== "misc") {
        if(value[0]+shiftValue < 26){
            let shiftedValue = [value[0]+shiftValue,value[1]];
            return shiftedValue;
        }
        else {
            let shiftedValue = [value[0]+shiftValue-26,value[1]];
            return shiftedValue;
        }

    }
    let shiftedValue = [value[0],value[1]];
    return shiftedValue;
}

function valueToLetter (value) {
    if (value[1] == "misc") {
        return (value[0])
    }
    else if (value[1] == "upper") {
        return (capAlphabet[value[0]])
    } 
    return (alphabet[value[0]])
}