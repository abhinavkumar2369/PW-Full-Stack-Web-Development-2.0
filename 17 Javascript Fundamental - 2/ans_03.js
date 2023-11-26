// Lists of Student Objects
const students = [
    {
        name:"Mithun",
        marks:95,
    },
    {
        name:"Prabir",
        marks:75,
    },
    {
        name:"Alka",
        marks:92,
    },
    {
        name:"Shivam",
        marks:70,
    },
    {
        name:"Farman",
        marks:99,
    },
]

// Function to check whether the student cleared the exam or not
function checksResults(i){
    let count = 0;
    for(let index=0;index<students.length;index++){
        if (i==students[index].name){
            if(students[index].marks>90){
                console.log(`Congratulations ${i} ! You have cleared the exam`);
                count=1;
            }
            else{
                console.log("Sorry ! You have not cleared the exam")
                count=1
            }
        }
    }
    if (count==0){
        console.log("Invalid User !!!")
    }
}

// Function Execution
checksResults("Mithun")
checksResults("Prabir")
checksResults("a")