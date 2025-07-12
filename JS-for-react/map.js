
// 1. Basic examples 

let numbers = [2,53,52,5253];
const newNumbers = numbers.map(num => num*2);
console.log(newNumbers);


// 2. Array of objects 
const students = [
    {
        name: 'alamgir hossain',
        age : 22,
        cgpa : 3.72
    },
    {
        name: 'Ayat Rohman',
        age : 22,
        cgpa : 3.52
    },
    {
        name: 'Fayeza akter',
        age : 22,
        cgpa : 2.72
    }
];

const names = students.map(student => student.name);
console.log(names);

const result = students.map(student => student.cgpa);
console.log(result);


// 3. Map with index and value 

const studentNames = students.map((student,index) => `${index+1} : ${student.name}`);
console.log(studentNames);