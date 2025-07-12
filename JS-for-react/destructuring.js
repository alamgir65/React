// 1. Array destructuring 

const numbers = [100,200,300,500];
const [x,y] = numbers;
console.log(x,y);

const fun=()=>{
    return [89,34];
}

const [a,b,c] = fun();
console.log(a,b,c);


// 2. Object destructuring in js 
// ****But object er jonno variable name and key name same hote hobe ****

const student =  {name: 'alamgir hossain', age : 22, dept : 'CSE'};
const {name,dept} = student;
console.log(name,dept);

const employee = {
    id : 131,
    salary : 60000,
    designation : 'Sr. Software Engineer',
    properties : {
        height : 5.7,
        color : 'Dark'
    }
};

const {height,color} = employee.properties;
console.log(height,color);