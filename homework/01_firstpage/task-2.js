// Задание 1
const initTasktwo1 = function () {
  const arr = [1, 3, 3, 4, 5, 6, 4, 1];

  const res = arr.filter(function (number, index, arr) {
    return (!(arr.lastIndexOf(number) == index) || !(arr.indexOf(number) == index)) && true;
  });

  console.log(res);
}

// Задание 2
const initTasktwo2 = function () {
  const arr1 = [1, 3, 3, 4, 5, 6, 4, 1];

  console.log('Source arr:');
  console.log(arr1);
  for (let i = 0; i < arr1.length - 1; i++) {
    arr1.splice(i, 0, arr1.pop());
  }
  console.log('Res arr:');
  console.log(arr1);
}

// Задание 3
const initTasktwo3 = function () {
  const arrMap = [
    ["name", "Вася"],
    ["age", 56],
    [0, "value"]
  ];
  console.log(arrMapFixObj(arrMap));
}

function arrMapFixObj(arrMap) {
  const restObj = {};
  arrMap.forEach(elem => {
    restObj[elem[0]] = elem[1];
  });
  return restObj;
}

// Задание 4
const initTasktwo4 = function () {
  let obj = {
    prop1: 5,
    prop2: 6,
    prop3: 'sadfads'
  };
  let rez = 0;

  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      rez = rez + obj[key];
    }
  }
  console.log(`res: ${rez}`);
}


// Задание 5

const initTasktwo5 = function () {
  const five = [1, 3, 5, 4, 3, 2, 4, -2];
  console.log(getAverageArr(five));
}

function getAverageArr(five) {
  return five.reduce((prev, curr) => prev + curr, 0) / arr.length;
}

// Задание 6

function Calculator() {
  this.currentValue = 0;
  this.plus = function (val) {
      return this.currentValue += val;
  }

  this.minus = function (val) {
      return this.currentValue -= val;
  }

  this.multiply = function (val) {
      return this.currentValue *= val;
  }

  this.divide = function (val) {
      return this.currentValue /= val;
  }

  this.reset = function () {
      return this.currentValue = 0;
  }
}

const calculator = new Calculator();


// Задание 7
const initTasktwo7 = function () {
  const arstr = [{
    name: "Андрей",
    age: 75
  }, -5, "strFish", {
    count: 8
  }, "strTable", 567, "phone"];

  console.log(getObjGroupValuesArr(arstr));
}

function getObjGroupValuesArr(arstr) {
  let resObj = {
    numbers: [],
    strings: [],
    objects: []
  };

  arstr.forEach(item => {
    if (typeof item == "number") {
      resObj["numbers"].push(item);
    } else if (typeof item == "string") {
      resObj["strings"].push(item);
    } else if (typeof item === "object" && item !== null && !Array.isArray(item)) {
      resObj["objects"].push(item);
    }
  });

  return resObj;
}

// Задание 8
const initTasktwo8 = function () {
  const eight = [1, 4, 7, 4, 8, 2, 3, -9];

  console.log(sliceEight(eight, 6, 4));

}

function sliceEight(eight, start, end) {
  return (start > end) ? eight.slice(end, start) : eight.slice(start, end);
}

// Задание 9

const initTasktwo9 = function () {

console.log(isAnagrams("банка", "кабан"));
}

function isAnagrams(anagrFirst, anagrSecond) {
  if (anagrFirst.length !== anagrSecond.length) {
    return false;
  }

  const firstStrArr = [...anagrFirst.toLowerCase()].sort(),
    const secondStrArr = [...anagrSecond.toLowerCase()].sort();

  for (let i = 0; i < firstStrArr.length; i++) {
    if (firstStrArr[i] !== secondStrArr[i]) {
      return false;
    }
  }

  return true;
}

// Задание 10
const initTasktwo10 = function() {
  let nameObj = {
      name: "Александр",
      age: 32,
      phone: 5556431,
      city: "Екатеринбург",
      children: ["Иван", "Вася", "Петя"],
      animals: ["cat", "dog", {}],
      skills: null,
      0: {
          test: "Текст"
      },
      isSinger: false,
      printEntries: function() {
          for(let [key, value] of Object.entries(this)) {
              if (Array.isArray(value)) {
                  if(value.filter(item => item.constructor.name === "Object").length === 0) {
                      console.log(`${key}: ${value}`);
                  }
                  continue;
              }
              if(typeof value !== 'function' && (typeof value !== 'object' || value == null)) {
                  console.log(`${key}: ${value}`);
              }
          }
      }
  };

  nameObj.printEntries();
 
} 

// // Задание 11
const initTasktwo11 = function() {
  let functionProps = new FunctionProps();
  functionProps.setProp("name", "Василий", {writable: false});
  functionProps.setProp("phone", 211423);
  functionProps.setProp("city", ["Kazan", "Moskva"], {enumerable: false, configurable: false});
  functionProps.setProp("height");
  functionProps.setProp("obj", {key: "value"});
  functionProps.setProp("getTestText", () => {
      return ""
  });

 
  console.table(Object.getOwnPropertyDescriptors(functionProps));
  console.log(functionProps.name);

}

  this.setProp = (key, value = null, descriptorsProp = {}) => {
      if (!this.hasOwnProperty(key)) {
          Object.defineProperty(this, key, {
              value: value,
              writable: (typeof descriptorsProp.writable == 'boolean') ? descriptorsProp.writable : true,
              configurable: (typeof descriptorsProp.configurable == 'boolean') ? descriptorsProp.configurable : true,
              enumerable: (typeof descriptorsProp.enumerable == 'boolean') ? descriptorsProp.enumerable : true
          });
      }
  }
 