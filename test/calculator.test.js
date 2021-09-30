import { calculator } from "../code/calculator";

it("sum works",() =>{
  expect(calculator.add(1,2)).toBe(3)  
})

it("subtract works",() =>{
    expect(calculator.subtract(12,2)).toBe(10)  
})

it("multiply works",() =>{
    expect(calculator.multiply(3,2)).toBe(6)  
})
  
it("divide works",() =>{
    expect(calculator.divide(1,2)).toBe(0.5)  
})
  