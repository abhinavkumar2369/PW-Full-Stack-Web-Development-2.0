// Reverse a string
function reverse(string){
    let rev=''
    for(let index=0;index<string.length;index++){
        rev += string[string.length-1-index]
    }
    return rev
}

// Function Call
console.log(reverse("Abhinav"))
console.log(reverse('Aryan'))
console.log(reverse("123456789"))