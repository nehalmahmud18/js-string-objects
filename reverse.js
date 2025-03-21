const sentence = 'i am learning web dev';

let reverse = ''
for(const letter of sentence){
    // console.log(letter)
    reverse = letter + reverse;

}
console.log(reverse)

let rev = ''

for(i=0; i< sentence.length ; i++){
    const letter= sentence[ i] ;
    rev = letter+ rev;

}
console.log(rev)

// shortcut 

const reveresed = sentence.split('').reverse().join('')
console.log(reveresed);