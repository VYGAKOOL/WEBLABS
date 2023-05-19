//1
class Character {
    constructor(name, type, level) {
      this.name = name;
      this.type = type;
      this.level = level;
    }
  
    getName() {
      return this.name;
    }
  
    setName(newName) {
      this.name = newName;
    }
  
    getType() {
      return this.type;
    }
  
    setType(newType) {
      this.type = newType;
    }
  
    getLevel() {
      return this.level;
    }
  
    setLevel(newLevel) {
      this.level = newLevel;
    }
  
    move(x, y) {
      console.log(`${this.name} is moving to coordinates (${x}, ${y})`);
    }
  }
  
  const player1 = new Character('Player 1', 'Warrior', 80);
  const player2 = new Character('Player 2', 'Mage', 80);
  
  const getName = player1.getName.bind(player1);
  console.log(getName()); 
  
  player2.move.call(player2, 67, 27567); 
  
  const coordinates = [1, 2];
  player1.move.apply(player1, coordinates); 
//2

function Car(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  
  Car.prototype.getBrand = function () {
    return this.brand;
  };
  
  Car.prototype.getModel = function () {
    return this.model;
  };
  
  Car.prototype.getYear = function () {
    return this.year;
  };
  
  Car.prototype.getColor = function () {
    return this.color;
  };
  
  Car.prototype.setColor = function (newColor) {
    this.color = newColor;
  };
  
  Car.prototype.move = function (x, y) {
    console.log(`${this.brand} ${this.model} is moving to coordinates (${x}, ${y})`);
  };
  
  const car1 = new Car('Merc', 'W124 Restyling', 1996, 'Pink');
  const car2 = new Car('Shkoda', 'Superb', 2017, 'Blue');
  
  const getBrand = car1.getBrand.bind(car1);
  console.log(getBrand()); 
  
  car2.move.call(car2, 765, 76543); 
  
  const coordinates2 = [56, 2345];
  car1.move.apply(car1, coordinates2); 
  