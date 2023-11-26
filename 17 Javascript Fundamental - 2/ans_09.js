// Username Declaration
let username = 'mithun123'

// Function
function uniqueCharactersCheck(name){
    if(username.includes(name)){
        console.log("The input string contains unique characters.")
    }
    else{
        console.log("The input string contains duplicates.")
    }
}

uniqueCharactersCheck('Mithun')
uniqueCharactersCheck('anurag')