let numbers = [100,1456,35,55];
let student = {
    name : 'Alamgir Hossain',
    age : 22,
    degree : ['SSC', 'HSC', 'BSc in CSE']
};

// 1. templete string 

let about = `My name is ${student.name} , I am ${student.age} years old. I am currently pursuing a degree ${student.degree[2]}`;
console.log(about);

// 2. arrow function 

let age = () => 23;
console.log(age());

let increaseAge = age => age+10;
console.log(increaseAge(22));

let add =( a,b,c) => a+b+c;
console.log(add(10,30,20));

let fun = (name,age) =>{
    let x = `I'm ${name} and I'm ${age} years old.`;
    return x;
}
console.log(fun('Ayat Rahman',21));



// 3. Spread operator 

let marks = [45, 56, 76,47,92];
let newMarks = marks; // eibabe amra jodhi new kono array create kori erpor ami main array te change korle 2ta tei change hoye jai

// marks.push(0);
// console.log(marks);
// console.log(newMarks);

let arektaMarks = [...marks,99,98,100]; // aybabe korle porer 1000 amar arektaMarks a add hobe nah
marks.push(1000);
console.log(arektaMarks);