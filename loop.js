const mobile = {
    brand: 'samsung',
    screen: '6.2 inch',
    camera: '23mp',
    price: 24000
}
// for(const prop in mobile){
//     console.log(prop)
//     console.log(mobile[prop])
// }

const keys = Object.keys(mobile)
console.log(keys)

for(const key of keys){
    console.log(key, mobile[key])
}