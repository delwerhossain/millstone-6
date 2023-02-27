const f1 = { name: "John", age: 20, country: "India" };
const f2 = { name: "John", age: 20, country: "India" };
const pair = Object.entries(f2);
// [name ,age, country] = pair
// console.log(country[1]);


for (const key in f2) { 
    // console.log(key , f2[key]);
}

// check objcet r same or not 
if (f1.length === f2.length) {
    for (const key in f1) {

        if (f1[key] !== f2[key]) {
            return false;
        }
    }
    return true;    
}
else {
    return false;
}