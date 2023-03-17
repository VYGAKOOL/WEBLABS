// Створення об'єкту з різними типами даних
let obj1 = {
    name: 'John',
    age: 30,
    isMarried: false,
    hobbies: ['reading', 'swimming', 'coding'],
    address: {
      city: 'Kyiv',
      country: 'Ukraine'
    }
  };
  
// Змінюємо значення в об'єкті з використанням if ... else
if (obj1.isMarried) {
    obj1.spouse = 'Mary';
  } else {
    obj1.spouse = 'single';
  }
  
  // Додавання нового ключа та значення до об'єкту
  obj1.job = 'programmer';
  
  // Створення об'єкту з різними типами даних
  let obj2 = {
    title: 'JavaScript Basics',
    author: 'Jane Doe',
    price: 25.99,
    isAvailable: true,
    tags: ['javascript', 'programming', 'web development']
  };
  
// Змінюємо значення в об'єкті з використанням if ... else
if (obj2.price > 30) {
    obj2.isDiscounted = false;
  } else {
    obj2.isDiscounted = true;
  }
  
  // Додавання нового ключа та значення до об'єкту
  obj2.publishedYear = 2021;
  
  // Створення об'єкту з різними типами даних
  let obj3 = {
    firstName: 'Mary',
    lastName: 'Smith',
    birthDate: new Date('1985-02-17'),
    isEmployed: true,
    contact: {
      phone: '555-1234',
      email: 'mary.smith@example.com'
    }
  };
  
// Змінюємо значення в об'єкті з використанням if ... else
if (obj3.isEmployed) {
    obj3.jobTitle = 'Developer';
  } else {
    obj3.jobTitle = 'Unemployed';
  }
  
  // Додавання нового ключа та значення до об'єкту
  obj3.address = '123 Main St';
  
  // Створення об'єкту з різними типами даних
  let obj4 = {
    name: 'Samsung Galaxy S20',
    brand: 'Samsung',
    price: 799.99,
    isAvailable: false,
    features: ['6.2" display', '12GB RAM', '128GB storage']
  };
  
// Змінюємо значення в об'єкті з використанням if ... else
if (obj4.isAvailable) {
    obj4.status = 'In stock';
  } else {
    obj4.status = 'Out of stock';
  }
  
  // Додавання нового ключа та значення до об'єкту
  obj4.releasedYear = 2020;
  
  // Створення об'єкту з різними типами даних
  let obj5 = {
    username: 'johndoe',
    password: 'password123',
    isLoggedIn: false,
    accountType: 'free',
    preferences: {
      language: 'en',
      theme: 'dark'
    }
  };
  
// Змінюємо значення в об'єкті з використанням if ... else
if (obj5.isLoggedIn) {
    obj5.accountType = 'premium';
  } else {
    obj5.accountType = 'free';
  }
  
  // Додавання нового ключа та значення до об'єкту
  obj5.lastLogin = new Date();

   // Виведення дня тижня за допомогою switch . . . case
let dayOfWeek = 3; 

switch (dayOfWeek) {
  case 1:
    console.log("Понеділок");
    break;
  case 2:
    console.log("Вівторок");
    break;
  case 3:
    console.log("Середа");
    break;
  case 4:
    console.log("Четвер");
    break;
  case 5:
    console.log("П'ятниця");
    break;
  case 6:
    console.log("Субота");
    break;
  case 7:
    console.log("Неділя");
    break;
  default:
    console.log("Некоректний номер дня тижня");
    break;
}

// Метод Object.assign()
const obj01 = { a: 1, b: 2 };
const obj02 = { c: 3, d: 4 };
const obj03 = Object.assign({}, obj01, obj02);
console.log(obj03); // { a: 1, b: 2, c: 3, d: 4 }

// Метод Object.freeze()
const objf = { a: 1, b: 2 };
Object.freeze(objf);
objf.a = 3;
console.log(objf); // { a: 1, b: 2 }

// Метод Object.keys()
const objk = { a: 1, b: 2, c: 3 };
const keys = Object.keys(objk);
console.log(keys); // [ 'a', 'b', 'c' ]

// Метод Object.entries()
const obje = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obje);
console.log(entries); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
