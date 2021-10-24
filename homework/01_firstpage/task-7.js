 'use strict'
 const animal = {
     nickname: "Пушок",
     eat() {
         console.log(`${this.nickname} ест`)
     },
 
     say() {
         console.log("неизвестное животное молчит")
     },
 
     
     rename(newNickname) {
         const regexp = /^([а-яА-Я]*_*\s*)*$/g;
         if (regexp.test(newNickname)) {
             this.nickname = newNickname;
         }
     }
 };
 
 /** 
  Путём прототипного наследования создать объекты кота, собаки и попугая. 
  Переопределить в них метод say, в зависимости от типа животного.
  Для кота добавить новый метод hunt, выводящий сообщение "/кличка/ охотится"
  */
 const cat = {
     __proto__: animal,
 
     say() {
         console.log("Flex")
     },
 
     hunt() {
         console.log(`${this.nickname} охотится`)
     }
 };
 
 const dog = {
     __proto__: animal,
 
     say() {
         console.log("Charli")
     }
 };
 
 const parrot = {
     __proto__: animal,
 
     say() {
         console.log("Kecha")
     }
 };
 
 /**
   Все перечисленные методы и свойства должны быть защищены от удаления и перезаписи.
  Методы должны быть неперечисляемыми.
  */
  Object.defineProperties(animalObj, {
    "name": {configurable: false},
    "eat": {configurable: false, writable: false, enumerable: false},
    "say": {configurable: false, writable: false, enumerable: false},
    "rename": {configurable: false, writable: false, enumerable: false}
});



Object.defineProperties(cat, {
    "say": {configurable: false, writable: false, enumerable: false},
    "hunt": {configurable: false, writable: false, enumerable: false},
});


Object.defineProperties(dog, {
    "say": {configurable: false, writable: false, enumerable: false}
});



Object.defineProperties(parrot, {
    "say": {configurable: false, writable: false, enumerable: false}
});

Object.setPrototypeOf(cat, animalObj);
Object.setPrototypeOf(dog, animalObj);
Object.setPrototypeOf(parrot, animalObj);
 
 /** 
  Выполнить то же самое использую функции конструкторы
  */
 
 
 function Animaltwo(nickname) {
     this.nickname = nickname;
 
     this.eat = function () {
         console.log(`${this.nickname} ест`);
     }
 
     this.say = function () {
         console.log("неизвестное животное молчит");
     }
 
     this.rename = function (newNickname) {
         const regexp = /^([а-яА-Я]*_*\s*)*$/g;
         if (regexp.test(newNickname)) {
             this.nickname = newNickname;
         }
     }}

     Object.defineProperties(this, {
        "_name": {configurable: false},
        "name": {
            get: () => {
                return this._name
            }, configurable: false, enumerable: false
        },
        "_say": {configurable: false, enumerable: false},
        "say": {
            get: () => {
                return () => {
                    this._say();
                }
            },
            configurable: false, enumerable: false
        },
        "eat": {configurable: false, writable: false, enumerable: false},
        "rename": {configurable: false, writable: false, enumerable: false}
    });
 
    const animalFun = new Animaltwo("Животное"),
    catFun = new CatFunc("Пушок"),
    dogFun = new DogFunc("Flex"),
    parrotFun = new ParrotFunc("Kecha");
 
    function CatFunc(name) {
        Animaltwo.call(this, name);
        this.hunt = function () {
            console.log(`${this.name} охотится`);
        }
        this._say = function () {
            console.log("Кот молчит")
        }
        Object.defineProperty(this, "hunt", {configurable: false, writable: false, enumerable: false});
    }
 
 
    function DogFunc(name) {
        Animaltwo.call(this, name);
        this._say = function () {
            console.log("Собака молчит")
        }
    }
    
    function ParrotFunc(name) {
        Animaltwo.call(this, name);
        this._say = function () {
            console.log("Попугай молчит")
        }
    }
 
 /**
  Выполнить то же самое, используя классы.
  */
 
 'use strict'
 
 class Animalthree {
     _nickname;
 
     constructor(nickname) {
         this._nickname = nickname
     }
 
     eat() {
         console.log(`${this._nickname} ест`);
     }
 
     say() {
         console.log("неизвестное животное молчит");
     }
 
     get name() {
         return this._nickname;
     }
 
 
     set name(newNickname) {
         const regexp = /^([а-яА-Я]*_*\s*)*$/g;
         if (regexp.test(newNickname)) {
             this._nickname = newNickname;
         }
     }
 
 
 }
 
 class Catthree extends Animalthree {
     constructor(nickname) {
         super(nickname);
     }
 
     say() {
         console.log(`Flex`)
     };
 
     hunt() {
         
         console.log(`${this._nickname} охотится`);
     }
 }
 
 
 class Dogthree extends Animalthree {
     constructor(nickname) {
         super(nickname);
     }
 
     say() {
         console.log(`Charli`)
     };
 }
 
 class Parrotthree extends Animalthree {
     constructor(nickname) {
         super(nickname);
     }
 
     say() {
         console.log(`Kecha`)
     };
 } 