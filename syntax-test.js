const hobbies = ['first item', 'second item']
// const stores a pointer to a value, i.e. its address.
// therefore, you can edit the value of a const
hobbies.push('third item')

for (let hobby of hobbies) {
    console.log(hobby)
}

//make a copy of an array w/o index
const copiedHobbies = hobbies.slice()
console.log(copiedHobbies)

// extract items of array with ... aka 'spread' operator
const otherCopiedHobbies = [...hobbies]
console.log(otherCopiedHobbies)

// ... to * or *** in Python
const toArray = (...args) => {
    return args
}

console.log(hobbies.map( hobby => `Item # ${hobbies.indexOf(hobby) + 1}: ${hobby}`))

// Objects

const person = {
    name: 'Claudia',
    age: 31,
    greet() {
        console.log(`Hello there, ${this.name}`)
    }
}

// can be explicitly with object attributes
const printName = personData => {
    console.log(personData.name)
}

// or can be implicit
const printNameImplicit = ({ name }) => {
    console.log(name);
}

printName(person)
printNameImplicit(person)

// object destructuring (by attribute name)
const { name, age } = person
console.log(typeof name, age)

// array destructuring (by position)
let [hobby1, hobb2] = hobbies
console.log(hobby1)

