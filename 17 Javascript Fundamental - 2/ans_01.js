// List declaration
let list = ["Mithun","abhilesh"]

// Funtion declaration
function isUserPresent(name){
    let count=0;
    for(let index=0;index<list.length;index++){
        if(name==list[index]){
            console.log(`Yes, ${name} is a valid user.`)
            count=1
            break
        }
    }
    if (count==0){
        console.log(`No, ${name} is not a valid user.`)
    }
}

// Using function
isUserPresent("Mithun")
isUserPresent("someone")