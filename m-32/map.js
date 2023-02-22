const arr = [1, 2, 3, 4, 5];
const result = arr.map((x) => x + 2);
// console.log(result);



// 
const users = [
    { name: 'John', email: 'fasdf@gmail.com' },
    { name: 'eane', email: 'fasdf@gmail.com' },
    { name: 'tane', email: 'fasdf@gmail.com' },
    { name: 'aane', email: 'fasdf@gmail.com' }

]
const resultString = users.map(x=>x.name);
// console.log(resultString);



//
const userEach = [
    { name: 'John', email: 'fasdf@gmail.com' , price :100 },
    { name: 'eane', email: 'fasdf@gmail.com' , price :120 },
    { name: 'tane', email: 'fasdf@gmail.com' , price :130 },
    { name: 'aane', email: 'fasdf@gmail.com' , price :140 }

]
const resultEach = userEach.filter(x => x.price > 120);
const findUse = userEach.find(x => x.price > 120);

console.log(resultEach );
console.log(findUse);

