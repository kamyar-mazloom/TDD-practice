import { reverseString } from "../code/reverseString";

it("works with words",() => {
    expect(reverseString("hi")).toBe("ih")
})

it("works with sentences",() => {
    expect(reverseString("hi you ")).toBe(" uoy ih")
})

it("works with special characters",() => {
    expect(reverseString("!@#   edc")).toBe("cde   #@!")
})
