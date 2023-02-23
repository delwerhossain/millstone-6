// // Write an arrow function that will take 3 parameters, will multiply
// // the parameters and will return the result.
// const x = (a, b, c) => a * b * c;
// const text = x(2, 3, 4);


// // Write the following sentence in three lines and print the result:
// // I am a web developer. I love to code. I love to eat biryani.
// const sentence = `
// I am a web developer.
// I love to code.
// I love to eat biryani.`;


// // Write an arrow function that will take 2 parameters: One parameter
// // will come from you and the other parameter will be a default
// // parameter. Add these two parameters and return the result.
// const add = (a, b = 0) => a + b;
// const result = add(2, 3);



//----------------------------------------------------------------------------------------------------
//              problem 2

// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.

// const friends = ['Mar', 'John', 'Jane','dse'];
// const xname = friends => {
//     let newName = [];
//     for (friend of friends) {
//         if (friend.length % 2 === 0) {
//             {
//              newName.push(friend);
//             }
//         }
//     }
//     return newName;
// }
// console.log(xname(friends));




// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements

const square = arr => {
    let sum = 0;
    for (element of arr) {
        sum += element * element;
    }
    return sum/arr.length;
    
}
console.log(square(arr));


// const square1 = arr1 => { }




// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements




