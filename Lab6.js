//1
const array1 = [1,2,3];
const array2 = ['a','b','c'];
const array3 = [true,false];
const array4 = [{name:"Nazarius", name:'Nazarium'}];
const array5 = [null, undefined];
//2
array1.push(4);
array1.pop();
//3
array2.shift();
console.log(array2);
array2.unshift('d');
console.log(array2);
//4
const Newarray = array1.concat(array2);
console.log(Newarray);
//5
//a)
function swapWithDestructuring(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }
  
  const array = [1, 2, 3, 4];
  swapWithDestructuring(array, 0, 3);
  console.log(array);
//b)
  function swapWithoutDestructuring(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  
  const array6 = [1, 2, 3, 4];
  swapWithoutDestructuring(array6, 0, 3);
  console.log(array6);
//6
function sumArray(array7) {
    let sum = 0;
    for (let i = 0; i < array7.length; i++) {
      sum += array7[i];
    }
    return sum;
  }
  
  const numbers = [1,5,3,5,4,0];
  console.log(sumArray(numbers));