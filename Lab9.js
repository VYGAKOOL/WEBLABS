//1
const str1 = 'Hello';
const str2 = 'world';
const str3 = 'Shrek';
const str4 = 'Swamp';
const str5 = 'Fiona';
//2
const concat1 = str1 + ' ' + str2; 
const concat2 = `${str3} is awesome`; 
const concat3 = str4.concat(' is', ' loved by ', ' ', str5); 
//3
const lowercase = str1.toLowerCase(); 
const uppercase = str2.toUpperCase(); 
//4
const replaced = str3.replace('rek', 'rincess');
const trimmed = '   Example    '.trim();
const matched = str4.match(/s/gi);
//5
const arr = [str1, str2, str3, str4, str5];
arr.sort((a, b) => a.localeCompare(b));
//6
const includesExample = str4.includes('wamp');
//7
function welcomeUsers(users) {
    return users.map((user) => `Welcome, ${user.name}! Your email is ${user.email}`);
  }
//8
function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  }
