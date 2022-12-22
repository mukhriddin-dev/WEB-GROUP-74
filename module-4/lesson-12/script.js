import {apps} from "./app";


console.log(apps());


// "use strict";

// console.log(this); // global object window

// function apply() {
//    console.log(this);
// }

// if use strict ? "undefined" : Global Object Window

// apply()

// const app = () => {
//    console.log(this)
// }

// if use strict ? "Global Object Window" : Global Object Window

// app()

// const text = function () {
//    console.log("get text");
//    console.log(this);
// }

// if use strict ? "undefined" : global object window

// text()



// const obj = {
//    isname: "this keyword",
//    a: 12,
//    b: 34,
//    getThis: function () {
//       console.log(this.isname);
//    },
//    addNumber: function () {
//       console.log(this.a + this.b);
//    }
// }

// obj.getThis()
// obj.addNumber()


// if this keyword object ? = "object" 

//ES5

// function Nt(name, location, age, size) {

//    this.name = name;
//    this.location = location;
//    this.age = age;
//    this.size = size;

//    this.getAll = function () {
//       console.log(`name:${this.name}, location: ${this.location} , age:${this.age} , size:${this.size}`);
//    }
// }

// Nt.prototype.fullName = function () {
//    console.log(this.name);
// }

// const Xadra = new Nt("Najot ta'lim Xadra filial", "Xadra", "2", "medium");
// const Chilonzor = new Nt("Najot ta'lim Chilonzor filial", "Chilonzor", "1.5", "large")

// console.log(Xadra);
// console.log(Chilonzor);

// Xadra.getAll();
// Chilonzor.getAll();
// Xadra.fullName()
// Chilonzor.fullName()




class Laptops {

   constructor(name, color, size, power, brand, price) {
      this.name = name;
      this.color = color;
      this.size = size;
      this.power = power;
      this.brand = brand;
      this.price = price;
   }

   getFullInfo() {
      console.log(`name:${this.name} color:${this.color} size:${this.size}, power:${this.power} brand:${this.brand} price:${this.price}`);
   }

   getName() {
      console.log(`name:${this.name}`);
   }



}

const HP = new Laptops('HP enevy x360', 'silver', '15.6', '7h', 'HP', '1050$');
const Macbookpro = new Laptops("Macbook pro 2018", 'white', '15.2', '12h', "Apple", "1100$")



class Car extends Laptops {
   constructor(name, color, size, power, brand, price, speed, year) {

      super(name, color, size, power, brand, price),

         this.speed = speed;
      this.year = year;

   }
}



const KIA = new Car('KIA K5', "Black", "4", "320", "KIA", "35000$", "270", '2022');



class Bike extends Car {
   constructor(name, color, size, power, brand, price, speed, year, maxspeed) {

      super(name, color, size, power, brand, price, speed, year);
      this.maxspeed = maxspeed;


   }
}

const RedBullBike = new Bike('Redbull Moto GP', 'blue & red', '1', '600', 'Redbull', '55000$', '300', '2017', "420");


// HP.getName()
// Macbookpro.getName()
// KIA.getName()
// RedBullBike.getName()


function sayHello(text) {
   console.log(text + ": " + this.say);
}

const person = {
   name: "Asilbek",
   say: "Assalomu alaykum"
}

sayHello.call(person, 'Asilbek')
sayHello.apply(person, ["Asilbek"])


function multiNumber(extra) {
   console.log("React" + this + " " + extra);
}

const num = multiNumber.bind("js")
num("web development")


