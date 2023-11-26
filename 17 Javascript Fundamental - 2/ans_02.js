// Function to calculate total cart value with infinite arguments
function calculateTotalCartValue(){
    let sum = 0
    for(let index=0 ; index<arguments.length ; index++){
        sum+=arguments[index]
    }
    console.log("The total cart value is " + sum)
}

calculateTotalCartValue(125,20,30)