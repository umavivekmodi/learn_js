function getClasses(){
    let classArray = [];
    for(let i = 1; i<= 12 ; i++){
        classArray.push(i)
    }
    return classArray
}
// console.log(getClasses())

function getSections(){
    return ["A","B","C","D"]
}
// console.log(getSections())


let streams = ["commerce","arts","science-maths","science-bio"]

function getStudents(classNum){
    let studentsArray = []
    if(classNum <= 10){
        const [marks , total , percentage] = getMarks(classNum)
        for(let i = 1 ; i <= 2 ; i++){
            studentsArray.push({
                stream : "",
                name : "uma",
                f_name : "jagdish",
                m_name : "laxmi",
                DOB :  `200${Math.floor(Math.random() * 10)}-0${Math.floor(Math.random() * 9) + 1}-0${Math.floor(Math.random() * 9) + 1}`,
                // subjects : getSubjects(classNum),
                stream : "",
                subject : marks,
                total :total,
                percentage : percentage
                
            })
        }
    }else {
        streams.forEach(stream=>{
            const [marks , total , percentage] = getMarks(classNum,stream)
            for(let i = 1 ; i <= 2 ; i++){
                studentsArray.push({
                    stream : "",
                    name : "uma",
                    f_name : "jagdish",
                    m_name : "laxmi",
                    DOB :  `200${Math.floor(Math.random() * 10)}-0${Math.floor(Math.random() * 9) + 1}-0${Math.floor(Math.random() * 9) + 1}`,
                    // subjects : getSubjects(classNum),
                    stream : stream,
                    subject : marks,
                    total :total,
                    percentage : percentage
                    
                })
            }
        })
    }
    return studentsArray
}
// console.log(getStudents())

function getSubjects(classNum, stream = ""){
    if(classNum == 1 || classNum == 2){
        return ["hindi","english","maths"] 
    }else if(classNum == 3 ||classNum == 4 ||classNum == 5 ||classNum == 6 ||classNum == 7 ||classNum == 8){
         return ["hindi","english","maths","G.K.","science","social-science"] 
    }else if(classNum == 9 || classNum == 10){
        return ["hindi","english","maths","G.K.","science","social-science" , "history"]
    }else if((classNum == 11 || classNum == 12) && stream == "arts") {
        return ["literature" ,"hindi","geography" , "english", "political-science"] 
    }else if((classNum == 11 || classNum == 12) && stream == "commerce"){
        return ["accounts","maths","english","hindi","finance"]
    }else if((classNum == 11 || classNum == 12) && stream == "science-bio"){
        return ["bio","physics","chemistry","hindi","english"]
    }else if((classNum == 11 || classNum == 12) && stream == "science-maths"){
        return ["physics","chemistry","maths","english","hindi"]
    }
}
// let subjects = getSubjects(6)
// console.log(subjects)

function getMarks(classNumber,stream){
    let subjects = getSubjects(classNumber,stream)
    let marks = {}
    let total = 0
    subjects.map(subject=>{
        marks[subject] = (Math.floor(Math.random()*51))+50,
        total += marks[subject]
    })
    let percentage = ((total/(subjects.length*100))*100).toFixed(2)
    return [marks, total, percentage];
}
// let mark = getMarks(2)
// console.log(mark)

let student_data = {
    school_name : "BBS",
    established_in : 1885
}
student_data.classes = getClasses().map(classNum=>{
    return{
        class : classNum,
        sections : getSections().map(section=>{
            return{
                section_name : section,
                students : getStudents(classNum)
            }
        })
    }
})

// console.log(student_data.classes.sections);
console.log(JSON.stringify(student_data,0,2))

