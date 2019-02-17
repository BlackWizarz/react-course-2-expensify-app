// Object Destructuring

// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// const {name: firstname = 'Anonymous', age} = person
// // const name = person.name
// // const age = person.age

// console.log(`${firstname} is ${age}.`)


// const {city, temp: temperature} = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }


// const { name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)


// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [, city, state] = address;

console.log(`You are in ${city} ${state}`)