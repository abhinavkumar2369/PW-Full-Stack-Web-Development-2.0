// Function declaration
function noOfProperties(object){
    let count = 0
    for (a in object){
        count++
    }
    return count
}

const car2 = {
    make: 'DEF',
    model : 'Rolls Royal',
    year : 2023
}

// Function Call
console.log(noOfProperties(car2))