class Human {
    public name: string
    private age: number
    public gender: string
    constructor(name:string, age:number, gender:string){
        this.name=name
        this.age=age
        this.gender=gender
    }
    
    getAge(){
        return this.age
    }
}

const lynn = new Human('hys', 23, 'male')


const sayHi = (person: Human):string => {
    const {name, gender} = person
    const age = person.getAge()
    return `Hello ${name}, you are ${age}, you are a ${gender}`
}

console.log(sayHi(lynn))

export {};