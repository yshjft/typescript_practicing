const name ="hys", 
    age=23, 
    gender="male"

const sayHi = (name: string, age: number, gender?:string) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`)
}

sayHi(name, age, gender)

export {};