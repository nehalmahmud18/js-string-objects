const address = 'andorkilla';
const part = address.slice(2, 5);

console.log(part);

const sentence = 'i am a good student ';
// console.log(sentence.split( 'a'));

const friendsStr = 'rahim , kahim, dahim, fahim';
const friends = friendsStr.split(',');
console.log(friends);
const realfriend =  ['rahim' , 'kahim' , 'dahim', 'fahim']; 
console.log(realfriend.join());
console.log(realfriend.join('|'));