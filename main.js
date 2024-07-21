"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myObj = {
    name: "mutaiba",
    class: "thursday morning",
    dob: 1382007,
};
console.log(myObj);
// EX 2
let teacher = {
    name: "Hamza alvi",
    experiance: 3,
    wayOfTeaching: "Excelent"
};
console.log(teacher);
console.log(teacher["wayOfTeaching"]);
let student = {
    name: "jaweriya",
    id: 321457,
    isStudent: true,
    isTalented: true,
};
student.name = "jaweria siddiq"; // can change anything like this
console.log(student);
// 
let student2 = {
    name: "mutaiba",
    id: 23456,
    isStudent: true,
    isTalented: true,
};
console.log(student2);
console.log(Object.keys(student2));
console.log(Object.values(student2));
//EX 3
let otherType;
otherType = {
    name: "asfa",
    isAdult: true
};
let About = {
    name: "misbah",
    dob: 882005,
    class: "Thursday",
    isActiveStu: false,
    persnolInfo: {
        contact: 234567,
        Email: "misbah@gmail.com",
        adrees: "woh to mujhy khud nhi pata😏"
    },
    department: {
        depName: "giaic",
        faculty: "bcom"
    }
};
console.log(About);
console.log(Object.entries(About.persnolInfo));
//Functions in object 
// When we use function in obj called methodes
const friend = {
    name: "jaweria",
    isFriend: true,
    gender: "female",
    callName: function () {
        console.log("hello world");
    }
};
friend.callName();
