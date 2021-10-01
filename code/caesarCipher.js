function caesar(string,shift) {

}

export{caesar}

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'
, 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let capAlphabet = ['A', 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' ,
 'J' , 'K' , 'L' , 'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' ,
  'V' , 'W' , 'X' , 'Y' , 'Z']

function letterToValue(letter) {
    if (letter == letter.toUpperCase()) {
        let value = [capAlphabet.indexOf(letter),"upper"]
        return value
    }
    let value = [alphabet.indexOf(letter),"lower"]
    return value
}

function valueToLetter (value) {
    if (value[1] == "upper") {
        return (capAlphabet[value[0]])
    } 
    return (alphabet[value[0]])
}

console.log(letterToValue("B"))

console.log(valueToLetter(letterToValue("B")))
