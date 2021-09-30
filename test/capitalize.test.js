import { capitalize } from "../code/capitalize";

it('capitalization works for word',() => {
    expect(capitalize("sam")).toBe("Sam")
})

it('capitalization works for sentence',() => {
    expect(capitalize("sam had a kite")).toBe("Sam had a kite")
})


it('capitalization works for already calitalized word',() => {
    expect(capitalize("Sam")).toBe("Sam")
})