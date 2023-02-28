// console.log(hositing());
// console.log(f1());
// var x = 10;
function hositing() {
  console.log("under Hoisting");
}


const f1 = () => {
  console.log("arrows");
};

// compare coarity
const s1 = (check) => {
  if (check == false) {
    console.log("are same ");
  } else {
    console.log("Not same");
  }
};
const s0 = (check) => {
  if (check == true) {
    console.log("are same ");
  } else {
    console.log("Not same");
  }
};
// 1 is true and 0 is true 
// coercion problem
s1('0');
s0('1');
