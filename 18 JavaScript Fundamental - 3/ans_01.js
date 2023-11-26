// Function declaration
function properties(obj){
    console.log("-----DETAILS-----")
    for(keys in obj){
        console.log( keys + ' : ' +obj[keys])
    }
}

// ObjectS
const car1 = {
    make: 'ABC',
    model : 'Farari',
    year : 2022
}
const car2 = {
    make: 'DEF',
    model : 'Rolls Royal',
    year : 2023
}

// Function Call
properties(car1)
properties(car2)