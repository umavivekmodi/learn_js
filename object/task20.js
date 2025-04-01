let yash = {}
let ravi = {}
let section = "a";
let class_name = 1;
kush = yash, // yah hone pr clg me empty value aati hai
jayant = ravi,// lekin ye value le rha h
marks = {hindi:100,english:100,maths:100}


// // part 1
// yash = {
//     class_name,
//     section ,
//     marks
// }
// // kush.marks.english = 200 //undefined cannot set properties
// // yash.marks.english =  500;
// class_name = 2
// ravi["class_name"]= class_name;
// ravi.section = section;
// ravi.marks = marks;
// // kush.marks =  500;
// // kush = yash,
// console.log({yash,kush})
// console.log({ravi , jayant})

// // part 2
// yash.marks = Object.assign(marks);
// yash.class_name = class_name;
// yash.section =section 
// console.log({yash, kush}); // yash ka data ko kush me copy past kr rha h

// // part 3
// yash = {...yash,class_name,section,marks}
// kush = yash;
// marks.hindi = 70;
// console.log({kush , yash , marks})// marks ko assign kr rha h baki refrence dikha rha h  or yash ki value kush me daal rha h

// // part 4
// yash = {class_name,section,marks:{...marks}};
// kush = yash;
// marks.hindi = 70; 
// kush.marks.english = 40;
// console.log({kush, yash, marks});
//jsme hum spread operator lga rhe h to wo uski value ko modify kr deta hai but object me change nahi krta means referance me change nahi hota agr usme change krna hai to hume perticular us object ko sepecify krna hoga

// // part 5// shallow copy // sirf first wale object ko he copy krta hai last ale ka reference deta hai
// yash = {class_name,section,marks:{...marks}};
// kush = {...yash};
// kush.marks.hindi =70;
// console.log({kush, yash, marks})
// // reference me change nahi hi rha 

// part 6 // deep copy 
yash = {class_name,section,marks:{...marks}}
kush = structuredClone(yash);
kush.marks.hindi =70;
console.log({kush, yash, marks})
// isme kush ke marks me change hoga but yash marks me change nahi hoga
// yash ka reference rhega but kush me copy krega ko uski value change ho jaegi






