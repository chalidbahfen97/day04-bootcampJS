//sets : menyimpan data unique tapi dengan satu attribute

const students = new Set();

students.add("dian");
students.add("code");
students.add("academy");

students.forEach(el => console.log(el));

const numbers = [3,4,5,6,7,8,8,7,6];
const numSet = new Set(numbers);

const myName = new Set (["dian","codeid","dian"]);

console.log();