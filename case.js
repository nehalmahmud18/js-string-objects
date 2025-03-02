const school = 'Raj UK uttara model school'

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = 'Chemistry';
const book = 'chemistry';

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('fatay felbo pore');
}
else{
    console.log('page ultabo ');
}

const drink = 'water  ';
const juice = '  water  ';

if(drink.trim() === juice.trim()){
    console.log('pani er opor naam life');
}
else{
    console.log('khaite pari na');
}