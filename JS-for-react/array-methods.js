const products = [
    {name : 'laptop', price : 125000, color : 'silver' , brand : 'HP'},
    {name : 'Mobile', price : 25000, color : 'blace', brand : 'apple'}, 
    {name : 'Watch', price : 500, color : 'gold', brand : 'casio'},
    {name : 'Camera', price : 12000, color : 'gray', brand : 'Canon'}
];

const brands = products.map(product => product.brand);
console.log(brands);

products.forEach(product => console.log(product.price));

let totalExpanse = 0;
products.forEach(x => totalExpanse += x.price);
console.log(`My total Expanse is : ${totalExpanse}`);

// Filter twenty above price products list
let twentyAbovePrice = products.filter(product => product.price >= 20000);
console.log(twentyAbovePrice);

let mostExpensiveProductNames = products.filter(product => product.price >= 100000).map(product => product.name);
// const lessExpenseProducts = products.map(product => product.price).map(product => product.price < 10000);
console.log(mostExpensiveProductNames);