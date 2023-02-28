function closerF() {
    let f1 = 0;
    return function x() {
        f1++;
        return f1;
    };
}

let check = closerF();
let c2 = closerF();
console.log(check());
console.log(check());
console.log(check());
console.log(check());
console.log(check());
console.log(check());
console.log(check() ,c2());

