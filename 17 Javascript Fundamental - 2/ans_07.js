// Function to generate 4-Digit OTP

function generateOTP(){
    let num=Math.random()*9000
    num=Math.floor(num) + 1000
    return num
}
console.log(generateOTP())