const user = {
  id: 1,
  name: "Rokib",
  job: "Web Instructor",
  marks: {
    bangla: 80,
    english: 75,
    math: 90,
  },
  isSingle: false,
  friends: ["Alia", "Tahiya", "Sumon", "RandomGirl"],
};

const stringified = JSON.stringify(user);
// const objectConvert = JSON.parse(stringified);

console.log(stringified);
