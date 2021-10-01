import { caesar } from "../code/caesarCipher";
import { alphabet } from "../code/caesarCipher";
import { capAlphabet } from "../code/caesarCipher";
import { letterToValue } from "../code/caesarCipher";
import { valueToLetter }  from "../code/caesarCipher";


//Ceasar tests
it("word test",() => {
    expect(caesar("hi",3)).toBe("kl")
})

it("0 shift test",() => {
    expect(caesar("hi",0)).toBe("hi")
})

it("sentence test",() => {
    expect(caesar("how you doin",3)).toBe("krz brx grlq")
})

it("capital-letter test",() => {
    expect(caesar("How You Doin",3)).toBe("Krz Brx Grlq")
})

it("punctuation test",() => {
    expect(caesar("How You Doin",3)).toBe("zhoo...rn wkhq!")
})

it("different shift test",() => {
    expect(caesar("hi",15)).toBe("wx")
})

//alphabet tests
it("alphabet position test",() => {
    expect(alphabet[0]).toBe("a")
})

it("alphabet position test 2",() => {
    expect(alphabet[25]).toBe("z")
})

it("alphabet position test 3",() => {
    expect(alphabet.indexOf("z")).toBe(25)
})

//capAlphabet tests
it("cap alphabet position test",() => {
    expect(capAlphabet[0]).toBe("A")
})

it("cap alphabet position test 2",() => {
    expect(capAlphabet[25]).toBe("Z")
})

it("cap alphabet position test 3",() => {
    expect(capAlphabet.indexOf("A")).toBe(0)
})

//letterToValue tests
it("lower case value", () => {
    expect(letterToValue("a")).toBe((1,"lower"))
})

it("upper case value", () => {
    expect(letterToValue("A")).toBe((1,"upper"))
})

//valueToLetter tests

it("lower case letter" , () => {
    expect(valueToLetter(0,"lower")).toBe("a")
})

it("upper case letter" , () => {
    expect(valueToLetter(0,"upper")).toBe("A")
})