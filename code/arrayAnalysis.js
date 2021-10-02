function arrayAnalysis(array) {
let value = {
    average: avg(array) ,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
}
return value;
}
export{arrayAnalysis}

console.log(arrayAnalysis([1,8,3,4,2,6]))

function avg(array) {
    let sum = 0;
    for (let i=0;i<array.length; i++) {
        sum += array[i];
    }
    return sum / array.length
}