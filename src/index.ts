interface Human {
    name: string,
    gender: string,
    age: number
}

const person = {
    name: 'hys',
    age: 23,
    gender: 'male',
    
}

const sayHi = (person: Human):string => {
    const {name, age, gender} = person
    return `Hello ${name}, you are ${age}, you are a ${gender}`
}

console.log(sayHi(person))

export {};