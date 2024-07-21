let myObj = {
    name: "mutaiba",
    class: "thursday morning",
    dob: 13_8_2007 ,
}
console.log(myObj)

// EX 2
let teacher = {
    name: "Hamza alvi",
    experiance: 3,
    wayOfTeaching: "Excelent"
}
console.log(teacher)
console.log(teacher["wayOfTeaching"])

// type declaration 
//create own type 
//"In JavaScript, a constructor object allows us to define a custom type and create multiple objects 
//of that type, enabling code reuse and modularity."
//and its first latter always will be capital

type StudentInfo ={
    name: string;
    id: number;
    isStudent: boolean;
    isTalented: boolean;
};

let student : StudentInfo = {
    name: "jaweriya",
    id: 321457,
    isStudent: true,
    isTalented: true,
};
student.name="jaweria siddiq"  // can change anything like this
console.log(student)

// 

let student2 : StudentInfo = {
    name: "mutaiba",
    id: 23456,
    isStudent: true,
    isTalented: true,
};
console.log(student2);
console.log(Object.keys(student2));
console.log(Object.values(student2))

//EX 3
let otherType : {
    name: string;
    isAdult: boolean
}
otherType = {
    name: "asfa",
    isAdult: true
}

// Nested Object

type About = {
name: string;
dob: number;
class: string;
isActiveStu: boolean;
persnolInfo: {
    contact: number;
    Email: string;
    adrees: string
},
department?: {
    depName: string,
    faculty: "bcom" | "ba" | "bs"

},
}

let About : About = {
    name : "misbah",
    dob: 8_8_2005,
    class: "Thursday",
    isActiveStu: false,
    persnolInfo : {
        contact: 234567,
        Email: "misbah@gmail.com",
        adrees: "woh to mujhy khud nhi pata😏"
    },
    department : {
        depName: "giaic",
        faculty: "bcom"
    }
    

};
console.log(About)
console.log(Object.entries(About.persnolInfo))

//Functions in object 
// When we use function in obj called methodes

const friend= {
    name: "jaweria",
    isFriend: true,
    gender: "female",
    callName: function(){
        console.log("hello world")
    }
}
friend.callName()


