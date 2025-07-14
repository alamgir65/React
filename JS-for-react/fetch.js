let student = {
    name : 'Alamgir hossain',
    age : 22,
    skill : ['C++','Python','JS']
};

console.log(student);

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);


// Fetch 
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));

// keys, values 
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys, values);


