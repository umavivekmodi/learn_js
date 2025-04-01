let classes_number = []

sections= ["A","B","C","D"]
function getMarks(subjects){
    markObj = {}
    total_marks = 0;
    let percentage = 0;
    
    for(let i =0 ;i < subjects.length;i++){
        let randomNum = random()
       markObj[subjects[i]] = randomNum ;
       total_marks += randomNum;
        
    
    }
   percentage =  (total_marks*100)/(subjects.length*100)
    return [markObj , total_marks , percentage]
}
function random(){
    return Math.floor(Math.random()*100);
}
function getRandomName(length = 6) {
    let name = "";
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < length; i++) {
        name += letters[Math.floor(Math.random() * letters.length)];
    }

    return name.charAt(0).toUpperCase() + name.slice(1); // Capitalize first letter
}

function getsubjects(classs){
        // console.log(classs)
        let subjects
        if(classs == 1  || classs == 2){
            subjects =  ["hindi","english","maths"]
            
        }else if(classs == 3 || classs == 4 || classs ==5 || classs == 6 || classs == 7 || classs == 8){
            subjects = ["english","hindi","maths", "science","G.K.","social science"]
        }else if(classs== 9 || classs == 10){
            subjects = ["english" , "hindi","maths","science","history","social-science","G.K."]
        }
        // console.log(subjects)
        return subjects
    
} 
for(let i = 1 ; i<=10 ;i++){
    classes_number.push(i)
}
function getstudents(classs) {
    let students = []
    for(let j=1 ; j<=10 ; j++){
        let subjects = getsubjects(classs)
        // console.log(subjects)
        let marks =getMarks(subjects)
        
        students.push({
            student_name :getRandomName() ,
            father_name: getRandomName(),
            mother_name : getRandomName() ,
            DOB :  `200${Math.floor(Math.random() * 10)}-0${Math.floor(Math.random() * 9) + 1}-0${Math.floor(Math.random() * 9) + 1}`,
            marks : marks[0],
            total_marks : marks[1],
            percentage : marks[2].toFixed(2) + "%"
            
            
        })
    }
    return students;
}
// console.log(students)

let object_data = {
    school_name : "DPS",
    year : 2008
}

// object_data.classes = classes_number;

object_data.classes = classes_number.map(classs=>{
    return{
        class_name : classs,
        section : sections.map(sec=>{
            return {
                section_name : sec,
                student_details: getstudents(classs)
            
            
            }
        })
    }
})
console.log(JSON.stringify(object_data,null,2));


  