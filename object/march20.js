var class_n = 1
let student = {class_n : class_n  ,section : "a"}

const marks = {
    hindi : 70,
    english : 80 ,
    maths : 63
}

const profile ={
    name :  "uma",
    F_name : "jagdish",
    M_name : "laxmi",
    Dob : "20-9-1999"
}
student['marks'] = Object.assign(marks)
// student.marks = marks
student.profile = profile
// student[marks] = Object.assign(marks);
// student={marks , profile}
// marks.hindi = 100;

const student2 = structuredClone(student)
//const student3 ={...student} //{class_n:student.class_n
                                // section : student.section
                                // marks: student.marks
const student3 = {...student,marks:{...student.marks}}
// student.class_n = 2
student.section = "c"
student3.marks.hindi =200;
// console.log(student)
// console.log(student2)
marks.hindi = 100;
console.log(student)
console.log(student2)
console.log(student3,marks)
console.log(student3)


