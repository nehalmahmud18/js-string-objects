const person = {
    name: 'amin uddin',
    age: 34,
    salary: 23000,
    isMarried: true,
    profession: 'developer',
    'fav places': ['kuakata', 'cox-bazar']
}

person.salary = 30000;
person['age'] = 34;

const propName = 'profession';
person[propName] = 'devops';
console.log(person)