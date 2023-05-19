// Arrow function
const isNumber = value => {
    if (typeof value === 'number') {
      return true;
    } else {
      return false;
    }
  };
  
  // Function expression
  const isString = function(value) {
    if (typeof value === 'string') {
      return true;
    } else {
      return false;
    }
  };
  
  // Function declaration
  function isArray(value) {
    if (Array.isArray(value)) {
      return true;
    } else {
      return false;
    }
  }
  // switch ... case
  const getDayOfWeek = dayNumber => {
    let day;
    switch (dayNumber) {
      case 0:
        day = 'Неділя';
        break;
      case 1:
        day = 'Понеділок';
        break;
      case 2:
        day = 'Вівторок';
        break;
      case 3:
        day = 'Середа';
        break;
      case 4:
        day = 'Четвер';
        break;
      case 5:
        day = 'Пʼятниця';
        break;
      case 6:
        day = 'Субота';
        break;
      default:
        day = 'Недійсний номер дня';
    }
    return day;
  };
  // if ... else
  function getGrade(percentage) {
  let grade;
  if (percentage >= 90) {
    grade = 'A';
  } else if (percentage >= 80) {
    grade = 'B';
  } else if (percentage >= 70) {
    grade = 'C';
  } else if (percentage >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  return grade;
}
// class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    eat() {
      console.log(`${this.name} їсть.`);
    }
  
    sleep() {
      console.log(`${this.name} спить.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    bark() {
      console.log(`${this.name} гавкає.`);
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
  
    meow() {
      console.log(`${this.name} муркотить.`);
    }
  }
  
  const dog = new Dog('Барсік');
  dog.eat(); 
  dog.sleep(); 
  dog.bark(); 
  
  const cat = new Cat('Барсікіт');
  cat.eat();
  cat.sleep(); 
  cat.meow();
  