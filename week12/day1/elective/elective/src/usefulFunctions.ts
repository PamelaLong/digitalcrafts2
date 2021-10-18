

interface Student {
    firstName: string,
    lastName: string,
    birthday?: string
}

interface Teacher {
    firstName: string,
    lastName: string,
    birthday?: string,
    postion: string
}

export const Tim: Student = {
    firstName: "Tim",
    lastName: "Davis"
}

export const Joe: Teacher = {
    firstName: "Joe",
    lastName: "Fraiser",
    birthday: "wouldn't you like to know",
    postion: "teacher"
}

let Pamela = "smiley"
let Bernie = true
let Desiree = {
    name: "Desiree",
    age: 123456,
    inAHouse: true
}
function sayHelloToAStudent (student:string){
// how to avoid the interface
    console.log("Hello", student)
}

sayHelloToAStudent(Pamela)
sayHelloToAStudent(Desiree.name)