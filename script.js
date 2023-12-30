//----------------#1

const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

function general() {
    let names = clients1.filter((name) => !clients2.includes(name));
    let general = [...clients2, ...names];
    return general;
};

console.log(general());


//----------------#2

const characters = [
    {
      name: "Елена",
      lastName: "Гилберт",
      age: 17, 
      gender: "woman",
      status: "human"
    },
    {
      name: "Кэролайн",
      lastName: "Форбс",
      age: 17,
      gender: "woman",
      status: "human"
    },
    {
      name: "Аларик",
      lastName: "Зальцман",
      age: 31,
      gender: "man",
      status: "human"
    },
    {
      name: "Дэймон",
      lastName: "Сальваторе",
      age: 156,
      gender: "man",
      status: "vampire"
    },
    {
      name: "Ребекка",
      lastName: "Майклсон",
      age: 1089,
      gender: "woman",
      status: "vempire"
    },
    {
      name: "Клаус",
      lastName: "Майклсон",
      age: 1093,
      gender: "man",
      status: "vampire"
    }
];

function charactersShort(arr) {
    let charactersShortInfo = [];
    arr.forEach(value => {
        let {name, lastName, age, gender, status} = value;
        value = {
            name: name,
            lastName: lastName,
            age: age,
        }
        charactersShortInfo.push(value);
    });
    return charactersShortInfo;
};

console.log(charactersShort(characters));



// ----------------#3

const user1 = {
    name: "John",
    years: 30
};

function destructuring(obj) {
    let {name, years, isAdmin} = obj;
    obj = {
        'ім\'я': name,
        вік: years,
        isAdmin: isAdmin,
    }
    if (!obj.isAdmin) {
        obj.isAdmin = false
    };
    return obj;
};

console.log(destructuring(user1));


// ----------------#4

const satoshi2020 = {
    name: 'Nick',
    surname: 'Sabo',
    age: 51,
    country: 'Japan',
    birth: '1979-08-21',
    location: {
      lat: 38.869422, 
      lng: 139.876632
    }
};
  
const satoshi2019 = {
    name: 'Dorian',
    surname: 'Nakamoto',
    age: 44,
    hidden: true,
    country: 'USA',
    wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    browser: 'Chrome'
};
  
const satoshi2018 = {
    name: 'Satoshi',
    surname: 'Nakamoto', 
    technology: 'Bitcoin',
    country: 'Japan',
    browser: 'Tor',
    birth: '1975-04-05'
};

let fullProfile ={...satoshi2018, ...satoshi2019, ...satoshi2020};

console.log(fullProfile);


//---------------#5

const books = [{
    name: 'Harry Potter',
    author: 'J.K. Rowling'
}, {
    name: 'Lord of the rings',
    author: 'J.R.R. Tolkien'
}, {
    name: 'The witcher',
    author: 'Andrzej Sapkowski'
}];
  
const bookToAdd = {
    name: 'Game of thrones',
    author: 'George R. R. Martin'
};

let newBooks = [...books, bookToAdd];
console.log(newBooks);


//----------------------#6

const employee = {
    name: 'Vitalii',
    surname: 'Klichko'
};

let newEmployee = {...employee, age: 90, salary: 90000};
console.log(newEmployee);
console.log(employee);


//----------------------#6


const array = ['value', () => 'showValue'];

const [value, showValue] = array;

alert(value); 
alert(showValue());