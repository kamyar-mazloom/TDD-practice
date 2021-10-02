import { caesar } from "../code/caesarCipher";

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
    expect(caesar("well...ok then!",3)).toBe("zhoo...rn wkhq!")
})

it("different shift test",() => {
    expect(caesar("hi",15)).toBe("wx")
})