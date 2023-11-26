// Function to count words
function wordCounter(){
    let arr = sentence.split(' ')
    let arrmap = new Map()
    for (let index=0; index<arr.length ; index++){
        if(arrmap.has(arr[index])){
            count = arrmap.get(arr[index])
            arrmap.set(arr[index],++count)
        }
        else{
            arrmap.set(arr[index],1)
        }
    }
    return arrmap
}

const sentence = "please please submit your assignment on time, your assignments are important"
const result = wordCounter(sentence)

console.log(result)