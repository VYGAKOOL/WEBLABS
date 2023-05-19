//1
const array1 = [1,2,3];
const array2 = ['a','b','c'];
const array3 = [true,false];
const array4 = [{name:"Nazarius", name:'Nazarium'}];
const array5 = [null, undefined];
//2
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
  }
//3
let j = 0;
while (j < array2.length) {
  console.log(array2[j]);
  j++;
}
//4
let k = 0;
do {
  console.log(array3[k]);
  k++;
} while (k < array3.length);
//5
function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
//6
function getSentence(words) {
    return words.join(" ");
  }
//7
function sumNumArrays(array1, array2) {
    const combinedArray = array1.concat(array2);
    return sum(combinedArray);
  }
//8
function welcomeUsers(users) {
    const greetings = [];
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      const greeting = `Hello, ${user.name}! You are ${user.age} years old.`;
      greetings.push(greeting);
    }
    return greetings;
  }