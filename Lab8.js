//1
const array1 = [1,2,3];
const array2 = ['a','b','c'];
const array3 = [true,false];
const array4 = [{name:"Nazarius", name:'Nazarium'}];
const array5 = [null, undefined];
//2
array1.forEach((element) => {
    console.log(element);
  });
//3
const mappedArray = array2.map((element) => element.toUpperCase());
console.log(mappedArray);
//4
const filteredArray = array3.filter((element) => element === true);
console.log(filteredArray);
//5
const reducedValue = array1.reduce((accumulator, current) => accumulator + current, 0);
console.log(reducedValue);
//6
const sortedArray = array2.sort();
console.log(sortedArray);

const includesElement = array3.includes(false);
console.log(includesElement);

const joinedString = array4.join(", ");
console.log(joinedString);  
//7
function sum(numbers) {
  const mappedNumbers = numbers.map((element) => Number(element));
  return mappedNumbers.reduce((accumulator, current) => accumulator + current, 0);
}
//8
function getSentence(words) {
  return words.reduce((sentence, word) => `${sentence} ${word}`, "").trim();
}
//9
function sumNumArrays(array1, array2) {
  const combinedArray = array1.concat(array2);
  return combinedArray.reduce((accumulator, current) => accumulator + current, 0);
}
//10
function welcomeUsers(users) {
  return users.map((user) => `Hello, ${user.name}! You are ${user.age} years old.`);
}