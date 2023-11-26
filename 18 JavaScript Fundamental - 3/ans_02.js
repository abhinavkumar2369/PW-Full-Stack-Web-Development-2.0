// Object with Student information & function 
let student_1 = {
    name : "Abhinav",
    age : 19,
    grade : 'A',
    implement: function(g){
        this.grade=g
    }
}

// Object with Student Details
let student_2 = {
    name : "Abhinav",
    age : 19,
    grade : 'A',
}

// Student Detail [BEFORE UPDATION]
console.log(student_1)
console.log(student_2)

// [UPDATION]
student_1.implement("B")
student_1.implement.call(student_2,'C')

// [AFTER UPDATION]
console.log(student_1)
console.log(student_2)