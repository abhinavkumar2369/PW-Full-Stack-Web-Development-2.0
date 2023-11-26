// Function Declaration
function check(object,property){
    if (Object.hasOwn(object,property)){
        console.log("Specified Property Present")
    }
    else{
        console.log("Specified Property Not Present")
    }
}

const car2 = {
    make: 'DEF',
    model : 'Rolls Royal',
    year : 2023
}

// Function Call
check(car2,'make')
check(car2,'not_present')