let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// challenge
// name, age, location
// Michael is 43 and lives in Indianapolis
// Increase age+ then print new message

let person = {
  name: 'Michael',
  age: 43,
  location: 'Indianapolis'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)
