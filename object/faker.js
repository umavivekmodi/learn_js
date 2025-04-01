// let student_profile = {
//     name : "any name",
//     fatherName :"any name",
//     motherName  : " any name",
//     dob : "yyyy-mm-dd"
// }

function createStudentProfile(name,fatherName,motherName,dob){
    return{
        name: "any name",
        fatherName :"any name",
        motherName : "any name",
        dob : "date"
    };
}


// let class_1_marks = {
//     english: 80,
//     hindi:85,
//     math: 75
// }

function class_first_marks(english , hindi,math){
    return{
        english : 80,
        hindi : 85,
        math : 75

    };
}




// let subjects_first =["hindi","english","maths"];
// let subjects_third = ["hindi" ,"english","maths","science","G.K." , "social-science"];
// let subject_eightTen = ["hindi" ,"english","maths","science","G.K." , "social-science","history" ];
// let subjects_arts = ["hindi","english","political-science","literature"];
// let subjects_commerce =["maths","finance" , "accounts","english","hindi"];
// let subjects_science_math = ["physics" , "chemistry","english","hindi","maths"];
// let subject_science_bio =["physics" , "chemistry","english","hindi", "BIO"];

function getStreams(){
    return ["science-maths", "science-bio","commerce", "arts"];
}

function getSubjectByClass(classNumber , streams ){
const subject = {
    1:["hindi","english","maths"],
    2:["hindi","english","maths"],
    3:["hindi" ,"english","maths","science","G.K." , "social-science"],
    4:["hindi" ,"english","maths","science","G.K." , "social-science"],
    5:["hindi" ,"english","maths","science","G.K." , "social-science"],
    6:["hindi" ,"english","maths","science","G.K." , "social-science"],
    7:["hindi" ,"english","maths","science","G.K." , "social-science"],
    8:["hindi" ,"english","maths","science","G.K." , "social-science"],
    9:["hindi" ,"english","maths","science","G.K." , "social-science","history"],
    10:["hindi" ,"english","maths","science","G.K." , "social-science","history"],
    11:{
        arts:["hindi","english","political-science","literature"],
        commerce:["maths","finance" , "accounts","english","hindi"],
        science_math:["physics" , "chemistry","english","hindi","maths"],
        science_bio:["physics" , "chemistry","english","hindi", "BIO"]
    },
    12:{
        arts:["hindi","english","political-science","literature"],
        commerce:["maths","finance" , "accounts","english","hindi"],
        science_math:["physics" , "chemistry","english","hindi","maths"],
        science_bio:["physics" , "chemistry","english","hindi", "BIO"] 
    }
};
if(classNumber <=10){
    return subject[classNumber] || [] ;
}else if(classNumber ===11 ||classNumber === 12){
    return subject[classNumber][streams] || [];
}else{
    return [];
}
}

// let streams = ["science-maths", "science-bio","commerce", "arts"];

// let school = {
//     name: "DPS",
//     est : 2008
// }

let classes = [1,2,3,4,5,6,7,8,9,10,11,12];

// let section = ["A","B","C","D"]
function getSection(){
    return ["A","B","C","D"]
}
// let students = [1,2,3,4,5,6,7,8,9,10]
function getstudents(){
    return{
        students : [1,2,3,4,5,6,7,8,9,10],
        profile :createStudentProfile(),
        section : getSection(),
        subject :getSubjectByClass(),
        streams : getStreams(),
        marks : class_first_marks()

    }
}


let object = {
    name : "DPS",
    est :2008,
    classes : classes.map(classs=>{
        let streams = getStreams(classs);
        return{
            section : section.map(section=>{
                return getSection(classs,section);
            }),
            subject :streams.getSubjectByClass
            streams :
        } 
    })
}

// let create_data = {
//     school_name : "DPS",
//     estublished_year : 2008,
//     classes : classes.map(classs=>{
//         return {
//             class_name : classs
//         }
//     })
// }